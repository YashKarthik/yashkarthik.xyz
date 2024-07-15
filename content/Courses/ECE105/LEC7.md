---
course: '[[Courses/ECE105/ECE105|ECE105]]'
lecture: 7
date: null
reading: null
publish: true
---

- Circular Motion in 2D.
	- Uniform circular motion.
	- Time period, angular speed.
- Non-uniform circular motion.

# Circular Motion
- Object goes around circle at a constant speed.
	- Constant speed not velocity as velocity cannot be constant in a circle.
	- The direction is always changing => velocity is always changing.
	- Here the magnitude of velocity, i.e. speed, stays constant.
- Velocity is always tangential here.
	- Change in velocity is toward the inside.
	- Since there is no change in tangential velocity, there is no tangential acceleration.
	- The only acceleration is to keep the object in the circle–centripetal acceleration.
	- When we look at the change in velocity (basically the change in direction here), and make the time interval very small, hence making the angle traversed very small, our $\Delta v$ is almost perpendicular to both initial and final velocity. Since acceleration is $\Delta v/t$, acceleration is also perpendicular to velocity. Toward the center.
		![[Attachments/Screenshot 2023-09-19 at 22.57.24.png]]
# Centripetal Acceleration
$$
a = \frac{v^2}{r}
$$
## Expression for centripetal acceleration
![[Attachments/Screenshot 2023-09-19 at 23.28.51.png]]
- Particle moves around a circle at $\vec v$.
	- $\vec v$ is perpendicular to $\vec r$.
	- $\vec r$ is at angle $\theta$ to the x-axis.
	- By geometry, $\theta$ is the angle between $\vec v$ and the vertical.
$$
\begin{align}
v_x = -v\sin\theta\\
v_y = v\cos\theta\\
\\
v = (-v\sin\theta)\hat i + (v\cos\theta)\hat j\\
\\
\sin\theta = y/r\\
\cos\theta = x/r\\
\\
v = (-v\frac yr)\hat i + (v\frac xr)\hat j
\\
\vec a = (-\frac vr)(\frac{dy}{dt})\hat i + (\frac vr)(\frac{dx}{dt})\hat j\\
= (-\frac vr)(v_y)\hat i + (\frac vr)(v_x)\hat j\\
= (-\frac vr)(v\cos\theta)\hat i + (\frac vr)(-v\sin\theta)\hat j\\
\\
\vec a= -\frac{v^2\cos\theta}{r}\hat i\ -\frac{v^2\sin\theta}{r}\hat j\\
|\vec a| = \frac{v^2}{r}

\end{align}
$$

Angle $\phi$ acceleration makes with x-axis:
$$
\begin{align}
\tan\phi = \frac{a_y}{a_x}\\
= \frac{\frac{- v^2\sin\theta}{r}}{\frac{- v^2\cos\theta}{r}}\\
\tan\phi = \tan\theta
\end{align}
$$
# Period and Angular Speed
$$
T = \frac{2\pi r}{v}
$$
(speed = distance / time => time = dist / speed)
$$
\begin{align}
v = \frac{2\pi r}{T}\\
\omega = \frac{2\pi}{T}\\
v = \omega r\\
a = \omega^2r = \frac{v^2}{r}
\end{align}
$$

- Time period: time taken to complete one cycle.
- Rotation rate: the number of cycles completed in one second.
# Non Uniform Circular Motion
$$
\vec a = \vec a_r + \vec a_t
$$
- Now net acceleration is not toward center.
- If car is accelerating, net acceleration is ahead of center.
- If car is de-accelerating, net acceleration points behind center.