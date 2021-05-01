<template>
  <div id="rec">
    <!-- 轮播图 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item
        v-for="banner in banners"
        :key="`banner-${banner.bannerId}`"
      >
        <!-- <img :src="banner.pic" /> -->
        <img v-lazy="banner.pic" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  name: "Rec",
  data() {
    return {
      banners: "",
    };
  },
  async created() {
    this.banners = await this.$ajax.getBanners();
  },
  components: {},
};
</script>
<style lang="less" scoped>
#rec {
  margin-top: 5px;
  .my-swipe {
    margin: 0 10px;
    // border-radius: 10px;
    overflow: hidden;
    // border: 1px solid red;
  }
  .my-swipe .van-swipe-item {
    color: #fff;
    text-align: center;
    img {
      width: 100%;
      border-radius: 5px;
    }
  }
}
</style>
