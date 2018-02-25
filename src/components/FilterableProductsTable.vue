<template>
  <div class="filterable-products-table">
    <SearchBar @searchParamsUpdated="filterProducts($event)" />
    <ProductsTable :products="filteredProducts" />
  </div>
</template>

<script>
import SearchBar from './SearchBar';
import ProductsTable from './ProductsTable';
import FixedTermProduct from '../lib/api/resources/fixed-term-product';

export default {
  name: 'FilterableProductsTable',
  components: { SearchBar, ProductsTable },
  data() {
    return {
      products: [],
      filteredProducts: [],
    };
  },
  created() {
    const fixedTermProduct = new FixedTermProduct({ countryCode: 'de' });
    fixedTermProduct.getAll()
      .then(([...products]) => {
        this.products = products;
        this.filteredProducts = products;
      });
  },
  methods: {
    filterProducts({ investmentAmount, maturity }) {
      const isEligibleForMaturity = ((product) => {
        if (!maturity) { return true; }
        return product.term_in_months === maturity;
      });
      const isEligibleForInvestmentAmount = (product =>
        +investmentAmount >= +product.minimum_amount &&
        +investmentAmount <= +product.maximum_amount
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
