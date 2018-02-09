<template>
  <div class="filterable-products-table">
    <SearchBar></SearchBar>
    <ProductsTable :products="filteredProducts"></ProductsTable>
  </div>
</template>

<script>
import SearchBar from './SearchBar';
import ProductsTable from './ProductsTable';
import products from '../../test/fixtures/products.json';

export default {
  name: 'FilterableProductsTable',
  components: { SearchBar, ProductsTable },
  data() {
    return {
      filteredProducts: products.data,
    };
  },
};
</script>

<style scoped>
</style>
