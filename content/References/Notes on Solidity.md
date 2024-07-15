# On programs running on the blockchain
- One of the first things to note is that programs cannot trigger themselves, every action on a blockchain must be triggered by an EOA [^1]. So no cron-jobs [^2], if-this-then-that etc.
- Related, programs are not "always on".
- Long running programs don't, and cannot exist. This is a side-effect of gas. Gas exists as a mechanism to prevent DoS (denial of service) attacks, via spam etc. There is a limit of 15 million gas units per block => there's a limit on the computational expensiveness of code that can run on the blockchain in a single block. So on Ethereum, all code, eventually, halts.

# Storage, Memory and Stack
[docs link](https://docs.soliditylang.org/en/latest/introduction-to-smart-contracts.html#storage-memory-and-the-stack)

- The EVM has three main "areas" of storage.
## Storage
- Storage is the persistent data area. Like in regular programs, persisting data between function calls is expensive.
- But unlike in regular programs, where persistent storage is external to the program, storage in solidity is same as any ordinary variable in the contract.
- It's essentially a key value data-store, mapping 256-bit "words" to 256-bit words.

## Memory
- A contract obtains a freshly cleared instance of memory for each message call.
- Think of memory like an array, where each element can be accessed and manipulated via indices.
- Reads can can be at most 256 bits in size, while writes can be between 8 bits (1 byte) and 256 bits.
- When more memory is required, it's expanded by 256-bits
- Memory cost scales quadratically.

## Stack
- The EVM performs all computations on a stack.
- It's 1024 elements large, contains words of 256-bits.
- Access to the stack in is limited to the topmost 16 elements.
- It is possible to copy one of them to the top of the stack or swap the topmost element with one of the 16.
- Operations (function calls etc) take the topmost two (or one, or more, depending on the operation) elements from the stack and push the result onto the stack.

# Reference types, Value Types and Data Location
- When value types are passed as function arguments, they are copied and the copy is passed to the function. Any mutations made with the function does not affect the original variable.
- Reference types are the other way around. (structs, arrays, mappings).
- In solidity, reference types must be also be assigned a "data location".

```solidity
// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.5.0 <0.9.0;

contract C {
    // The data location of x is storage.
    // This is the only place where the
    // data location can be omitted.
    uint[] x;

    // The data location of memoryArray is memory.
    function f(uint[] memory memoryArray) public {
        x = memoryArray; // works, copies the whole array to storage
        uint[] storage y = x; // works, assigns a pointer, data location of y is storage
        y[7]; // fine, returns the 8th element
        y.pop(); // fine, modifies x through y
        delete x; // fine, clears the array, also modifies y
        // The following does not work; it would need to create a new temporary /
        // unnamed array in storage, but storage is "statically" allocated:
        // y = memoryArray;
        // Similarly, "delete y" is not valid, as assignments to local variables
        // referencing storage objects can only be made from existing storage objects.
        // It would "reset" the pointer, but there is no sensible location it could point to.
        // For more details see the documentation of the "delete" operator.
        // delete y;
        g(x); // calls g, handing over a reference to x
        h(x); // calls h and creates an independent, temporary copy in memory
    }

    function g(uint[] storage) internal pure {}
    function h(uint[] memory) public pure {}
}
```

---
**Metadata**
- People::
- Related:: [[Evergreen/EVM]], [[Evergreen/Ethereum]], [[Evergreen/Blockchains]], [[Evergreen/Programming]]
- References:: [Solidity docs](https://docs.soliditylang.org/en/latest/)
- Status:: #research_more #review
- Created:: 17th Mar 2023
- Updated:: `$=dv.el('t', dv.current().file.mday)`

[^1]: externally owned accounts, accounts controlled by a private key.
[^2]: no cron jobs written in smart contracts themselves, a cron job running on AWS may call a contract though.