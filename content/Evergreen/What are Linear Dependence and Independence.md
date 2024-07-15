---
lecture:
- '[[Courses/MATH115/LEC24|LEC24]]'
related:
- '[[Evergreen/Vectors]]'
- '[[Evergreen/Span and Spanning Sets|Span and Spanning Sets]]'
- '[[Evergreen/What does Linear Dependence (or independence) even mean|What does Linear
  Dependence (or independence) even mean]]'
references: '[[Attachments/Textbooks/MATH115 - Linear Algebra.pdf#page=178&selection=220,0,220,50|MATH115
  - Linear Algebra, page 178]]'
publish: true
---

A set of vectors is linearly dependent if some linear combination of the vectors is equal to zero where at least one coefficient (of the vectors) is non-zero.
$$
\begin{align}
B = \{ \vec v_1,\ .., \vec v_k \} \subseteq R^n\\
c_1\vec v_1 +\ ...\ + c_n\vec v_n = 0
\end{align}
$$
Where at least one $c_i \ne 0$.

- If all of the coefficients are 0, then the set is linearly independent.
- This is the trivial solution of the homogenous equation where all the coefficients are 0.