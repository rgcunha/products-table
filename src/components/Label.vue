<template>
  <label>
    <slot>
      Label Name
    </slot>
  </label>
</template>

<script>
export default {
  name: 'Label',
};
</script>

<style lang='scss' scoped>
@import '../variables';

label {
  color: $palette-ash-grey-3;
  margin-right: 30px;
}
</style>
