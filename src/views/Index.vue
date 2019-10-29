<template>
  <div>
    <Header></Header>
    <Sidebar/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue';
import Sidebar from '@/components/Sidebar.vue';

export default {
  name: "index",
  components: {
    Header, Sidebar
  }
};
</script>
