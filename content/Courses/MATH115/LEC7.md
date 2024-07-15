---
course: '[[Courses/MATH115/MATH115|MATH115]]'
lecture: 7
date: 2023-09-19
reading: null
publish: true
---

- Norm of a vector.
- Dot product.
- Cross product.
# Norm of a Vector
- Length or magnitude of a vector.
$$
||\vec x || = \sqrt{x_1^2 +\ ...\ + x^2_n}
$$
- Similar properties to that of mod.
	- Non-negative.
	- Triangle inequality.
# Unit Vector
- A vector is a unit vector if its magnitude is 1.
- It is useful for representing direction.
- We can find the unit vector of any vector by dividing the vector by its norm.
$$
\hat i = \frac{\vec x}{||\vec x||}
$$
# Dot Product
- Multiply corresponding terms and sum them.
- Returns a scaler.
$$
\vec x \cdot \vec y = ||\vec x||||\vec y||\cos\theta
$$
($\theta$ must satisfy the above equation for non-zero vectors)
## Deriving meaning from the value of the dot product
- $\vec x \cdot \vec y \gt 0 \iff \cos\theta > 0 \iff 0 \le \theta \lt \frac\pi 2$
	- For dot product to be positive, $\cos\theta$ should be positive.
	- This makes sense if we think about it in terms of projections. For our projection to be in the positive quadrant, our vectors need to be, well, in the positive quadrant, hence our angle would be in the given range.
- $\vec x \cdot \vec y = 0 \iff \cos\theta = 0 \iff \theta = \frac\pi 2$
- $\vec x \cdot \vec y \lt 0 \iff \cos\theta \lt 0 \iff \frac\pi 2 \lt \theta \le \pi$
## Cauchy-Schwarz Inequality
$$
|\vec x \cdot \vec y| \le ||\vec x||\ ||\vec y||
$$
Makes sense since max value of would be when $\cos\theta = 1$ which is when the two would be equal.