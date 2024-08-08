- The implementation essentially involves _absorption_ and _squeezing_ phases.
- The input data is partitioned into equal sized blocks. The block size = rate.
- Multi-rate padding rule is used.

#  Absorbtion

```
for each block:
	state[0:r] = state [0:r] ^ block
	permutation(state)
```

#  Squeezing

```
Z = ""
while length(Z) < output_length:
	Z = Z || S[0:r] S = permutation(S)
```

# State
- The state is (I think) implemented as a giant 1-D array.
- But it's useful to also be able to think of it as a 5x5x64 3-D matrix (not sure where 64 came from).
	- 5, 5 are rows and columns and each _lane_ is 64 bits deep.
	- Most operations (I think) are done lane-wise.
- This leads to state being an array of 1600 elements.
# Permutation Function
- Has 5 steps: theta, rho, pi, chi, iota.
## Theta
- Calculate parity of all the columns (bits of lanes in each column).
	- I don't think parity really means odd/even parities here. It's just xor.
- Calculate deltas: xor of the left column parity with the rotated right column parity.
	- $D[y] = C[y - 1] \oplus ROTL(C[y+1], 1)$
	- ROTL is just rotating the bits left before xoring.
- Updating the state: for each n-th bit in the state, XOR it to the n-th bit of the Delta of the column that bit belongs to.
## Rho
- Each lane is literally just a left rotate by a constant.
- Rotated per lane.
- The constant is based on col, row.
## Pi
 - This moves the lanes into different indices.
$$
\begin{flalign*}
(x, y) \rightarrow (x', y') \\
x' = y\\
y' = (2x + 3y)\ \%\ 5
\end{flalign*}
$$
## Chi
- Each bit is xored with the ( xor of the bits in the next col and next-to-next col, but same row).
## Iota
- Each bit is XORed with a constant.