<template>
  <div>
    <h3>{{ announcement.author }}</h3>
    <p>{{ announcement.date }}</p>
    <div v-html="announcement.body"></div>
  </div>
</template>

<script>
export default {
  props: {
    announcement: {
      type: Object,
      required: true,
    }
  }
};
</script>