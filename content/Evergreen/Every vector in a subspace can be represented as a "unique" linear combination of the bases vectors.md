---
lecture:
- '[[Courses/MATH115/LEC27|LEC27]]'
related:
- '[[Evergreen/Bases of Subspaces|Bases of Subspaces]]'
references: '[[Attachments/Textbooks/MATH115 - Linear Algebra.pdf#page=196&selection=105,0,105,12|MATH115
  - Linear Algebra, page 196]]'
publish: true
---

- The proof in the `reference` is pretty convincing.
- And it's easy to think about if we consider $\hat i, \hat j$ vectors.
- Every point on the plane is a _unique_ linear combination of those two vectors.
- Now this is true because the bases vectors have to be linearly independent, hence the components contributed by "vector A" will _have_ to be contributed by "vector A".

- The proof works by assuming two different coefficients for the linear combinations.
- Since the two expressions work out to be the same, we equate the two expressions.
- Now we combine the coefficients into a single bracket and the RHS = 0.
- For linear independence, the equation is true only when all the coefficients = 0.
- Since each term is $(c_n - d_n)\vec v_n$, we equate $c_n = d_n$.