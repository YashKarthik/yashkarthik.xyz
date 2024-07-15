---
related:
- '[[Evergreen/3D Rendering]]'
publish: true
---

- Useful for representing a point with respect to a shape.

- We have a shape (triangle for 2D).
- The idea is that a point can be represented as the center of mass of three masses placed on the vertices of the triangle.
- The masses can be positive, negative and zero.
- They are positive if the point P is inside the triangle.

- They are calculated by finding the ratios of areas of triangles formed by the original sides and the point P.
- Since area, it's also related to the cross product.