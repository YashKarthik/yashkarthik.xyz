import pathlib
import frontmatter

dir = pathlib.Path("./Evergreen/")

for file_path in dir.rglob("*.md"):
    if not file_path.is_file: continue
    print(file_path)

    md: frontmatter.Post
    with open(file_path) as f:
        md = frontmatter.load(f)

    print(md.metadata)
    md["publish"] = True

    with open(file_path, "w") as f:
        f.write(frontmatter.dumps(md, sort_keys=False))
