---
lecture:
- '[[Courses/MATH115/LEC40|LEC40]]'
related:
- '[[Evergreen/Eigenvalues and Eigenvectors|Eigenvalues and Eigenvectors]]'
- '[[Evergreen/What are vector spaces|What are vector spaces]]'
references:
- '[[Attachments/Textbooks/MATH115 - Linear Algebra.pdf#page=274&selection=2,0,2,26|MATH115
  - Linear Algebra, page 274]]'
publish: true
---

The set of eigenvectors corresponding to eigenvalue $\lambda$ (and $\vec 0$) is called the eigenspace of A corresponding to $\lambda$. 

- We also include $\vec 0$ in the set so that it's a subspace.
- Denoted by $E_\lambda(A)$.

These vectors satisfy:
- $(A - \lambda I)\vec x = 0$ (by definition).
- So this set of vectors (along with $\vec 0$) is basically the null space of $A -\lambda I$.
$$
E_\lambda(A) = \text{Null}(A - \lambda I)
$$