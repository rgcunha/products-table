<template>
  <input
    type='text'
    @input='publishInput'
    @blur='publishBlur'
    :value='value'
  />
</template>

<script>
export default {
  name: 'InputText',
  props: {
    value: {
      type: String,
      required: true,
      default: '',
    },
  },
  methods: {
    /* this is the event v-model listens to */
    publishInput(event) {
      this.$emit('input', event.target.value);
    },
    publishBlur() {
      this.$emit('blur');
    },
  },
};
</script>

<style lang='scss' scoped>
@import '../variables';
input[type=text] {
  height: 36px;
  background-color: $primary-white;
  border: 1px solid $palette-grey-3;
  border-radius: 3px;
  padding: 0 8px;
  font-size: 16px;
  font-family: 'Avenir';
}
</style>
