<template>
  <div>
    <div v-for="announcement in displayAnnouncements" :key="announcement.id">
      <Announcement :announcement="announcement" />
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref } from 'vue';
// Import the announcement component
import Announcement from '@/components/Announcement.vue';

const { announcements } = defineProps(['announcements']);

const displayAnnouncements = ref(announcements);
</script>