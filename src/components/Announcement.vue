<template>
  <div>
    <h3>{{ announcement.author }}</h3>
    <p>{{ announcement.date }}</p>
    <div v-html="parsedBody"></div>
    <hr />
  </div>
</template>

<script>
import MarkdownIt from "markdown-it";
import MarkdownItAbbr from "markdown-it-abbr";
import MarkdownItAnchor from "markdown-it-anchor";
import MarkdownItFootnote from "markdown-it-footnote";
import MarkdownItHighlightjs from "markdown-it-highlightjs";
import MarkdownItSub from "markdown-it-sub";
import MarkdownItSup from "markdown-it-sup";
import MarkdownItTasklists from "markdown-it-task-lists";
import MarkdownItTOC from "markdown-it-toc-done-right";

export default {
  props: {
    announcement: {
      type: Object,
      required: true,
    }
  },
  methods: {
    parseMarkdown(text) {
      // Create a new markdown-it instance
      const md = new MarkdownIt()
      .use(MarkdownItAbbr)
      .use(MarkdownItAnchor)
      .use(MarkdownItFootnote)
      .use(MarkdownItHighlightjs)
      .use(MarkdownItSub)
      .use(MarkdownItSup)
      .use(MarkdownItTasklists)
      .use(MarkdownItTOC);

      // Parse the Markdown text
      return md.render(text);
    },
  },
  computed: {
    parsedBody() {
      // Parse the body to return to the template
      return this.parseMarkdown(this.announcement.body);
    },
  },
};
</script>