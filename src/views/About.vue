<template>
  <div class="about">
    <Header />
    about
    <Tabbar />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Tabbar from "../components/Tabbar.vue";
export default {
  name: "About",
  components: {
    Tabbar,
    Header,
  },
};
</script>
