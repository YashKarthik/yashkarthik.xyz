import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4.0 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Yash Karthik",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "en-US",
    baseUrl: "yashkarthik.xyz",
    ignorePatterns: ["Journal", "Templates", "Output", ".obsidian", "Inbox.md", "Attachments/Textbooks", "Books", "Fleeting", "People"],
    defaultDateType: "created",
    theme: {
      cdnCaching: false,
      fontOrigin: "local",
      typography: {
        header: "Iosevka Etoile Web",
        body: "Inter",
        code: "Iosevka Web",
      },
      colors: {
        lightMode: {
          light: "#FFF0E1",
          lightgray: "#cdbcb1",
          gray: "#A98A78",
          darkgray: "#54433A",
          dark: "#7D6658",
          secondary: "#904756",
          tertiary: "#9b3b41",
          highlight: "#8e5b45",
        },
        darkMode: {
          light: '#292522',
          lightgray: '#34302C',
          gray: '#867462',
          darkgray: '#ECE1D7',
          dark: '#C1A78E',
          secondary: "#D47766",
          tertiary: "#EBC06D",
          highlight: "#292522",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.Latex({ renderEngine: "katex" }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "solarized-light",
          dark: "vitesse-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
    ],
    filters: [],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
