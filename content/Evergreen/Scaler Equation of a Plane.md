---
lecture: '[[Courses/MATH115/LEC10|LEC10]]'
related:
- '[[Evergreen/Planes]]'
- '[[Evergreen/Equations]]'
publish: true
---

$$
\vec{PQ}\cdot \hat n = 0
$$
- We have a plane in $R^3$.
- Take a point $P$ on this plane.
- There is a unique line passing through this point.
	- This line is (by definition) perpendicular to the surface of the plane.
	- We call this the _normal vector_ $\hat n$.
- Now take any arbitrary point on the plane: $Q$.
- For $Q$ to lie on the plane it must satisfy the following:
	- $PQ$, the vector between $P$ and $Q$, must be perpendicular to $\hat n$, the normal vector.

- Since $\vec n$ is perpendicular to the surface of the plane, it is perpendicular to every vector lying _on_ the plane.
- If any point fails the perpendicularity property, it does not lie on the plane.
$$
\vec{PQ}\cdot \hat n = 0
$$
![[Attachments/Screenshot 2023-09-26 at 10.13.38.png]]
- Any two normal vectors of a plane are parallel => they are unique except for a nonzero scalar multiple.

# Expansion of the Equation
$$
\begin{align}
\hat n \cdot \vec{PQ} = 0\\
\hat n \cdot (\vec{OQ} - \vec{OP}) = 0\\
\hat n\cdot\vec{OQ} - \hat n\cdot\vec{OP} = 0\\
\hat n\cdot\vec{OQ} = \hat n\cdot\vec{OP}\\


\begin{bmatrix}
n_1\\
n_2\\
n_3
\end{bmatrix}
\cdot
\begin{bmatrix}
p_1\\
p_2\\
p_3
\end{bmatrix}
=
\begin{bmatrix}
n_1\\
n_2\\
n_3
\end{bmatrix}
\cdot
\begin{bmatrix}
x_1\\
x_2\\
x_3
\end{bmatrix}\\

n_1x_1 + n_2x_2 + n_3x_3 = n_1p_1 + n_2p_2 + n_3p_3\\
n_1x_1 + n_2x_2 + n_3x_3 = d\\
\\ \\
\implies d = \hat n \cdot \vec x
\end{align}
$$
# Why Scalar Equation
- Easier to check if point is on the plane with this equation.
- Easier to tell the normal vector of a plane (similar to how we can easily tell the direction vector of a line).
	- Two lines are parallel if their direction vectors are parallel.
	- Two planes are parallel if their normal vectors are parallel.
# Hyperplanes
$$
d = \hat a_n\cdot\vec x_n
$$