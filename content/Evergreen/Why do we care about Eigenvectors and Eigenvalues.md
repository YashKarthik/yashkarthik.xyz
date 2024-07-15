---
lecture:
- '[[Courses/MATH115/LEC39|LEC39]]'
related:
- '[[Evergreen/Eigenvalues and Eigenvectors|Eigenvalues and Eigenvectors]]'
- '[[Evergreen/Finding Eigenvalues and Eigenvectors|Finding Eigenvalues and Eigenvectors]]'
- '[[Evergreen/Span and Spanning Sets|Span and Spanning Sets]]'
- '[[Evergreen/Linear Transformations|Linear Transformations]]'
publish: true
---

# Geometric Intuition
- Eigenvectors of a matrix are basically certain vectors that, when transformed by the matrix, can also be represented as a scalar multiple of the original vector.
- Since our new vector is a _scalar multiple_ of the original vector, it must lie in the span.
- The Span of a single vector can be visualized as basically a line.
	- A single vector points a certain way.
	- The span of this one vector is literally the different ways we scale it.
- So our eigenvector, when transformed, lands back on the same line.
- The eigenvalue is the scalar multiple $\lambda$ such that $A\vec x = \lambda\vec x$. We'll mostly deal with real valued $\lambda$s, an imaginary $\lambda$ signifies a rotation.

That is the key intuition behind eigenvectors: vectors that don't get knocked off their Span after a transformation.
# Why
- They seem to be useful in a lot of stuff.
- They make certain computations easier.
- Like for 3D rotations, the eigenvector is same as the axis of rotation–I guess this could be useful in robotics.