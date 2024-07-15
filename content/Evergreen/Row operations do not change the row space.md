---
lecture:
- '[[Courses/MATH115/LEC28|LEC28]]'
related:
- '[[Evergreen/What are Elementary Row Operations|What are Elementary Row Operations]]'
- '[[Evergreen/Row Space|Row Space]]'
- '[[Evergreen/Span and Spanning Sets|Span and Spanning Sets]]'
references:
- '[[Attachments/Textbooks/MATH115 - Linear Algebra.pdf#page=200&selection=311,0,311,12|Theorem
  28.5]]'
publish: true
---

- From [2], row spaces are basically a set of linear combinations of the rows of a matrix, i.e. it's the $\text{Span}$ of the rows.

Theorem 28.5 in `references` says that:
- If you have $A$ and you create $B$ by doing some row operations on $A$.
- Then the row space of each of those matrices is gonna be the same.
- This makes sense because $\text{Span}$ doesn't change when you have more linearly dependent vectors in your spanning set.
- And row operations basically enable you to represent your rows as linear combinations of other rows.