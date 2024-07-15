---
lecture: '[[Courses/MATH115/LEC19|LEC19]]'
related:
- '[[Evergreen/Matrices]]'
- '[[Evergreen/Vectors]]'
- '[[Evergreen/Proofs]]'
references: '[[Attachments/Textbooks/MATH115 - Linear Algebra.pdf#page=139&selection=0,0,0,36|MATH115
  - Linear Algebra, page 139]]'
publish: true
---

# Matrices Equal Theorem
$$
\begin{align}
A, B \in M_{m\times n}(\mathbb R)\\

\text{If } A\vec x = B\vec x \text{ for every }\vec x\\
\implies A = B
\end{align}
$$
- The "for every $\vec x$" part is important cuz the products can be equal for _certain_ $\vec x$'s without the matrices actually being equal.
- Since the entries of the resultant matrix are basically dot product between rows and another vector, and we know that dot products can be equal even when the two vectors are not actually equal.
# Proof
See `reference` for full proof.

- They go from left to right, i.e., they assume the products are equal for all $\vec x$.
- So now we are free to choose any $\vec x$, and this should still hold.
- So we choose columns of the identity matrix $I$. Each column has 1 at only one location, acting like the `AND` bitmask.
- Since the equality should hold for all vectors, we cycle through the different columns of $I$ such that we are selecting the corresponding entries in the matrices $A, B$.
- When the corresponding entries for $A, B$ are equal, the matrices themselves are equal.