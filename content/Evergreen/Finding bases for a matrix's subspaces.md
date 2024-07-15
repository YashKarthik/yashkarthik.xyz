---
lecture:
- '[[Courses/MATH115/LEC29|LEC29]]'
related:
- '[[Evergreen/Matrices]]'
- '[[Evergreen/The Fundamental Subspaces of a Matrix]]'
- '[[Evergreen/Bases of Subspaces|Bases of Subspaces]]'
references:
- '[[Attachments/Textbooks/MATH115 - Linear Algebra.pdf#page=202&selection=0,0,0,10|MATH115
  - Linear Algebra, page 202]]'
publish: true
---

# Bases of Null Space
- We know Null(A) is the set of vectors that land on the origin after the transformation.
$$
\text{Null}(A) = \{ \vec x\ |\ A\vec x = 0 \}
$$
- So we carry A to RREF to find values of $\vec x$ that satisfy $A\vec x = 0$.
- After RREF, we can write $\vec x$ as a linear combination of two (or more) other vectors (num. of vectors depends on the num of free vars).
- Since every vector in Null(A) can be represented as a linear combination of those two vectors, those two vectors are the bases.
- These two vectors are linearly independent cuz we carried the matrix to (R)REF.
# Bases of Column Space
- Column spaces is basically the set of linear combinations of the columns of A.
- The definition itself tells us what are we "linearly combining"–columns of A.
- We just need to ensure that the columns of A are linearly independent, then they can be bases.
- For L.I, check the number of pivots in the RREF of A, that's the number of linearly independent vectors in the set.
- Since columns without pivots can be expressed as a linear combination of columns with pivots, we know we have LD.
- This relationship carries between the regular and RREF forms since [[Evergreen/Row operations do not affect dependence between columns of a matrix|row operations do not affect dependence between columns of a matrix]]
- Just pick the original columns that have pivots in the RREF version, that's your basis set.
# Bases of Row Space
- This is the set of linear combinations of the rows of A.
- Again, by definition, we know what vectors to look at.
- We just throw out the rows that are linearly dependent.
- Here, since [[Evergreen/Row operations do not change the row space|row operations do not change the row space]], our basis set can contain the RREF forms of the rows.