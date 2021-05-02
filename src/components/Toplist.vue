<template>
  <div id="toplist">
    <div class="header">
      <van-image :src="require('@/assets/hot_music_bg_2x.png')" />
    </div>
    <MusicList requestName="getLatstMusicList" />
  </div>
</template>
<script>
import MusicList from "./MusicList.vue";
export default {
  name: "Toplist",
  components: { MusicList },
};
</script>
<style lang="less" scoped>
#toplist {
  margin-top: 5px;
}
</style>
