https://electronics.stackexchange.com/questions/678861/overdrive-voltage-of-nmos-vs-pmos

$$
V_{OV} = V_{GS} - V_{T}
$$

- Is valid for both PMOS and NMOS.
- All three voltages must have the same sign.

- $V_{T}$ is the gate voltage ($V_{GS}$) required to _activate_ the gate.
	- For NMOS that's positive (to chase away holes in p-substrate and attract electrons from n-wells).
	- For PMOS this is negative (to chase away electrons in n-substrate and attract holes from p-wells.)
- As we increase/decrease the gate voltage to increase current flow, $V_{OV}$ is the _extra_ voltage after it crosses $V_T$.