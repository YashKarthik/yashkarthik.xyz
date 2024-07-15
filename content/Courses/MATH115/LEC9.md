---
course: '[[Courses/MATH115/MATH115|MATH115]]'
date: 2023-09-20
reading: null
publish: true
---

- Vector equation of a line.
- Parametric equation of a line.
- Vector equation of a plane.
# Vector Equation of a Line
For a line, we basically need two things:
- A point through which it passes.
- A vector $\vec d$ in the direction of the line.
## In $R^2$
$$
\begin{align}
y = mx + c\\
x_2 = mx_1 + c
\end{align}
$$
In the traditional form, $m$ is _similar_, though not the same, to the direction vector.
# In $R^n$
$$
\vec x =
\begin{bmatrix}
x_1\\
x_2\\
.\\ .\\
x_n
\end{bmatrix}
= \vec p + t\vec d
$$
- $\vec p$ is the position vector of the point through which our line passes.
- $\vec d$ is the direction vector.
- $t$ is just a parameter used to figure out the values at different points.
## Parametric Equation of a Line
- The vector equation is more general, representing all possible dimensions.
- If we break it down:
$$
\begin{align}
x_1 = p_1 + td_1\\
x_2 = p_2 + td_2\\
.\\ .\\ .\\
x_n = p_n + td_n
\end{align}
$$
# Vector Equation of a Plane
- Similar to a line, we have a point that lies on the plane.
- But instead of just one direction vector, like in line, we need two direction vectors to represent a plane.
$$
\vec x =
\begin{bmatrix}
x_1\\
x_2\\
.\\ .\\
x_n
\end{bmatrix}
= \vec p + s\vec u + t\vec v
$$
- $u,v$ are non-zero and non-parallel (if parallel then they're the same vector but scaled!, hence can't represent a place)