---
lecture:
- '[[Courses/MATH115/LEC24|LEC24]]'
related:
- '[[Evergreen/Span and Spanning Sets|Span and Spanning Sets]]'
- '[[Evergreen/What is the rank of a matrix|What is the rank of a matrix]]'
references: '[[Attachments/Textbooks/MATH115 - Linear Algebra.pdf#page=182&selection=83,0,83,12|MATH115
  - Linear Algebra, page 182]]'
publish: true
---

> [!Rank and Lin. Dep] Rank and Linear Independence
> A set is linearly independent iff the rank of the matrix with the vectors as its columns is equal to the number of vectors.

- If we try to solve the linear dependence equation, we get a homogenous system:
$$
c_1\vec v_1 +\ ...\ + c_2\vec v_n = 0
$$
- We can create an augmented matrix to solve this system where the columns of the matrix are basically the vectors $\vec v_1, \vec v_2,..., \vec v_n$. The vector on the right side will be full of zeroes.
-  Taking our matrix to RREF/REF and converting back to equations, we can see that each of $c_1, c_2, ..., c_n$ is equal to zero (since the vector on the right is full of zeroes).

- The only way our coefficients are not zero is if one of them can be expressed as a linear combination of the others (i.e. one of the cols doesn't have a pivot => rank is not equal to number of columns).