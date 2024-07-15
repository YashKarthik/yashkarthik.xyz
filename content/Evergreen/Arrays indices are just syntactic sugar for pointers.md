---
related:
  - "[[Evergreen/C]]"
  - "[[Evergreen/Programming]]"
  - "[[Evergreen/Low Level]]"
created: 4th Aug 2023
updated: 4th Aug 2023
publish: true
---
- Thinking of memory as a grid is really useful.
- Arrays really have a single defining characteristic–elements are placed one after the other in a contiguous block of memory.
- So if you know the starting address of the block, you just need to walk forwards from there and you'll find each address holding an element of your array.
- It's helpful to keep track of the length of the array as you don't wanna read memory you don't own.

- And this is exactly how arrays work in C. We are given a pointer to the first element of the array.
- We can figure out the addresses of the other elements by adding to this address.

```c
int *array = malloc(sizeof(int)*10);
array[3] == *(array + 3) // the compiler figures out how many bytes to actually increment based on the pointer type.
```

**We can take this further**
```c
array[3] == 3[array]
```

This is because `a[n]` literally evaluates to `*(a + n)` which is the same as `*(n + a)`.
