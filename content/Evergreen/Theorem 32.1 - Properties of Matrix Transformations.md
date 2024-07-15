---
lecture:
- '[[Courses/MATH115/LEC32|LEC32]]'
related:
- '[[Evergreen/Matrix-Vector Product|Matrix-Vector Product]]'
- '[[Evergreen/Matrix-vector products as functions|Matrix Transformations]]'
references:
- '[[Attachments/Textbooks/MATH115 - Linear Algebra.pdf#page=224&selection=0,0,0,50|MATH115
  - Linear Algebra, page 224]]'
publish: true
---

Every matrix transformation must satisfy:
$$
\begin{align}
f_A(\vec x + \vec y) = f_A(\vec x) + f_A(\vec y)\\\\
f_A(c\vec x) = cf_A(\vec x)
\end{align}
$$
- Proof in `reference` makes sense; it basically uses properties of matrix-vector product.

Matrix Transformations preserve vector sums and scalar multiplication–linear combinations. So now we define function which preserve linear combinations: [[Evergreen/Linear Transformations]].