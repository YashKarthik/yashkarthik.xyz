---
lecture:
- '[[Courses/MATH115/LEC32|LEC32]]'
related:
- '[[Evergreen/Matrix-Vector Product|Matrix-Vector Product]]'
- '[[Evergreen/Functions]]'
references:
- '[[Attachments/Textbooks/MATH115 - Linear Algebra.pdf#page=222&selection=234,0,234,37|MATH115
  - Linear Algebra, page 222]]'
aliases:
- Matrix Transformations
publish: true
---

- In calc we play with functions $f: R \rightarrow R$, that map a domain of $R$ onto a codomain of $R$.
- Here we have functions $f_A: R^n \rightarrow R^m$ that map vectors not just real numbers.
- In fact, matrix-vector product almost functions like a function. Given a vector $\vec x$, it returns only one $\vec y$. So it passes the vertical line test.
- This basically motivates us to actually _define_ a matrix transformation.
# Matrix Transformation
- We have a function $f_A: R^n \rightarrow R^m$
- It's defined such: $f_A(\vec x) = A\vec x$ for every $\vec x \in R^n$
- So $f_A$ is the matrix transformation corresponding to $A$.
- $A\vec x$ is the image of $\vec x$ under $f_A$.

- It's basically a function that _transforms_ a vector using a matrix-vector product.