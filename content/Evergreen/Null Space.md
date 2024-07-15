---
lecture:
- '[[Courses/MATH115/LEC28|LEC28]]'
related:
- '[[Evergreen/What are subspaces|What are subspaces]]'
- '[[Evergreen/The Fundamental Subspaces of a Matrix]]'
references:
- '[[Attachments/Textbooks/MATH115 - Linear Algebra.pdf#page=199&selection=173,0,173,25|Fundamental
  Subspaces]]'
- '[[Attachments/Textbooks/MATH115 - Linear Algebra.pdf#page=200&selection=0,12,0,12|Theorem
  28.4]]'
publish: true
---

It is the set of vectors that satisfy $A\vec x = \vec 0, A \in M_{m\times n}(\mathbb R)$
- So any vector that, after transformation through $A$, lands on $\vec 0$ is part of this set.
- By definition, $\text{Null}(A)$ is a subset of $R^n$.

$\text{Null}(A)$ is a subspace of $R^n$ cuz:
- $\vec 0$ is part of this set.
	- Cuz $\vec 0$ satisfies this $A\vec x = \vec 0$ equation.
	- $\vec 0$ satisfies the equation, cuz the origin remains unchanged in a linear transformation (represented by the matrix).
- $\text{Null}(A)$ is closed under linear combination.
	- We have two vectors, who land on $\vec 0$ after transformation.
	- The resultant of them will also land on $\vec 0$ after transformation.

# Theorem 28.4
See `reference [2]` for complete proof.
- It is a subspace of $R^n$, with $n$ specifically instead of $m$ because for matrix-vector product to work, the number of entries of the vector should be the same as the number of columns of the matrix.
- Since the matrix is $n$ columns wide, the vector is also $n$ columns tall, hence belonging in $R^n$.