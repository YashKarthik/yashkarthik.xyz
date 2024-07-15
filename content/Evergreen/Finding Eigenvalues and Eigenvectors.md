---
lecture:
- '[[Courses/MATH115/LEC39|LEC39]]'
related:
- '[[Evergreen/Eigenvalues and Eigenvectors|Eigenvalues and Eigenvectors]]'
references:
- '[[Attachments/Textbooks/MATH115 - Linear Algebra.pdf#page=272&selection=69,0,123,0|Converting
  into homogenous equation]]'
publish: true
---

1. So we find $\lambda$s that make $\det(A-\lambda I) = 0$
2. Then for each eigenvalue, we solve $(A-\lambda I)\vec x = \vec 0$.

---
- Finding them isn't too bad.
- We start with the definition and then convert it into a homogenous equation:
$$
(A-\lambda I)\vec x = \vec 0
$$
- The above equation basically represents x getting squished into the origin, this only happens when the det = 0.
- Also, by [[Evergreen/Theorems and Proofs related to Inverse Matrices#Invertible Matrix Theorem|Invertible Matrix Theorem]], we know that the non-trivial solutions exist only if the matrix is not invertible.
- So for non-trivial solutions to exist, $\det(A-\lambda I) = 0$, since det is non-zero for invertible matrices.

To solve for this, we define the **Characteristic Polynomial of $A$:**
$$
C_A(\lambda) = \det(A-\lambda I)
$$
- We find the $\lambda$s that make $C_A(\lambda) = 0$.
- This is just a polynomial, so we solve it like normal.