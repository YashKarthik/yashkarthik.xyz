---
lecture: '[[Courses/MATH115/LEC13|LEC13]]'
related:
- '[[Evergreen/Methods of Math]]'
- '[[Evergreen/Matrices]]'
- '[[Evergreen/Equations]]'
publish: true
---

If we have a system of two equations:
$$
\begin{align}
a_1x_1 + a_2x_2 +\ ...\ a_nx_n = c_1\\
b_1x_1 + b_2x_2 +\ ...\ b_nx_n = c_2\\
\end{align}
$$
- We use elimination method to solve the equation.
- Elimination method is basically just used to cancel out the coefficients, so that we can see what the variables equate to.
- Since we are primarily operating on the coefficients, it would be convenient to not have to deal with writing down the variables.
$$
\begin{bmatrix}
a_1&a_2&...&a_n\\
b_1&b_2&...&b_n\\
\end{bmatrix}
$$
- As long as we maintain the placement of each of the coefficients in the matrix, operating on this matrix is same as operating on the equations.
- Since we also have an RHS with the constant term, we use something called an augmented matrix.
$$
\left[ 
    \begin{array}{cccc|c}
        a_1 & a_2 & ... & a_n & c_1 \\
        b_1 & b_2 & ... & b_n & c_2 \\
    \end{array}
\right]
$$
This is just an alternate (more convenient) representation of the equations.