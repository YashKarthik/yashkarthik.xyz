---
lecture:
- '[[Courses/MATH115/LEC18|LEC18]]'
related:
- '[[Evergreen/Matrices]]'
- '[[Evergreen/Vectors]]'
publish: true
---

$$
\begin{aligned}
A = [\vec a_1\ \ \vec a_2\ \ ...\ \ \vec a_n] \in M_{m\times n}(\mathbb R)\\
\\
\vec x = \begin{bmatrix}
x_1\\ .\\ .\\ x_n
\end{bmatrix}\in \mathbb R^n\\
\\

A\vec x = x_1\vec a_1 + ... + x_n\vec a_n \in R^m
\end{aligned}
$$
- We have a matrix which is a bunch of vectors together, where each vector is a column of the matrix.
- Then we have the solution vector x which is a bunch of xs for each dimension collected together.
- The matrix-vector product is the sum of products between the corresponding column vector and x in that dimension.
- $A\vec x$ is a linear combination of elements of $\vec x$ and columns of $A$.

# Alternative way to think of this
Row dot Column.
![[Attachments/Screenshot 2023-10-23 at 11.08.03.png]]
- The $nth$ row of the resultant matrix is a dot product between the $nth$ row of the matrix and the vector $\vec x$.
- Has just one column as dot product of vector sums up the product of the corresponding entries.