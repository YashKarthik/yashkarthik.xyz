---
lecture:
- '[[Courses/MATH115/LEC28|LEC28]]'
related:
- '[[Evergreen/Bases of Subspaces|Bases of Subspaces]]'
- '[[Evergreen/The Fundamental Subspaces of a Matrix]]'
references:
- '[[Attachments/Textbooks/MATH115 - Linear Algebra.pdf#page=199&selection=234,0,234,28|MATH115
  - Linear Algebra, page 199]]'
- '[[Attachments/Textbooks/MATH115 - Linear Algebra.pdf#page=200&selection=0,12,0,12|Theorem
  28.4]]'
publish: true
---

It is the set of vectors the are outputs of $A\vec x$.
$$
x_1\vec a_1 + x_2\vec a_2 +\ ...
$$
This is literally a linear combination of the the columns of $A$. Where $x_n$ are the coefficients.

- So the columns space is literally the span of the columns of $A$.
- By definition, columns space is a subset of $R^m$.

# Theorem 28.4
- $\text{Col}(A)$ is a subspace of $R^m$. $m$ not $n$.
- $\text{Col}(A)$ is the set of linear combinations of the columns of the matrix.
- Each column of $A$ is $m$ entries tall cuz $A \in M_{m\times n}(\mathbb R)$ ($A$ has $m$ rows).