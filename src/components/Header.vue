<template>
  <div id="header">
    <img src="@/assets/logo-big.png" alt="logo" class="logo" />
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
  .logo {
    width: 40%;
  }
}
</style>
