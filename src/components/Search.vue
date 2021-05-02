<template>
  <div id="search">
    <!-- 在 van-search 外层增加 form 标签，且 action 不为空，即可在 iOS 输入法中显示搜索按钮。 -->
    <form action="/">
      <van-search
        v-model="value"
        placeholder="搜索歌曲、歌手、专辑"
        @search="onSearch"
        @input="onInput"
        @focus="onFocus"
        shape="round"
        autofocus
      />
    </form>
    <!-- 热门搜索 -->
    <div v-show="!value">
      <van-cell-group title="热门搜索">
        <van-tag
          v-for="(item, index) in hotSearch"
          :key="`tags-${index}`"
          class="hot-tag"
          type="default"
          size="large"
          @click="clickTag(item)"
          plain
          round
          >{{ item }}</van-tag
        >
      </van-cell-group>
    </div>
    <!-- 搜索建议 -->
    <div v-show="value && showSuggest">
      <van-cell
        v-for="(item, index) in suggest"
        :title="item.keyword"
        :key="`item+${index}`"
        @click="clickSuggest(item.keyword)"
        size="large"
      />
    </div>
    <!-- 搜索结果 -->
    <MusicList
      v-if="value && showSearchResult"
      :requestName="`getSearchRes`"
      :searchVal="value"
    />
  </div>
</template>

<script>
import MusicList from "./MusicList.vue";
export default {
  name: "Search",
  components: {
    MusicList,
  },
  data() {
    return {
      value: "",
      hotSearch: [], // 🔥搜
      suggest: [], // 搜索建议
      showSuggest: false,
      showSearchResult: false,
    };
  },
  created() {
    this.getHotSearch();
  },
  methods: {
    onSearch(val) {
      this.showSuggest = false;
      this.showSearchResult = true;
    },
    onInput(val) {
      val ? this.getSuggest(val) : "";
    },
    onFocus() {
      this.showSuggest = true;
      this.showSearchResult = false;
    },
    clickTag(val) {
      this.value = val;
      this.showSuggest = false;
      this.showSearchResult = true;
    },
    async getHotSearch() {
      this.hotSearch = await this.$ajax.getHotSearch();
    },
    async getSuggest(value) {
      this.suggest = await this.$ajax.getSuggest(value);
    },
    // async getSearchRes(value) {
    //   const searchRes = await this.$ajax.getSearchRes(value);
    // },
    clickSuggest(val) {
      console.log(val);
      this.value = val;
      this.showSuggest = false;
      this.showSearchResult = true;
    },
  },
};
</script>
<style lang="less" scoped>
van-cell-group {
  display: flex;
  flex-wrap: wrap;
}
.hot-tag {
  margin: 5px;
}
</style>
