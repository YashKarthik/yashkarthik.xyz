---
lecture:
- '[[Courses/MATH115/LEC41|LEC41]]'
related:
- '[[Evergreen/Matrices]]'
references:
- '[[Attachments/Textbooks/MATH115 - Linear Algebra.pdf#page=280&selection=12,0,12,31|Definition
  41.1]]'
- '[[Attachments/Textbooks/MATH115 - Linear Algebra.pdf#page=280&selection=114,0,114,10|Lemma
  41.1]]'
publish: true
---

- When all the non-diagonal entries are zero.
- Represented as $\text{diag}(d_{11}, ...,\ d_{nn})$ since the only entries that matter are the ones on the diagonal.

# Properties
1. **Sum:** since the non-diagonal entries are zero, we are basically doing $d_{nn} + c_{nn}$.
2. **Product:** looks very nice. Computing the mat-vec product, then this makes sense.
3. **Power:** raise each entry to $k$. Extends the product property from above.
	1. If $D$ is invertible, this property works even for negative powers.
	2. For $D$ to be invertible, all the diagonal entries must be non-zero (why?).
		1. For inverse, the determinant must not be zero cuz $A^{-1} = \frac{\text{adj } A}{\det A}$
		2. Det $\ne$ 0; for that the diagonal entries must not be zero.
 
# Why Care?
- Simple computation.
- Useful to understand matrix properties. All the stuff happens across the main axis.