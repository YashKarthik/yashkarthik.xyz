---
course: '[[Courses/MATH115/MATH115|MATH115]]'
lecture: 6
date: 2023-09-18
reading: null
publish: true
---

- Proof of Theorem for Real Polynomials.
- Vector Algebra

# Proof of Theorem for Real Polynomials
- Take $p(x)$ and take conjugate of the entire expression, both LHS and RHS.
- $\overline{p(x)} = \overline{a_nw^n} + ... + \overline{a_1w} + \overline{a_0}$
- Since conjugate of purely reals is same as the real number itself, we can get rid of the bars over $a_i$.
- $\overline{p(x)} = a_n\overline{w^n} + ... + a_1\overline{w} + a_0$
- This is same as using $\overline w$ inside $p(x)$ instead of $w$.
- Hence $p(w) = p(\overline w) = 0$
# Vector Algebra
- Instead of writing $(x, y)$ as a coordinate, we write it as a column vector.

$$
\begin{bmatrix}
x \\ y
\end{bmatrix}
$$

$R^2$ is the set of all vectors with 2 components.
$$
R^n = \{\begin{bmatrix} x_1\\.\\.\\.\\x_n \end{bmatrix} | x_1, ..., x_n \in \mathbb{R}\}
$$
## Basic operations
- Pretty obvios
## Parallel Vectors
$$
\vec x = c\vec y \implies \vec x \parallel \vec y
$$
(assuming nothing is zero etc etc)