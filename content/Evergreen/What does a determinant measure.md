---
lecture:
- '[[Courses/MATH115/LEC36|LEC36]]'
related:
- '[[Evergreen/Determinant of a 2x2 matrix|Determinant of a 2x2 matrix]]'
aliases:
- Determinant of a Matrix
publish: true
---

The determinant measures the factor of area (or volume) change.

# Story
- The matrix represents where the standard basis vectors land after the transformation.
- The transformation changes alignment of the entire grid (squish, stretch, shear, flip etc).
- If we consider the standard basis vectors to be enclosing an area (imagine square for 2D), after the transformation, the basis vectors would point differently and hence enclose a different amount of area.
- The determinant of the matrix measures the change in this area enclosed by the standard basis vectors.
- This is just a factor of area change, the factor is same for any region of area enclosed by any two vectors.
- So determinant measures by how much any region of area changes after the transformation.

# Negative?
- The sign of the determinant conveys the orientation of the coordinate system.
- If an matrix operation flips the entire grid, the determinant of that operation will be negative.
- 3D flip? The right hand rule will no longer hold det is negative.