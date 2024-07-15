# Q2 B
1. `add_alloc1(p1: prog, A: alloc): alloc` is invalid.
	- Parsing the set builder expression for $A^\prime$, we can see that it is the set of all $(p, c)$ pairs where the $c$ is a $cpu$ from the original allocation $A$ and $p$ belongs to the union of $prog's$ in $A$ and the new program $p_1$.
	- The set returned by `add_alloc1` is the set of all $(prog, cpu)$ pairs from $A^\prime$ that satisfy one of the below:
		- The pair already belongs to $A$; or,
		- Satisfies `could_alloc(p3, c3, A)` and `is_optimal(A')`
			- `could_alloc(p3, c3, A)` tests if `c` has enough memory and security level for running `p`.
				- Tests if $(p_3, c_3)$ is a valid allocation while considering all the other programs occupying $c_3$'s memory.
		- But, also considers new program-cpu pairs which were not in the original allocation. Hence this function is invalid.
1. `add_alloc2(p1: prog, A: alloc): alloc` is invalid.
	- The returned set is the set of all $(p_2, c_2)$ pairs such that one of the following is satisfied:
		1. The pair already belongs to $A$, then we add it to the result untouched; or
		2. `mem_ok(A U {p2, c2})`, `is_optimal(A U {p2, c2})`  and `p1 = p2` are all satisfied.
				1. `mem_ok` tests if allocating `p2` to `c2` is possible, while considering all the other programs already allocated to `c2`.
				2. `is_optimal` essentially checks if another cpu with a lower security level exists and enough memory exists such that `p2` can be allocated to it.
				3. `p1 = p2` just ensures this expressions evaluates only for our new program and not the existing programs in $A$.
	- But consider the case where we have multiple cpus of equal security level. In such a case, the same program would be allocated to multiple cpus, breaking the constraint "allocate a program to a cpu".