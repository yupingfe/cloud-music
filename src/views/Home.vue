<template>
  <div id="home">
    <Header />
    <van-tabs v-model="active">
      <van-tab title="推荐音乐"><Rec /></van-tab>
      <van-tab title="热歌榜"><Toplist /></van-tab>
      <van-tab title="搜索"><Search /></van-tab>
    </van-tabs>
    <Footer />
    <Tabbar />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Rec from "@/components/Rec.vue";
import Toplist from "@/components/Toplist.vue";
import Search from "@/components/Search.vue";
import Tabbar from '../components/Tabbar.vue';

export default {
  name: "Home",
  components: {
    Header,
    Footer,
    Rec,
    Toplist,
    Search,
    Tabbar
  },
  data() {
    return {
      active: 0
    }
  }
};
</script>
<style lang="less" scoped>
</style>