---
lecture:
- '[[Courses/MATH115/LEC42|LEC42]]'
related:
- '[[Evergreen/Algebraic Multiplicity of an Eigenvalue|Algebraic Multiplicity of an
  Eigenvalue]]'
- '[[Evergreen/What does a determinant measure|Determinant of a Matrix]]'
- '[[Evergreen/Eigenvalues and Eigenvectors|Eigenvalues and Eigenvectors]]'
references:
- '[[Attachments/Textbooks/MATH115 - Linear Algebra.pdf#page=288&selection=0,0,0,42|MATH115
  - Linear Algebra, page 288]]]'
publish: true
---

- They start with the characteristic equation. The factored form makes sense.
- det(A - $\lambda I$) = $C_A$, we set this equal to 0 to find the $\lambda$s.
- Now since we want the det(A) not det(A - $\lambda I$), we set $\lambda = 0$.
- So det(A) is basically the characteristic equation with $\lambda = 0$.
- Doing some algebra and factoring out stuff, we can see that:
$$
\det A = \prod_{i = 1}^{k}\lambda_i^{a_{\lambda_i}}
$$