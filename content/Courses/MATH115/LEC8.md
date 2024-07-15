---
course: '[[Courses/MATH115/MATH115|MATH115]]'
lecture: 8
date: 2023-09-20
reading: null
publish: true
---

- Complex Vectors.
- Cross products.
- Lagrange's Identity.
# Complex Vector
- Quite literally, vector with complex numbers in them (not in syllabus)
$$
C^n = \Big\lbrace 
\begin{bmatrix}
z_1\\.\\.\\z_n
\end{bmatrix}
\Biggm\vert z_1,\ ..., z_n \in \mathbb{C}
\Big\rbrace
$$
# Cross Product in $R^3$
- Take determinant.
- Returns a vector.
- The cross product is perpendicular to both the involved vectors.
- Only in $R^3$.
- Geometrically, it represents the area of the parallelogram that the two vectors form.
## Lagrange's Identity
$$
\begin{align}
||\vec x \times \vec y || = ||\vec x||^2||\vec y||^2 - (\vec x\cdot\vec y)^2\\
= ||\vec x||^2||\vec y||^2 - ||\vec x||^2||\vec y||^2\cos^2\theta\\
= ||\vec x||^2||\vec y||^2(1 - \cos^2\theta)\\
= ||\vec x||^2||\vec y||^2\sin^2\theta
\\\\
\implies || \vec x \times \vec y|| = ||\vec x||\ ||\vec y||\sin\theta
\end{align}
$$