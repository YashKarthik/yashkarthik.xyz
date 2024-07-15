---
lecture:
- '[[Courses/MATH115/LEC37|LEC37]]'
related:
- '[[Evergreen/What are Elementary Row Operations|What are Elementary Row Operations]]'
- '[[Evergreen/What does a determinant measure|Determinant of a Matrix]]'
references:
- '[[Attachments/Textbooks/MATH115 - Linear Algebra.pdf#page=259&selection=271,0,271,12|MATH115
  - Linear Algebra, page 259]]'
publish: true
---

1. A row or col of zeroes => det = 0.
	1. We expand along that row/col; each coefficient is 0 so it cancels out.
2. Swapping rows / cols => det B = - det A.
	1. Swapping rows basically swaps which operation is happing on which component of the standard basis vectors.
	2. So the change is still happening, but just on the other axis, hence the determinant is negative.
3. Adding a multiple of one row / column to another row / col: det B = det A.
	1. This is essentially _shearing_ the space. We are reorienting the vectors that form our parallelogram.
	2. Since parallelogram's area is base x height, depending on what you take as the base and height it becomes easy to visualize why shearing doesn't change area.
4. If any two rows of A are equal / scaler multiple: det A = 0.
	1. If two rows of A are the same => two basis vectors are landing at the same spot => squished into a lower dimension.
5. If B is created by multiplying a row / col with constant c: det B = c det A.
	1. This _scales_ the vector's length, hence occupying that much more area.