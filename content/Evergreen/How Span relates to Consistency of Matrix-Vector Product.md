---
lecture:
- '[[Courses/MATH115/LEC22|LEC22]]'
related:
- '[[Evergreen/Equations]]'
- '[[Evergreen/Matrices]]'
- '[[Evergreen/Vectors]]'
references: '[[Attachments/Textbooks/MATH115 - Linear Algebra.pdf#page=171&selection=0,0,0,12|MATH115
  - Linear Algebra, page 171]]'
publish: true
---

- We know $A\vec c = \vec x$ basically means that $\vec x$ is a linear combination of the entries of $\vec x$ and columns of $A$.
- Since $A = [\vec v_1,\ ...,\ \vec v_k ]$, $\vec x$ is basically a linear combination of $\vec v_i$ and elements of $\vec c$ (from (4) in [[Evergreen/Matrix-Vector Product|Matrix-Vector Product]]).
- For $\vec x \in \text{Span } B$, $\vec x$ needs to be a linear combination of the vectors in $B$.
- Since $B = \{\vec v_1,\ ...,\ \vec v_k\}$  and $A\vec c = \vec x$ (hence $\vec x$ is a linear combination of $\vec v_i$), $\vec x \in \text{Span } B$.

- This enables us to check if $\vec x \in \text{Span } B$ by just checking if $A\vec c = \vec x$ is consistent.
- [[Evergreen/How to check consistency of matrix-vector product by carrying it to REF|How to check consistency of matrix-vector product by carrying it to REF]]