<template>
  <div class="my">
    <Header />
    my
    <Tabbar />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Tabbar from "../components/Tabbar.vue";
export default {
  name: "My",
  components: {
    Tabbar,
    Header,
  },
};
</script>
