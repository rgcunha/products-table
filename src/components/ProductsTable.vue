<template>
  <div class='products-table'>
    <span>{{ countText }}</span>
    <table>
      <thead>
        <tr>
          <th v-for='header in headers' :key='header'>
            {{ header }}
          </th>
        </tr>
      </thead>
      <tbody>
        <ProductRow
          v-for='product in products'
          :key='product.id'
          :product='product'
        />
      </tbody>
    </table>
  </div>
</template>

<script>
import ProductRow from './ProductRow';

export default {
  components: { ProductRow },
  data() {
    return {
      headers: ['Zins p.a.', 'Laufzeit', 'Bank', 'Land', 'Eff. Zinsertrag', ''],
    };
  },
  props: {
    products: {
      type: Array,
      required: true,
    },
  },
  computed: {
    count() {
      return this.products.length;
    },
    countText() {
      return `${this.count} Angebote zu Ihrer Suche`;
    },
  },
};

</script>

<style lang='scss' scoped>
@import '../variables';

.products-table {
  margin: 0 30px;
}
table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 30px;
}
thead {
  background-color: $palette-grey-1;
}
th {
  padding: 15px;
  font-weight: 400;
  color: $palette-ash-grey-4;
}

</style>
