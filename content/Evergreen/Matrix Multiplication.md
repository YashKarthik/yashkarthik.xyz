---
lecture:
- '[[Courses/MATH115/LEC19|LEC19]]'
related:
- '[[Evergreen/Matrices]]'
references: '[[Attachments/Textbooks/MATH115 - Linear Algebra.pdf#page=140&selection=2,0,2,21|MATH115
  - Linear Algebra, page 140]]'
aliases:
- Matrix Product
publish: true
---

- Basically an extension of the [[Evergreen/Matrix-Vector Product|Matrix-Vector Product]].
$$
AB = [A\vec b_1\ \ ...\ \ A\vec b_k]
$$
- The $nth$ row of the resultant matrix is the dot products kept side by side.
- It has the same num of cols as the $B$.

# Alternate way to think: row dot column
$$
\begin{aligned}

A \in M_{m\times n}(\mathbb R)\\
B \in M_{n\times k}(\mathbb R)\\\\

A = \begin{bmatrix}
\vec r_1^T\\.\\.\\\vec r_m^T
\end{bmatrix}\\\\

B = [\vec b_1\ ...\ \vec b_k]\\\\

AB = \begin{bmatrix}
	\vec r_1^T\ \vec b_1\ ...\ \vec r_1^T\ \vec b_k\\
	...\\
	\vec r_m^T\ \vec b_1\ ...\ \vec r_m^T\ \vec b_k\\
\end{bmatrix}

\end{aligned}
$$
The $ith$ entry is $\vec r_i\cdot \vec b_j$

> [!Matrix Multplication] $AB \ne BA$
> It doesn't work that way.