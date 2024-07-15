---
lecture:
- '[[Courses/MATH115/LEC41|LEC41]]'
related:
- '[[Evergreen/Matrices]]'
- '[[Evergreen/Diagonal matrices and their properties|Diagonal matrices and their
  properties]]'
references:
- '[[Attachments/Textbooks/MATH115 - Linear Algebra.pdf#page=281&selection=0,0,0,37|Def
  41.2]]'
publish: true
---

The diagonalization of $A$ is the diagonal matrix $D$ where each non-zero entry (the diagonal entry) is an eigenvalue of $A$.

$$
D =
\begin{bmatrix}
\lambda_1 & 0 &  ... & 0\\
0& \lambda_2  &  ... & 0\\
.&.& ... & .\\
0& 0  & ... & \lambda_n\\
\end{bmatrix}
$$

A matrix, $A$, is diagonalizable if it can be transformed into a diagonal matrix through a [[Evergreen/Matrix Similarity|Similarity Transformation]].
$$
\begin{align}
P^{-1}AP = D\\\\
A = PDP^{-1}
\end{align}
$$
- Where $P$ is invertible and $D$ is diagonal.
- We say $P$ diagonalizes $A$ to $D$.
- $P$ and $P^{-1}$ do not cancel out cuz [[Evergreen/Matrix Multiplication|Matrix Product]] is not commutative.

Here, $A$ and $D$ are [[Evergreen/Matrix Similarity|Similar Matrices]], giving us useful properties. Combining similar matrices and diagonal matrices, we can do lots of stuff more efficiently.