<template>
  <div>
    <div v-if="isBackPaginationNeeded">
      <button @click="loadPreviousPage">Load Previous</button>
    </div>
    <div v-for="announcement in paginatedAnnouncements" :key="announcement.id">
      <Announcement :announcement="announcement" />
    </div>
    <div v-if="isForwardPaginationNeeded">
      <button @click="loadNextPage">Load Next</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import Announcement from '@/components/Announcement.vue';

const { announcements } = defineProps(['announcements']);

const page = ref(1);
const pageSize = 2; // Adjust the number of announcements per page as needed

const paginatedAnnouncements = computed(() => {
  const startIndex = (page.value - 1) * pageSize;
  const endIndex = page.value * pageSize;
  return announcements.slice(startIndex, endIndex);
});

const isForwardPaginationNeeded = computed(() => {
  return page.value * pageSize < announcements.length;
});

const isBackPaginationNeeded = computed(() => {
  return page.value > 1;
});

const loadNextPage = () => {
  page.value += 1;
};

const loadPreviousPage = () => {
  page.value -= 1;
};
</script>