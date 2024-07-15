---
lecture: '[[Courses/MATH115/LEC14|LEC14]]'
related:
- '[[Evergreen/Matrices]]'
publish: true
---

Let $[\ A\ |\ \vec b\ ]$ be the augmented matrix of a system of $m$ linear equations in $n$ variables.

1. The system is consistent iff $\text{rank(A)} = \text{rank}([\ A\ |\ \vec b\ ])$
2. If the system is consistent then: $\text{num. of free params} = n - \text{rank(A)}$
3. The system is consistent for all $\vec b \in R^m$ iff $\text{rank(A) = m}$

# Reason for 1
- If we have a bad row (say bottom row).
- That row in $A$ will not have a pivot.
- But the same row, when considering $[A|\vec b]$, will have a pivot as the row still has a constant term on RHS.
$$
\implies \text{rank(A)} \ne \text{rank}([\ A\ |\ \vec b\ ])
$$
# Reason for 2
$n$ is the number of columns.
- We only have a free parameter if a column does not have a pivot.
- If each column has a pivot, then we would have the same number of pivots as columns.
# Reason for 3
- If our system is consistent, we have no bad rows.
- I.e. each of our rows has a pivot.