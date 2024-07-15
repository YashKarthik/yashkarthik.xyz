---
related:
- '[[Evergreen/Matrices]]'
references:
- https://en.wikipedia.org/wiki/Matrix_similarity
aliases:
- Similarity Transformation
- Similar Matrices
publish: true
---

Two matrices are _similar_ if there exists an invertible $P$ such that:
$$
\begin{align}
A = P^{-1}BP\\\\
\text{Multiplying both sides:}\ \ PAP^{-1} = B
\end{align}
$$
# Why care?
They are called similar cuz:
- $A$ and $B$ have the same rank.
- $C_A(\lambda)$ and $C_B(\lambda)$ have the same roots, hence both matrices have the same eigenvalues.
- **Super useful:** computing powers:
$$
\begin{align}
A^k = P^{-1}B^kP\ \ \text{for } k\ge 1
\end{align}
$$
- This is especially useful when one of the matrices is [[Evergreen/Diagonal matrices and their properties|diagonal]], makes powers so much simpler.