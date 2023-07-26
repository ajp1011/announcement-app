<template>
  <div id="app">
    <AnnouncementList :announcements="announcements" />
  </div>
</template>

<script>
import AnnouncementList from './components/AnnouncementList.vue';

export default {
  components: {
    AnnouncementList,
  },
  // This is where we would have a listener for the API to push data
  // Or the API could push data into a SQL database and pull it from there (preferred method in my opinion)
  data() {
    return {
      // Mock Data
      announcements: [
        {
          id: 1,
          author: 'aperry',
          date: '2023-07-26',
          body: 'Welcome to our Announcement App!\n\nThis is the first announcement',
        },
        {
          id: 2,
          author: 'Jdoe 123',
          date: '2023-07-26',
          body: '',
        },
        {
          id: 3,
          author: 'Markdown Test 1',
          date: '',
          body: '## THIS IS BOLD ##',
        },
        {
          id: 4,
          author: 'Hyperlink Support',
          date: '1900-01-01 23:33:12',
          body: '[XKCD](https://xkcd.com)',
        },
        {
          id: 5,
          author: 'Markdown Test 2',
          date: '234-234-652',
          body: 'Markdown Test 2\n| col1 | col2 | col 3|\n|------|------|------|\n| inf1 | inf2 | inf3 |\n| inf1 | inf2 | inf3 | ',
        }
      ],
    };
  },
};
</script>