<template>
  <div class="filterable-products-table">
    <SearchBar @searchParamsUpdated="filterProducts($event)" />
    <ProductsTable :products="filteredProducts" />
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
      products: products.data,
      filteredProducts: products.data,
    };
  },
  methods: {
    filterProducts({ investmentAmount, maturity }) {
      const isEligibleForMaturity = ((product) => {
        if (!maturity) { return true; }
        return product.attributes.term_in_months === maturity;
      });
      const isEligibleForInvestmentAmount = (product =>
        +investmentAmount >= +product.attributes.minimum_amount &&
        +investmentAmount <= +product.attributes.maximum_amount
      );

      this.filteredProducts = this.products
        .filter(isEligibleForInvestmentAmount)
        .filter(isEligibleForMaturity);
    },
  },
};
</script>

<style scoped>
</style>
