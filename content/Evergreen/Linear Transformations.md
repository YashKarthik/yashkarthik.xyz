---
lecture:
- '[[Courses/MATH115/LEC32|LEC32]]'
related:
- '[[Evergreen/Matrix-vector products as functions|Matrix Transformations]]'
- '[[Evergreen/Theorem 32.1 - Properties of Matrix Transformations|Theorem 32.1 -
  Properties of Matrix Transformations]]'
references:
- '[[Attachments/Textbooks/MATH115 - Linear Algebra.pdf#page=224&selection=242,0,242,37|MATH115
  - Linear Algebra, page 224]]'
publish: true
---

A function $L: R^n \rightarrow R^m$ is called a linear transformation if:
$$
L(s\vec x + t\vec y) = sL(\vec x) + tL(\vec y)
$$
- The function preservers linear combinations.
- Property $L(s\vec x) = sL(\vec x)$ is called homogeneity.
- Property $L(\vec x + \vec y) = L(\vec x) + L(\vec y)$ is called superposition.

- Since every matrix transformation preserves linear combinations, every matrix transformation is a linear transformation.
- A linear tf is a matrix tf it it can be represented as a matrix-vector product and [[Evergreen/Theorem 32.2 - every linear transformation has a corresponding matrix transformation|Theorem 32.2 - every linear transformation has a corresponding matrix transformation]]
- I.e. a tf is linear iff it is also a matrix tf.