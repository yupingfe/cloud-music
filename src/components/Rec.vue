<template>
  <div id="rec">
    <!-- 轮播图 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item
        v-for="banner in banners"
        :key="`banner-${banner.bannerId}`"
      >
        <!-- 懒加载图片存在变大的问题 -->
        <!-- <img v-lazy="banner.pic" /> -->
        <img :src="banner.pic" alt="" />
      </van-swipe-item>
    </van-swipe>
    <!-- 推荐歌单 -->
    <van-cell-group title="推荐歌单">
      <van-grid :column-num="3" :border="false">
        <van-grid-item
          v-for="item in recMusicList"
          :key="item.id"
          :to="`/playlist?id=${item.id}`"
        >
          <van-image show-loading :src="item.picUrl" />
          <span class="rec-music-list-name"
            >{{ item.name.slice(0, 18) }}...</span
          >
        </van-grid-item>
      </van-grid>
    </van-cell-group>
    <!-- 最新音乐 -->
    <van-cell-group title="最新音乐">
      <PlayList requestName="getLatstMusicList" />
    </van-cell-group>
  </div>
</template>

<script>
import PlayList from "./PlayList.vue";
export default {
  name: "Rec",
  data() {
    return {
      banners: "",
      recMusicList: "",
      LatstMusicList: ["hello"],
    };
  },
  async created() {
    // 可以同时触发的await请求
    const getBannersPromise = this.$ajax.getBanners();
    const getRecMusicListPromise = this.$ajax.getRecMusicList();
    this.banners = await getBannersPromise;
    this.recMusicList = await getRecMusicListPromise;
  },
  components: {
    PlayList,
  },
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
  .rec-music-list-name {
    font-size: 12px;
  }
}
</style>
