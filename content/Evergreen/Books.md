---
publish: true
---

```dataviewjs
const books = dv.pages('"Books"');

dv.table(
	["Name", "Reading Status", "Series", "Author", "Rating", "Genres", "Discovered"],
	books.map(b => [
		b.file.link,
		b["tag"],
		b["series"],
		b["author"],
		b["rating"],
		b["genres"],
		b["discovered"],
	])
);
```