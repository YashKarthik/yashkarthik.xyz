---
related:
- '[[Evergreen/C]]'
- '[[Evergreen/CPP]]'
- '[[Evergreen/Programming]]'
publish: true
---

- When doing pointer arithmetic you don't need to account for the actual bytes of the data type.
- The computer figures that out on it's own.
- We just need to account for the number of elements.

- Eg: to calculate elems in an array
```cpp
(end - begin) / sizeof (int);
```
- You don't need to divide by sizeof, the compiler automatically does that.
- Is this the same in C?. Yes.