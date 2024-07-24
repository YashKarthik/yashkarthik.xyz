---
publish: true
---
- https://en.wikipedia.org/wiki/Semiconductor
- https://en.wikipedia.org/wiki/Semiconductor_device_fabrication
- https://hacker-fab.gitbook.io/hacker-fab-space/fab-toolkit/patterning

- [[Evergreen/Making Semiconductors more Conductive by introducing Partially Filled States|Making Semiconductors more Conductive by introducing Partially Filled States]]

# Manufactoring
## Photolithography
- Used to _draw_ a pattern onto a silicon wafer.
- Followed by etching where we make the drawings physical.

- Starts off by **coating** the silicon substrate in a layer of photoresist.
	- Photoresist is a light sensitive chemical that either hardens (negative) or becomes soluble (positive) when exposed to light.
	- The photoresist is applied evenly on the wafer using a **spin-coater**.
		- A spin coater is like a vinyl music player.
		- We put a few drops of the spin coater in the center of the wafer and slowly start spinning it.
		- All the excess photoresist flies off the wafer, preventing the formation of beads and irregularities.
- We then **expose** the photoresist to a pattern of intense light.
	- The exposure to light causes some chemical reactions on the photoresist which, depending on whether it's a positive or negative photoresist, weaken or harden  the layer of photoresist exposed to the light.
	- The light is shined onto the substrate in a pattern made by using a photomask (patterned covering).
- After exposure, we remove some of the photoresist using a **developer solution**.
	- Surface exposed to light when using positive photoresist becomes soluble.
	- While the unexposed surface remains soluble if using negative photoresist.
	- The developer solution is also delivered on a spinner like photoresist.

- After the photoresist is no longer useful it is removed from the substrate using a _resist stripper_ that chemically alters the resist such that it no longer sticks to the substrate surface or using plasma ashing (using oxygen to oxidize the resist).
## Etching