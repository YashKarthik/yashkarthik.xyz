---
lecture:
- '[[Courses/MATH115/LEC20|LEC20]]'
- '[[Courses/MATH115/LEC21|LEC21]]'
related:
- '[[Evergreen/Matrices]]'
- '[[Evergreen/Proofs]]'
publish: true
---

# If $AB = I$ then $BA = I$ and $\text{rank}(A) = \text{rank}(A) = n$
[[Attachments/Textbooks/MATH115 - Linear Algebra.pdf#page=159&selection=25,0,25,12|MATH115 - Linear Algebra, page 159]]
- We start by proving $\text{rank}(B) = n$ if $AB = I$.
- We define $\vec x$ such that $B\vec x = 0$ and then we basically "convert" $\vec x$ into $\vec 0$.
- Hence, $\vec x = \vec 0$ is the only solution to $B\vec x = 0$.
- So now thinking in terms of augmented matrix and systems of equations, we can see that if both $\vec b, \vec x$ are $\vec 0$, our augmented matrix has no free parameters => rank is same as the number of columns (n).

- Next, we prove $BA = I$ by defining $\vec y = B\vec x$. By [[Evergreen/System-Rank Theorem|System-Rank Theorem]], we are guaranteed to find a solution.
- Then similarly, $\text{rank}(A) = n$.

# If $B, C$ are both inverses of $A$ then $B = C$
[[Attachments/Textbooks/MATH115 - Linear Algebra.pdf#page=159&selection=355,0,355,12|MATH115 - Linear Algebra, page 159]]
- We "convert" $B$ to $C$.
- Start by multiplying with $I$ and then use the fact that $AC = I, BA = I$.

# Cancellation Laws
[[Attachments/Textbooks/MATH115 - Linear Algebra.pdf#page=163&selection=333,0,333,31|MATH115 - Linear Algebra, page 163]]
- If A is invertible and we have it on both sides of an equation, we can cancel it out.
$$
AB = AC \text{ or } BA = CA\\
$$
- This works only for invertible matrices as technically "cancellation" means we are multiplying both sides by something that cancels out the effect. Here we are cancelling out by multiplying both sides by $A^{-1}$ which cancels out the $A$ on each side. If inverse does not exist this wouldn't work.

# Invertible Matrix Theorem
[[Attachments/Textbooks/MATH115 - Linear Algebra.pdf#page=165&selection=130,0,130,39|MATH115 - Linear Algebra, page 165]]
- I should type out why this works.