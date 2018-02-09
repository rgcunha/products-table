<template>
  <div class="products-table">
    <h1>{{ title }}</h1>
    <h2>{{ countText }}</h2>
    <table>
      <ProductRow
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </table>
  </div>
</template>

<script>
import ProductRow from './ProductRow';

export default {
  components: { ProductRow },
  props: {
    products: {
      type: Array,
      required: true,
    },
    title: 'Products Table',
  },
  computed: {
    count() {
      return this.products.length;
    },
    countText() {
      return `We have ${this.count} offers available for you at the moment`;
    },
  },
};

</script>

<style scoped>
</style>
