---
course: '[[Courses/MATH115/MATH115|MATH115]]'
lecture: 4
date: 2023-09-13
reading: null
publish: true
---

- Complex n-th roots.
- Complex exponential.

# Complex N-th Roots
Given $$
\begin{align}
n \in \mathbb{N}, z \in \mathbb{C} \\
\text{find}\ w\ \text{such that}\ w^n = Z
\end{align}
$$
- We start by converting the two into polar form.
- Since $w^n = z$, we can say the same about their magnitudes. $|w|^n = |z|^n$.
- We have a similar expression for the angles of the two numbers.
$$
\begin{align}
n\phi = \theta + 2\pi k \\
\phi = \frac{\theta + 2\pi k}{n}
\end{align}
$$
For $k \in [0, n)$ as there will be $n$ solutions to $w^n = z$. We limit $k$ to the interval as after that we'll continue getting repeating values (the angle is going around a circle)

# Complex Exponential
To us, for now it is just a more concise notation. I should watch the 3b1b video to understand the meaning behind this.
$$
\begin{align}
e^{j\theta} = \cos\theta+j\sin\theta\\
\implies z = r\cdot e^{j\theta}
\end{align}
$$
This also helps visualize how complex exponents, division etc work.