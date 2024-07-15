---
lecture: '[[Courses/ECE105/LEC14|LEC14]]'
related:
- '[[Evergreen/Work and Energy]]'
- '[[Evergreen/What is Kinetic Energy|What is Kinetic Energy]]'
publish: true
---

- Work $W$ is the change in the kinetic energy of a body due to an external force.
$$
\begin{align}
W = K_f - K_i\\\\
W = \vec F\cdot \vec s
\end{align}
$$
- It accounts for the increase (or decrease) of velocity; i.e. transfer of energy.
	- Increase in object's velocity -> Force has done positive work on the body.
	- Decrease in object's velocity -> Force has done negative work on the body.
- It's in Joules since it's just change in energy (which is in Joules).

# Alternate expression of work
If our object goes from $v_0$ to $v$ in x-axis:
$$
\begin{align}
W = \frac{mv^2}{2} - \frac{mv_0^2}{2}\\\\
= \frac{m}{2}(v^2 - v_0^2)\\\\
= \frac{m}{\cancel 2}(\cancel 2 ax)\\\\
= (ma)x\\\\
W = F_xx\\\\
\text{Generalizing for different axes:}\\\\
= (\vec F\cos\theta)\ \vec s\\\\
W = \vec F\cdot\vec s
\end{align}
$$
- Since we need the component of force only along the axis of motion, we use $\cos\theta$.