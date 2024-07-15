---
lecture:
- '[[Courses/MATH115/LEC26|LEC26]]'
related:
- '[[Evergreen/Bases of Subspaces|Bases of Subspaces]]'
- '[[Evergreen/What is the rank of a matrix|What is the rank of a matrix]]'
references: '[[Attachments/Textbooks/MATH115 - Linear Algebra.pdf#page=192&selection=288,0,288,12|MATH115
  - Linear Algebra, page 192]]'
publish: true
---

- We [[Evergreen/You need n vectors in the basis set of Rn|showed]] that for $B$ to be a basis for $R^n$, it needs to have $n$ vectors.
- Now each of those vectors also should have $n$ components–i.e. be $n$ entries tall. Since we want to represent all the components of any vector in $R^n$.
- Constructing $A = [\vec v_1\ ...\ \vec v_n]$ where $B = \{ \vec v_1,\ ...,\ \vec v_n \}$. This means that each of the rows in the matrix $A$ must have a non-zero entry and hence have a pivot.
- I.e. the matrix $A$ must have rank $n$.