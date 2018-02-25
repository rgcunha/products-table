<template>
  <div class='loader'></div>
</template>

<script>
export default {
  name: 'Loader',
};
</script>

<style lang='scss' scoped>
@import '../variables';

.loader {
  margin: 30px auto;
  border: 8px solid $palette-grey-3;
  border-top: 8px solid $palette-blue-3;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}
</style>
