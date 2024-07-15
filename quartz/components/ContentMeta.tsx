import { formatDate, getDate } from "./Date"
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import readingTime from "reading-time"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"
import { JSX } from "preact"
import style from "./styles/contentMeta.scss"
import { CrawlLinks } from "../plugins"


interface ContentMetaOptions {
  /**
   * Whether to display reading time
   */
  showReadingTime: boolean
  showComma: boolean
}

const defaultOptions: ContentMetaOptions = {
  showReadingTime: true,
  showComma: true,
}

function extractText(text: string) {
  const start = text.indexOf('[[');
  const end = text.lastIndexOf(']]');

  if (start === -1 || end === -1) {
    return text;
  }

  const innerText = text.substring(start + 2, end);
  const parts = innerText.split('|');
  return parts[1];
}


export default ((opts?: Partial<ContentMetaOptions>) => {
  // Merge options with defaults
  const options: ContentMetaOptions = { ...defaultOptions, ...opts }

  function ContentMetadata({ cfg, fileData, displayClass }: QuartzComponentProps) {
    const text = fileData.text
    const segments: (string | JSX.Element)[] = []

    if (fileData.dates) {
      segments.push(formatDate(getDate(cfg, fileData)!, cfg.locale))
    }

    if (fileData.frontmatter) {
      if (fileData.frontmatter["related"]) {
        console.log(fileData.frontmatter["related"]);

        segments.push(
          <span>
            <b>Related</b>:
            {
              fileData.frontmatter["related"].map((n: any) => (
                <span class="related-elems">{extractText(n)}</span>
              ))
            }
          </span>
        );
      }
    }

    if (text) {
      const segmentsElements = segments.map((segment) => <span>{segment} <br/></span>)

      return (
        <p show-comma={false} class={classNames(displayClass, "content-meta")}>
          {segmentsElements}
        </p>
      )
    } else {
      return null
    }
  }

  ContentMetadata.css = style

  return ContentMetadata
}) satisfies QuartzComponentConstructor
