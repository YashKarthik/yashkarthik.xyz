---
related:
- '[[Evergreen/Matrices]]'
- '[[Evergreen/Vectors]]'
- '[[Evergreen/Equations]]'
- '[[Evergreen/Methods of Math]]'
publish: true
---

If we have the [[Evergreen/Matrix-Vector Product|product]] $A\vec x = \vec b$, this is basically same as:
$$
\begin{align}
\vec b = x_1\vec a_1 + x_2\vec a_2 + x_3\vec a_3
\end{align}
$$
Now "converting" this expression into an augmented matrix:
$$
\begin{align}
\left[\begin{array}{ccc|c}
. & . & . & b_1\\
. & . & . & b_2\\
. & . & . & b_3\\
\end{array}\right]
\end{align}
$$
- Where the first column is $\vec a_1$, second is $\vec a_2$, third is $\vec a_3$.
- And the first column's coefficient is $x_1$, second is $x_2$ and so on.