```solidity
event Transfer(address indexed from, address indexed to, uint256 value)
```

- The difference between the indexed and non-indexed parameters in the event is the difference in how they are logged by the EVM.
- The EVM has four opcodes for logging: LOG0, LOG1, LOG3, LOG4. The number represents the number of *topics* each log can carry along with it.
- To log more data, we must use the *data* field.

## Topics vs Data
- They are two different ways of logging data out of the EVM.

- Topics are searchable, but expensive.
- Data is not searchable, but cheaper.
- Topics are limited to 128 bytes, while data is not.

- The first topic is the keccak256 hash of the event name and arguments with all keywords removed. Eg: `keccak256(Transfer(address,address,uint256))`
- If the params to the event are indexed, they will be logged as topics.
- The signature (topic 0) is omitted when the event is anonymous.
- The data emitted are the arguments to the event. Eg: in `emit Transfer(from, to, value)` the args will be logged as data.

## Indexed vs Non-Indexed
- Indexed parameters of an event are logged as additional topics.
- A non-indexed param will be logged as data.

**Metadata**
- People::
- Related:: [[Evergreen/EVM]], [[Evergreen/Ethereum]]
- References:: [Understanding event logs on eth](https://medium.com/mycrypto/understanding-event-logs-on-the-ethereum-blockchain-f4ae7ba50378)
- Status:: #understood
- Created:: 6th Oct 2022
- Updated:: `$=dv.el('t', dv.current().file.mday)`