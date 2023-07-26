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
          date: '2023-08-23',
          body: '',
        },
        {
          id: 3,
          author: '$3264$@_1~!',
          date: '',
          body: 'lorem impsum',
        },
        {
          id: 4,
          author: 'number4',
          date: '1900-01-01 23:33:12',
          body: 'set dolar',
        },
        {
          id: 5,
          author: 'Sasquatch',
          date: '234-234-652',
          body: '[204th9ruaegnpsdfojgn204nrl;asdmkf',
        }
      ],
    };
  },
};
</script>