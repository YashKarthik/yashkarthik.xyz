import rss from '@astrojs/rss';
import { getCollection } from "astro:content"
import sanitizeHtml from "sanitize-html"
import { micromark } from "micromark"
import { gfm, gfmHtml } from "micromark-extension-gfm"
import { mdxjs } from "micromark-extension-mdxjs"

export async function get(_context:any) {
  const blog = await getCollection('blog');
  const weekly = await getCollection('weekly');
  const stories = await getCollection('stories');

  const allWriting = Array.from(new Set([blog[0], weekly[0], stories[0]].concat(blog, weekly, stories)));
  allWriting.sort((a, b) => {
    let aDate = a.collection == "blog" ? a.data.published : a.data.published;
    let bDate = b.collection == "blog" ? b.data.published : b.data.published;
    return (new Date(aDate) < (new Date(bDate)) ? 1 : -1);
  })

  return rss({
    title: "Yash Karthik",
    description: "Essays and short by Yash Karthik; programming, physics and culture",
    site: "https://www.yashkarthik.xyz",
    items: allWriting.map((post) => {
      const renderedHTML = micromark(post.body, {
        extensions: [gfm(), mdxjs()],
        htmlExtensions: [gfmHtml()],
      });
      return {
        link: post.collection == "blog" ? `/archive/${post.slug}/` : (post.collection == "stories" ? `/archive/stories/${post.slug}` : `/archive/weekly/${post.slug}`),
        title: post.data.title,
        pubDate: new Date(post.data.published),
        description: post.collection != "blog" ? (post.collection == "stories" ? "A short sci-fi story by Yash Karthik" : `${post.data.title} - updates by Yash Karthik`) : post.data.description,
        content: sanitizeHtml(renderedHTML),
      }
    }),
  });
}
