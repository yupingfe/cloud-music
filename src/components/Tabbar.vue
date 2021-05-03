<template>
  <div id="tabbar">
    <van-tabbar v-model="active" active-color="#ee0a24" placeholder>
      <van-tabbar-item name="home" icon="home-o" replace to="/home"
        >首页</van-tabbar-item
      >
      <van-tabbar-item name="my" icon="friends-o" replace to="/my"
        >我的</van-tabbar-item
      >
      <van-tabbar-item name="about" icon="ellipsis" replace to="/about"
        >关于</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "Tabbar",
  components: {},
  data() {
    return {
      active: "home",
    };
  },
  created() {
    const currentPath = this.$route.path.slice(1);
    this.active = currentPath;
  },
};
</script>
<style lang="less" scoped></style>
