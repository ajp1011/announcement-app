<template>
  <div>
    <h3>{{ announcement.author }}</h3>
    <p>{{ announcement.date }}</p>
    <div v-html="parsedBody"></div>
  </div>
</template>

<script>
import MarkdownIt from "markdown-it";

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
      const md = new MarkdownIt();

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