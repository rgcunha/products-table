<template>
  <div class="product-row">
    <h1>Product Row: {{ product.id }}</h1>
  </div>
</template>

<script>
export default {
  name: 'ProductRow',
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
</style>
