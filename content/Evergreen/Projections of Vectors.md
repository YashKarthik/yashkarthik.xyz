---
lecture: '[[Courses/MATH115/LEC11|LEC11]]'
related:
- '[[Evergreen/Vectors]]'
- '[[Evergreen/Physics]]'
publish: true
---

![[Attachments/Screenshot 2023-09-26 at 10.32.50.png]]
- Projection of $\vec u$ on $\vec v$ is kinda like how much of $\vec u$ would lie on $\vec v$.
- Projections are like the $x, y$ components of our original vector.
$$
\begin{align}
\text{proj}_{\vec v}(\vec u) = \frac{\vec v\cdot \vec u}{||\vec v||^2}\ \vec v\\
= (\vec v\cdot \vec u)\Big(\frac{\vec v}{||\vec v||}\Big)\frac{1}{||\vec v||}
\end{align}
$$
- From physics, we know that the horizontal component (the projection) is $\vec r\cos\theta$.
- Here we are just expressing it vectorially, without involving angles.
- The dot product helps us replace the angle, but there are two problems with it.
- First, dot product is scaler. It does not automatically tell us which direction the resulting projection points toward. We can use intuition in problems, but we also need a concrete math definition we can fall back on.
- Second, while the dot product helps us replace the angle, it also brings along the second vector with it.
- We solve the _direction issue_ by calculating the unit vector of the projected-upon vector. Giving us the first fraction-bracket.
- The second fraction helps us undo the dot product effect (partly). We are basically cancelling out the second vector.
# Perp
- Perp is the vertical component of the projection.
- Since everything here is a vector:
$$
\text{perp}_{\vec v}(\vec u) = \vec u - \text{proj}_{\vec v}(\vec u)
$$
- Both are perpendicular to each other.
# Directions of Projections
- Use the cosine, angle rules from dot product to figure it out.