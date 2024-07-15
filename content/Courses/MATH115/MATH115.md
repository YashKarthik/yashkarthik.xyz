---
publish: true
professor: '[[People/Nicole Kit]]'
related:
- '[[Evergreen/Mathematics]]'
- '[[Evergreen/Linear Algera]]'
textbook: '[[Attachments/Textbooks/MATH115 - Linear Algebra.pdf|MATH115 - Linear Algebra]]'
term: 1A
started: 2023-09-06
contact: nkitt@uwaterloo.ca
---

```dataview
TABLE file.lists.text AS "Concepts", status AS "Status"
FROM "Courses/MATH115"
WHERE file.name != "MATH115"
WHERE contains(string(file.lists.section), "Outline")
SORT date
```