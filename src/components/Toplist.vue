<template>
  <div id="toplist">
    <div class="header">
      <van-image :src="require('@/assets/hot_music_bg_2x.png')" />
    </div>
    <PlayList requestName="getLatstMusicList" />
  </div>
</template>
<script>
import PlayList from "./PlayList.vue";
export default {
  name: "Toplist",
  components: { PlayList },
};
</script>
<style lang="less" scoped>
#toplist {
  margin-top: 5px;
}
</style>
