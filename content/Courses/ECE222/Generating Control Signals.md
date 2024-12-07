- Signals to toggle multiplexers across the datapath to perform different operations.
- Generated either using logic synthesis or ROM-based control.

# ROM based Control
- We feed in certain bits of the instruction and the controller generates the appropriate control signals for each mux.

- We feed in `Inst[30], Inst[14:12], Inst[6:2]`
- `Inst[6:2]` is part of the opcode field.
- `Inst[14:12]` - funct3
- `Inst[30]` - one of the bits of funct7, useful in distinguishing between certain instructions of the same type.

- Simple and easy to implement.
- More space.
- Potentially slower.
# Combinational Logic Gates
- Exactly what it sounds like.
- Instead of storing controls in ROM, generate them using instruction's bits.

- Faster.
- More cumbersome.