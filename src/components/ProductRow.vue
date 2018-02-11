<template>
  <tr class="product-row">
    <td class="product-row__interest_rate">
      {{ interestRateText }}
    </td>
    <td class="product-row__maturity">
      {{ product.attributes.maturity_text }}
    </td>
    <td class="product-row__bank">
      {{ product.attributes.bank_name }}
    </td>
    <td class="product-row__country">
      {{ product.attributes.bank_country }}
    </td>
    <td class="product-row__interest-income">
      {{ interestIncome }}
    </td>
    <td class="product-row__cta">
      <Button :text="buttonText" :url="buttonUrl"></Button>
    </td>
  </tr>
</template>

<script>
import Button from './Button';

export default {
  name: 'ProductRow',
  components: { Button },
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  computed: {
    interestRateText() {
      return `${this.product.attributes.interest_rate}%`;
    },
    interestIncome() {
      return 888;
    },
    buttonText() {
      return 'Jetz anlegen';
    },
    buttonUrl() {
      const baseUrl = 'https://banking.savedo.de/#!/applications/fixed-term-deposits/new/personal-details';
      const investmentAmount = 3000;
      const params = {
        product: `product=${this.product.id}`,
        amount: `amount=${investmentAmount}`,
      };
      return `${baseUrl}?${params.product}&${params.amount}`;
    },
  },
};
</script>

<style scoped>
td {
  padding: 10px 0;
}
</style>
