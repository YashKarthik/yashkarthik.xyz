---
publish: true
professor: '[[People/Robert Garbary]]'
related:
- '[[Evergreen/Calculus]]'
textbook:
- '[[Attachments/Textbooks/MATH119 - Notes.pdf|MATH119 - Notes]]'
term: 1B
started: 2024-01-08
contact: null
office hours: null
confidence: null
---

Notes:
- [online lecs](https://www.youtube.com/playlist?list=PLwRPC3qtOaEHgb3xYG-IOzW_g3vLwCWQA)


```dataview
TABLE file.lists.text AS "Concepts", status AS "Status"
FROM "Courses/MATH119"
WHERE file.name != "MATH119"
WHERE contains(string(file.lists.section), "Outline")
SORT date
```

---
# Stuff
- Achieve due on Wed.
- Group work Friday TUT.

---
**Random Notes**

# Constrained Optimization.
- Finding extrema of $f(x, y)$ where $(x, y)$ are subject to the constraint $g(x, y) = K$.
- We can imagine plotting the level curves of $f$ and tracing out the single level curve $g$ (cuz we want the level curve where $g = K$).
- The points where the curves of the two functions intersect are points that satisfy the constraint as well as lie on $f$.
- Let's say we want to maximize $f$. So we want our $g$ curve to come as close as possible to the center of $f$'s level curves.
- This happens at the point where the two curves are tangential.
- Because at that point of intersection, there's no way for $g$ to get closer to $f$ without breaking out of the $g$ curve.
- If we were minimizing, we would look for a point furthest away from the center. But the lowest possible would still be a tangential point of contact.
- Since tangential, the directional derivatives of both curves would be parallel (or anti-parallel) (since directional derivatives are perp to level curves).

$$
\begin{align}
\nabla f = \lambda \nabla g \ \text{ and }\ g(x, y) = K\\
\text{ or}\\
\nabla g = \vec 0\ \text{ and }\ g(x, y) = K
\end{align}
$$
- We include the second case because the constraint may be satisfied at a point which is at the local extrema of $g$.
- $\lambda$ is allowed to be zero cuz the point may be over $f$'s local extrema.

# Double Integrals
- Single: area; double: volume; n: n+1 dim analog.
- Along with splitting the curve into n dxs, we also split the region into dys. da = dx.dy
- Volume = area . height
- If we have a nice rectangular region, it's basically like two nested for-loops. The order of iteration (across columns or down rows) doesn't matter. We can swap dx, dy and swap the limits.
- But with other shapes, it depends.
## Type 1 Region
- Defined by two vertical lines, and two horizontal curves (in the xy plane view).
- Here we split x-axis into dxes first, cuz x always ranges from a to b.
- Each vertical split is then split into n dys. The limits of y are the two curves defining the region.
- Since we are iterating over x first, it's the outer integral.
- Here we can't simply swap. Swapping would be much more complex here.
## Type 2 Region
- Same as above, but sideways.
- Defined by two horizontal lines, and two vertical curves (in the xy plane view).
- Now we first iterate over y (outer integral) and for each horizontal segment, we chop it into square elements.

- It doesn't need to have a straight line to be defined as type 1/2 region. Sketch the region, use logic to split it up into better shapes then integrate over them to find volumes.