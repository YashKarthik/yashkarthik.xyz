- **Gain**: the ratio of output/input voltage.
	- Open loop.
	- Closed loop.
- **Bandwidth**: the range of frequencies where a particular gain can be maintained. Also denoted in Hz.
- **Cutoff frequency**: the maximum frequency we can achieve while maintaining a certain gain.

- The **gain-bandwidth product** is a constant parameter of each op-amp. It is useful in calculating the available bandwidth given the required gain or vice versa.
$$
\text{Gain Bandwidth Product} = A_{CL} \times F_{\text{cutoff}}
$$

![[Attachments/Pasted image 20241015235934.png]]
- Given the open loop gain of a device, we can figure out what closed loop gain to extract out of it so that it has sufficient bandwidth for our use.
- If we set our closed loop gain to 1, the cutoff frequency will be same as the gain-bandwidth product. Cuz 1.