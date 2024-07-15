---
lecture:
- '[[Courses/MATH115/LEC36|LEC36]]'
related:
- '[[Evergreen/Matrices]]'
references:
- '[[Attachments/Textbooks/MATH115 - Linear Algebra.pdf#page=252&selection=25,0,25,12|Theorem
  36.1]]'
publish: true
---

It's the transpose of [[Evergreen/The Cofactor Matrix|The Cofactor Matrix]].
# 2x2
Switch one of the diagonals, multiply the other with -1.
$$
\begin{align}
A = \begin{bmatrix}
a & b\\
c & d
\end{bmatrix}\\\\

\text{adj} A = \begin{bmatrix}
d & -b\\
-c & a
\end{bmatrix}

\end{align}
$$
# Why care?
From Theorem 36.1 (in `reference`):
$$
\begin{align}
A(\text{adj}\ A) = (\text{det }A)I = (\text{adj }A)A
\end{align}
$$
This is similar to [[Evergreen/Matrix Inverses|Matrix Inverses]].
- Inverses return $I$ when multiplied with.
- adjugate returns a _scaled_ $I$ when multiplied with.

## Still, why care?
Alt formula for inverse!
If determinant != 0, then:
$$
A^{-1} = \frac{1}{\text{det } A}\text{ adj }A
$$