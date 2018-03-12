<template>
  <select @input='publishInput' @change='publishChange' :value='value'>
    <option v-for='option in options' :value='option.value' :key='option.value'>
      {{ option.text }}
    </option>
  </select>
</template>

<script>
export default {
  name: 'Select',
  props: {
    value: {
      type: String,
      required: true,
      default: '',
    },
    options: {
      type: Array,
      required: true,
    },
  },
  methods: {
    /* this is the event v-model listens to */
    publishInput(event) {
      this.$emit('input', event.target.value);
    },
    publishChange() {
      this.$emit('change');
    },
  },
};
</script>

<style lang='scss' scoped>
@import '../variables';

select {
  height: 38px;
  background-color: $primary-white;
  border: 1px solid $palette-grey-3;
  border-radius: 3px;
  padding: 0 8px;
  font-size: 16px;
  font-family: 'Avenir';
}
</style>
