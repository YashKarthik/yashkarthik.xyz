---
lecture:
- '[[Courses/MATH115/LEC42|LEC42]]'
related:
- '[[Evergreen/Matrices]]'
references:
- '[[Attachments/Textbooks/MATH115 - Linear Algebra.pdf#page=288&selection=270,0,270,21|Def
  42.1]]'
publish: true
---

Sum of the entries on the diagonal.

# Using eigenvalues

- From [[Evergreen/Matrix Similarity|Similar Matrices]], $\text{tr}(A) = \text{tr}(D)$ where $D$ is the diagonalization of $A$.
- And from [[Evergreen/Matrix Diagonalization|Matrix Diagonalization]], $D$'s entries are basically eigenvalues of $A$.
$$
\begin{align}
\text{tr}(A) = \text{tr}(D) = \lambda_1 + \lambda_2 + ...+ \lambda_n\\\\
\text{Since some eigenvalues repeat with multiplicity } a_{\lambda_i}:\\\\
\text{tr}(A) = (a_{\lambda_1} \lambda_1) +... +(a_{\lambda_k} \lambda_k)
\end{align}
$$
For $k$ distinct eigenvalues.