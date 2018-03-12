<template>
  <div class='filterable-products-table'>
    <SearchBar @searchParamsUpdated='filterProducts($event)' />
    <ProductsTable :products='filteredProducts' />
    <Loader v-if='isLoading'></Loader>
  </div>
</template>

<script>
import SearchBar from './SearchBar';
import ProductsTable from './ProductsTable';
import Loader from './Loader';
import FixedTermProduct from '../lib/api/resources/fixed-term-product';

export default {
  name: 'FilterableProductsTable',
  components: { SearchBar, ProductsTable, Loader },
  data() {
    return {
      products: [],
      filteredProducts: [],
      isLoading: false,
    };
  },
  created() {
    const fixedTermProduct = new FixedTermProduct({ countryCode: 'de' });
    this.isLoading = true;
    fixedTermProduct.getAll()
      .then(([...products]) => {
        this.products = products;
        this.filteredProducts = products;
      })
      .finally(() => {
        this.isLoading = false;
      });
  },
  methods: {
    filterProducts({ investmentAmount, maturity }) {
      const isEligibleForMaturity = ((product) => {
        if (!maturity) { return true; }
        return product.term_in_months === +maturity;
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

<style lang='scss' scoped>
.filterable-products-table {
  background-color: #F1F1F1;
  padding: 15px;
}
</style>
