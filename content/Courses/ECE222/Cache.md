# Direct Mapped Cache
- Each mem address is mapped to one specific block of cache.
- Block may be of different size (1 byte, 2 byte, word-length etc). We are using 4-word wide blocks (16 bytes)
- Cache area = block width * height
- Block is the unit of transfer between cache and memory. But the size of data read into registers depends on the instruction (`lb, lh, lw`).
![[Attachments/Pasted image 20241208174059.png]]

- Cache is smaller than memory => multiple memory addresses may be assigned the same cache block. How do we distinguish? We use tags.
![[Attachments/Pasted image 20241208182416.png]]
- Since each word is 4 bytes, we can go within the offset.
	- The 2 MSBs are block offset.
	- The 2 LSBs are byte offset within the respective block.
	
- In hex, each character is 4 bits => the right-most character is the offset.
- Then index.

![[Attachments/Pasted image 20241208174059.png]]
- Validity bit specifies wether the value in cache is valid.

## Issues with Direct Mapping
- This cache takes advantage of temporal locality. An address which has been R/W is likely to be R/W again.
- **Conflict Misses**: Since multiple addresses may be assigned the same cache block, and if those addresses are used in succession, they keep kicking each other out.
	- What if different blocks of data could fit within the same cache block.
# Fully Associative Cache
- Address fields: tag remains same, offset is same, no index (tag enlarges).
- Blocks can go to any row.
- We compare tags for all entries in parallel.

- No **conflict misses** since block's won't kick each other out.
- But, need a lot of hardware comparators to perform comparisons in parallel.
# N-Way Set Associative Cache
- Address fields: tag and offset are same.
	- Index points to a _set_ of blocks.
- So once we draw out the blocks from the set, we must compare tag with each block.
$$
\begin{align}
\text{Cache Size} = \text{Number of sets} \times \text{Number of blocks per set} \times \text{Number block size} \\
\\
\text{index field width} = \log_2{(\text{Number of sets})}\\
\text{num. comparators} = \text{Number of blocks per set}
\end{align}
$$
# Other
- Block replacement policy.
- Types of cache misses.
- Block size tradeoff.
- Prefetching.
- Victim Buffer.
- Cost of tags.
- Write Policy: write through, write back.
- Cache design.
- L2 cache.
- 