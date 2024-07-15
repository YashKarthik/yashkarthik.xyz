---
lecture:
- '[[Courses/MATH115/LEC43|LEC43]]'
related:
- '[[Evergreen/Orthogonal Sets|Orthogonal Sets]]'
- '[[Evergreen/Orthogonal Basis|Orthogonal Basis]]'
- '[[Evergreen/Orthogonal sets without zero vector are linearly independent|Orthogonal
  sets without zero vector are linearly independent]]'
publish: true
---

- To express $\vec x$ as a linear combination of our basis vectors, we start with:
$$
\begin{align}
B = \{ \vec v_1, ..., \vec v_k \} \\\\
\vec x = c_1\vec v_1 +\ ... +\ c_k\vec v_k\\
\end{align}
$$

- Normally we would write out the equations and do RREF.
- Here we multiply both sides by $\vec v_i$, it's just an arbitrary vector in the orthogonal set.
$$
\begin{align}
\vec v_i\cdot\vec x = \vec v_i\cdot(c_1\vec v_1 +\ ... +\ c_k\vec v_k)\\
= c_1\ \vec v_i\cdot \vec v_1 +\ ... +\ c_k\ \vec v_i\cdot \vec v_k\\
= 0\ +\ ...\ +\ c_i\vec v_i\vec v_i +\ ...\ +\ 0
\end{align}
$$
- Distributing the dot product to all the elements of the LI equation, we see that all the terms except one become zero.
- Since $v_i$ is orthogonal to every vector in the set except $v_i$, all the other dot products zero out.
$$
\begin{align}
\vec v_i\cdot \vec x = c_i(\vec v_i\cdot\vec v_i)\\\\
= c_i|| \vec v_i ||^2\\\\
c_i = \frac{\vec v_i \cdot \vec x}{ || \vec v_i ||^2}\\\\

\end{align}
$$

Just for fun:
$$
\begin{align}
\vec x = \frac{\vec v_1 \cdot \vec x}{ || \vec v_1 ||^2}\vec v_1
+ \frac{\vec v_2 \cdot \vec x}{ || \vec v_2 ||^2}\vec v_2
\ +\ ...\ +\ \frac{\vec v_n \cdot \vec x}{ || \vec v_n ||^2}\vec v_n\\\\

\vec x = \sum_{i = 1}^{n} \text{proj}_{\vec v_i}(\vec x)

\end{align}
$$
Makes sense too, the vector $x$ is the sum of it's components projected onto the basis vectors.