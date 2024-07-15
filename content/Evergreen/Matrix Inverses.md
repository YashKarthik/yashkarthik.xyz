---
lecture: '[[Courses/MATH115/LEC20|LEC20]]'
related:
- '[[Evergreen/Matrices]]'
references: '[[Attachments/Textbooks/MATH115 - Linear Algebra.pdf#page=158&selection=9,1,11,30|MATH115
  - Linear Algebra, page 158]]'
publish: true
---

# Multiplicative Identity
- The idea behind the multiplicative identity is that it returns the input as it is.
$$
\begin{align}
x\times 1 = x
\end{align}
$$
- For numbers 1 is the multiplicative identity.
- Similarly, for matrices $I$ is the multiplicative identity.
$$
\begin{align}
AI = A
\end{align}
$$
# Multiplicative Inverse
- The idea behind the inverse is can you find a corresponding number/matrix such that when multiplied with the original number/matrix, it returns the multiplicative identity.
$$
\begin{align}
xy = 1 = yx\\
\implies y \text{ is the inverse of x (and vice versa)}\\\\

AB = I = BA\\
\implies B \text{ is the inverse of }A \text{ and vice versa.}
\end{align}
$$
## Constraints on shape of $A, B$
- Because $AB = I = BA$ both $A, B$ have to be square matrices of equal sizes.