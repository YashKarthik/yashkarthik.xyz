- Single cycle datapaths have only one instruction in the datapath at a time.
- Not all stages of a datapath are used at the same time.
- So we can do stage-by-stage pipelining. Having multiple instructions in the datapath, but at different stages, to increase throughput.

- Now, instead of the clock frequency being limited by the critical path of slowest instruction, it's now limited by the critical path of the slowest stage.
![[Attachments/Pasted image 20241207183911.png]]
- 1 stage per clock cycle.
-  Split the datapath and add registers between each stage to _hold_ a signal until next clock cycle.
# Control Signals
- Multiple instructions in the datapath at the same time, can't just generate and forget.
- Eg: the control inputs into EX will be for instruction 1 vs the control inputs into regfile may be for instr 2.

**Two approaches:**
- Generate the control signals at each stage.
- Generate the control signal during _instruction decode_ and forward them along with the decoded instruction. ==`<-- we do this`==

## List of changes
- `dest_addr` input into the `regfile` now comes from the `rd` field from the WB stage.
	- By the time an instruction's WB stage comes along, some other instruction will be in the IF/ID stage.
	- The regfile can read and write from different addresses in a single clock cycle.
- MX Forwarding: alu output directly into ALU input.
- WX forwarding: DMEM output directly into ALU input.
- WM forwarding: DMEM output directly into DMEM input.
- Instruction scheduling for replacing `nops` when loading.
- Branch prediction (naive for now).

# Pipelining Hazards
## Structural Hazard
- A required resource is busy and needed in multiple stages.
- **Solutions**:
	- Instructions take turns/wait to use it.
	- Add more hardware.
	- Design ISA to prevent hazards - RISC-V way.
### Regfile
- regfile in riscv has separate ports for reading multiple registers.
- Hypothetical issue: what if an instruction needed to write to two registers?
### Memory
- `IMEM` and `DMEM` will almost certainly need to be accessed together. While accessed separately, they are the same physical memory.
- Solutions: stall or abstractions (caches) to make it such that they both appear/function more like separate mems.
## Data Hazard
![[Attachments/Pasted image 20241207191623.png]]
**Issue:**  `sub` reads regfile at t = 3 and `add` writes to the regfile at t = 5.
### Stalling
- The following instruction so that it reads from regfile after WB of the  instr it depends on.
- This is done by adding `nops`[^1] to the code. Instructions where nothing happens.
- The delay is cascaded to all following instructions.
### MX Forwarding
- Instead of waiting for WB and then reading from the regfile, we can try reading from the stage the value is calculated.
- The earliest stage where we know the value of `s0` is EX (T = 3).
- We can add hardware to _forward_ the value directly to `sub`'s EX (T = 4).
- This is called MX forwarding (M -> EX).
**Changes:**
- More wires.
- Wider muxes, since we have more inputs to select from.
- We need extra logic to check if we need forwarding.
#### Forwarding Condition
- Forwarding is done when one of the source registers of an instruction is the destination register of the previous instruction.
- We also ignore writes to `x0`.
$$
\begin{align}
inst_{EX}.rd == inst_{ID}.rs1 \\
inst_{EX}.rd \ne \texttt{x0}
\end{align}
$$

![[Attachments/Pasted image 20241208130236.png]]

### WX Forwarding
![[Attachments/Pasted image 20241208130011.png]]
- WB is too far along anyway.
- But, `t0` receives the value after M stage (T = 4) and `add` needs `t0` at T = 4 for EX.
- Even with forwarding we need to stall for one cycle.

![[Attachments/Pasted image 20241208130259.png]]

### Scheduling
- Instead of inserting `nops` to stall instructions.
- We can intelligently rearrange instructions such that some instructions which don't rely/cause hazards can be placed after hazard-causing instructions.
- So we still get work done in those _dead cycles_ instead of `nop`.
![[Attachments/Pasted image 20241208132235.png]]
- Here each of the load instruction would require a stall after it (along with WX forwarding).
- Instead of inserting a `nop` after each one, we see that the relevant registers do not cross-interact. The second `lw` doesn't depend on updated registers.
- So we move the second load to right below the first load. The second load replaces the first `nop` and the `add` replaces the second `nop`.
## Control Hazard
- Branch instruction determine the control flow of the program.
- The next instruction depends on whether the branch was taken or not.
- We get the result for the next PC after the EX (3rd) stage. By this time, two instructions have already entered the pipeline.
- If the branch is taken, we have to _flush_ the pipeline by conventing those instructions to `nops`.
![[Attachments/Pasted image 20241208133357.png]]
- We can try branch prediction! Naive prediction: branch is not taken.
- More depth in upper years.

[^1]: `nop <=> addi x0, x0, 0`