<template>
  <div class='filterable-products-table'>
    <SearchBar @searchParamsUpdated='filterProducts($event)' />
    <ProductsTable :products='filteredProducts' />
    <Loader v-if='isFetching'></Loader>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import SearchBar from './SearchBar';
import ProductsTable from './ProductsTable';
import Loader from './Loader';

const DEFAULT_SEARCH_PARAMS = {
  investmentAmount: '30000',
  maturity: null,
};

export default {
  name: 'FilterableProductsTable',
  components: { SearchBar, ProductsTable, Loader },
  data() {
    return {
      filteredProducts: [],
    };
  },
  created() {
    this.fetchProducts()
      .then(() => {
        this.filterProducts(DEFAULT_SEARCH_PARAMS);
      });
  },
  methods: {
    ...mapActions([
      'fetchProducts',
    ]),
    filterProducts({ investmentAmount, maturity = null }) {
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
  computed: mapState({
    products: state => state.products,
    isFetching: state => state.isFetching,
  }),
};
</script>

<style lang='scss' scoped>
.filterable-products-table {
  background-color: #F1F1F1;
  padding: 15px;
}
</style>
