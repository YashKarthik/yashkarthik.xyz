UART is a very simple protocol.
- You don't need a master clock to synchronize the receiver and the transmitter.
- You just need to transmit at an agreed rate (baut rate).
- The transmitter signals the start of sending by pulling the signal line low and then sends 8-10 bits. Ending with the stop (HIGH) bit.
- The receiving consumes the bits using a shift register and then loads the final value into a result register.

# Transmitter
The transmitter is fairly simple.
- You need a mechanism to load data into a shift register.
- Then you just signal the start of transmission and start _shifting_ out the actual data (LSB first).
- Even though there's no shared clock, each device (tx, rg) has an internal clock running at the agreed upon baud rate.
- We use this internal clock to ensure we transmit signals at the correct points of time.

# Clock (baud) Generator
Took me a while to truly grok.
- The internal clock of the FPGA runs at 12 MHz, while the baud rate I want to target is 9600 Hz.
- I chose to do this with a _clock divider_. Since I want 9600 cycles in a sec, how many cycles of master clock are equivalent to a single cycle of my baud clock?
$$
\begin{align*}
N = \frac{12\times 10^6}{9600} Hz/Hz = 1250
\end{align*}
$$
- So one baud is equal to 1250 cycles on my internal clock.
- I chose to implement this clock divider using a counter:
```verilog
always @ (posedge i_clk, posedge i_rst) begin
    if (i_rst) begin
        counter <= 0;
        o_clk <= 0;
    end else if (counter == 1250) begin
        counter <= 0;
        o_clk <= ~o_clk;
    end else begin
        counter <= counter + 1;
    end
end
```

- So I'm _flipping_ the clock when the counter reaches 1250.
- But my entire cycle was supposed to take 1250 internal cycles. That was the crucial difference.
- An entire clock cycles consists of the up-right-down-right sequence–all sides of the square wave.
- So I had to _flip_ the clock at `625` so an entire cycle is completed by `1250`.
# Receiver
- **Implementation goal:** signal glitches should be ignored, while actual values should be stored.

Implementation paths:
- Ideally sample value in the middle of the baud clock; or
- Use counter + internal clock (did this):
	- Internal clock is 8x of the baud clock.
	- Sample on each `internal_clk` edge => sampling multiple times in a single baud clk cycle.
	- Use counter to store how long the signal is active.
	- If active for more than half a baud clock cycle, only then consider signal valid.
	- After filtering out glitches, then you just have to listen for when rx goes low and then start storing values after that.
	- I used the same always block to detect rx low and capturing the data signal.
	- I had another variable `continue_rx` to distinguish between an init signal (rx low) vs the data bit = 0.

[Github Repo](https://github.com/YashKarthik/uart-icesugar)