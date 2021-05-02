<template>
  <div id="musicList">
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <van-cell
        v-for="item in musicList"
        :key="`list-${item.id}`"
        :title="
          item.songName.length < 40
            ? item.songName
            : item.songName.slice(0, 40) + '...'
        "
        :label="
          `${item.artists} - ${item.alName}`.length < 40
            ? `${item.artists} - ${item.alName}`
            : `${item.artists} - ${item.alName}`.slice(0, 40) + '...'
        "
        :to="`/player?id=${item.id}`"
        center
        clickable
      >
        <template #right-icon>
          <van-icon name="play-circle-o" size="22" />
        </template>
      </van-cell>
    </van-list>
  </div>
</template>

<script>
export default {
  name: "MusicList",
  props: ["requestName", "toggleFinished"],
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
      musicList: [],
    };
  },
  mounted() {},
  methods: {
    async onLoad() {
      const _this = this;
      // eval()使用存在安全性问题，需要想办法替换
      this.musicList = await eval(`_this.$ajax.${_this.requestName}()`);
      this.loading = false;
      this.finished = true;
    },
  },
};
</script>

<style scoped lang="less">
.van-cell__label {
  white-space: nowrap;
}
</style>
