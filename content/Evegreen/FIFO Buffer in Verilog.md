- Useful for temporarily storing data when the consumer and producer process data at different speeds.
- I used it in the morse blinker because data-in was at 9600Hz while blinking was at 2 Hz or something so that the flashes were actually visible.
- FIFO - first in, first out - is literally a queue.
# FIFO ring buffer with overwrite protection
- I essentially wanted the board to buffer up to 10 characters as it transmitted the chars.
- I also wanted it to ignore data-in and flash red if I sent in too many characters.
- It's a 10 element array, with each element being 20 bits wide (20 bits for morse).
- I have two registers that essentially function as read and write pointers which store the address within the buffer I'm reading/writing to/from.
```verilog
reg [3:0] r_addr;
reg [3:0] w_addr;
reg [19:0] memory [10];
```
- If a pointer reached end of the array, it would wrap around to the start.
- The overwrite protection was an if block checking if the write pointer caught up to the read pointer and just setting the warning signal to high.
```verilog
if (r_addr == w_addr + 1) begin
    buff_warn <= 1;
end else begin
    memory[w_addr + 1] <= i_w_data;
    w_addr <= w_addr + 1;
end

```
- The tricky part was relearning non-blocking assignments and ensuring that I'm writing to the address I'm supposed to.