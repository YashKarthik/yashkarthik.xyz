---
course: '[[Courses/ECE105/ECE105|ECE105]]'
lecture: 6
date: null
reading: null
publish: true
---

- Projectile Motion.
# Projectile Motion
- When the path of a particle is determined solely by gravity and air resistance (ignored for us) it is called projectile motion.
$$
g = 9.8\ ms^{-2}
$$
- Since $x$ and $y$ components behave independently, gravity affects only the $y$-component.
$$
a_x = 0;\ a_y = -g
$$
(depends on our choice of coordinates)

For x:
$$
\begin{align}
a_x = 0\\
v_x = v_{0x}\\
x = x_0 + v_{0x}t
\end{align}
$$
For y:
$$
\begin{align}
a_y = -g\\
v_y = v_{0y} - gt\\
y = y_0 + v_{0y}t - \frac{1}{2}gt^2
\end{align}
$$
## Splitting into Components
$$
\begin{align}
v_{0y} = v_0\sin\theta\\
v_{0x} = v_0\cos\theta\\
\\
x = x_0 + v_{0x}t\\
\implies v_{0x} = \frac{x}{t}\\
v_0\cos\theta = \frac{x}{t}\\
t = \frac{x}{v_0\cos\theta}
\\

\implies y = v_{0y}t - \frac{1}{2}gt^3\\
= v_o\sin\theta\cdot\frac{x}{v_0\cos\theta} - \frac{gx^2}{2v_0\cos\theta}\\
y = x\tan\theta - \frac{gx^2}{2v_0\cos\theta}

\end{align}
$$
 If car is de-accelerating, net acceleration points behind center.