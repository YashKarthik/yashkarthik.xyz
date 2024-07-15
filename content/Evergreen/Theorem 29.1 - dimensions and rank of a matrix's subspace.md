---
lecture:
- '[[Courses/MATH115/LEC29|LEC29]]'
related:
- '[[Evergreen/Dimensions of a subspace|Dimensions of a subspace]]'
- '[[Evergreen/What is the rank of a matrix|What is the rank of a matrix]]'
- '[[Evergreen/The Fundamental Subspaces of a Matrix]]'
references:
- '[[Attachments/Textbooks/MATH115 - Linear Algebra.pdf#page=206&selection=2,0,2,12|MATH115
  - Linear Algebra, page 206]]'
publish: true
---

- This carries over nicely from [[Evergreen/Finding bases for a matrix's subspaces|Finding bases for a matrix's subspaces]].

# Null Space
- If we have a unique solution for $A\vec x = 0$, it implies that the only $\vec x$ that satisfies the equation is the zero vector.
- Visually, that means that only the zero vector lands on the origin after the transformation, all other vectors fall somewhere else.
- If we have a more than one solution, with free variables, then rank $\ne n$, and our set (the null space) ends up with more elements.
- As we get each new free variable, we get more bases as each free var contributes to one entry of the vector.

# Col and Row Space
- The theorem makes sense for these two since we use the number of pivots to find the bases. (see [[Evergreen/Finding bases for a matrix's subspaces#Bases of Column Space|Finding bases for a matrix's column space]]) for more.
- The columns without the  pivots can be expressed as a linear combination of the columns with the pivots.