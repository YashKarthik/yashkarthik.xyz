---
related:
- '[[Evergreen/Mathematics]]'
- '[[Evergreen/Functions]]'
created: 9th Aug 2023
updated: 9th Aug 2023
publish: true
---

- Our intuition about absolute value is correct, but very un-mathematical.
- When we see $|-5|$, our mind immediately jumps to 5. We think in terms of _removing_ the negative symbol (very similar to switching signs when jumping across the equal-to sign).
- This is not mathematically sound. We don't just remove something in math. In actuality, the expression decays into two cases–a piecewise function–and each case operates on the input differently.

The two _pieces_ of our function $(f(x) = |x|)$ are such:
- If $x$ is positive, the function leaves it as it is.
- If $x$ is negative, the function multiplies it by $-1$ to make it positive.

$$
\begin{aligned}
f(x) = |x| \\
f(x) = \begin{cases}
		x, & x > 0\\
		-x, & x < 0
	\end{cases}
\end{aligned}
$$

- Our $x$ is rarely this simple. For more complex expressions, we need to simplify the cases until we find our critical points.
- Once we have the critical points, we can plot the graph of the function, which makes solving problems much easier.
- It is useful to understand the underlying mechanism of the mod, but for most quick problems we will resort to the [[Evergreen/Steps to solve an inequality|Wavy Curve Method]] to identify critical points.