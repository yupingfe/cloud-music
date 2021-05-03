<template>
  <div id="header">
    <van-image width="150" :src="require('@/assets/logo-big.png')" />
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="less" scoped>
#header {
  height: 84px;
  background: #d43c33;
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
