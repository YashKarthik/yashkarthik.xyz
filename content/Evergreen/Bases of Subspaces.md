---
lecture:
- '[[Courses/MATH115/LEC26|LEC26]]'
related:
- '[[Evergreen/What are subspaces|What are subspaces]]'
- '[[Evergreen/What are Linear Dependence and Independence|What are Linear Dependence
  and Independence]]'
references: '[[Attachments/Textbooks/MATH115 - Linear Algebra.pdf#page=190&selection=2,0,3,2|MATH115
  - Linear Algebra, page 190]]'
publish: true
---

- Bases of a subspace is a set of vectors that can represent any vector in the subspace as a linear combination of itself.
- A basis for a subspace $\mathbb S$ of $\mathbb R^n$ is a linearly independent spanning set for $\mathbb S$.
- A subspace does not have a unique basis.
- The $\vec e_i$ vectors $\{  \vec e_1,\ ...,\ \vec e_n\}$ are called the standard basis for $R^n$
---
If we have a subspace $\mathbb S$ of $\mathbb R^n$ and another set $B \subseteq \mathbb S$
And:
1. $B$ is linearly independent.
2. $\mathbb S = \text{Span } B$.

Then, $B$ is a basis for $\mathbb S$.

If $\mathbb S = {0}$, we define $B = \phi$, the empty set to be the basis for $\mathbb S$.