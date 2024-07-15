---
lecture:
- '[[Courses/MATH115/LEC41|LEC41]]'
related:
- '[[Evergreen/Bases of Subspaces|Bases of Subspaces]]'
- '[[Evergreen/What does Linear Dependence (or independence) even mean|What does Linear
  Dependence (or independence) even mean]]'
- '[[Evergreen/Eigenspaces|Eigenspaces]]'
references:
- '[[Attachments/Textbooks/MATH115 - Linear Algebra.pdf#page=281&selection=278,0,278,10|Lemma
  41.2]]'
publish: true
---

The bases of the different eigenspaces are still linearly independent is cuz these eigenspaces do not overlap (except $\vec 0$).

---
- We have our distinct eigenvalues, $\lambda_1, \lambda_2,... \lambda_k$.
	- Since some eigenvalues could be duplicates, I have used $k$ instead of $n$.
	- When $k = n$, each eigenvalue is unique and we have $n$ distinct eigenspaces. When this happens, our eigenvectors span $R^n$.
- Each eigenvalue $\lambda_i$ has the associated eigenspace $E_{\lambda_i}$.
- Each eigenspace will have it's basis, $B_i$. Each element in the basis set is an eigenvector (obv).
- Creating a set which is union of all the $B_i$s.
- This new set is still linearly independent.

- The reason why the bases of these different eigenspaces are still linearly independent is cuz these eigenspaces do not overlap (except $\vec 0$).
- Eigenspaces are not random spans on the grid, they are specific spans that remain unchanged during a matrix operation.
- Since two eigenspaces do not overlap, the bases also do not overlap.