<template>
  <tr class='product-row'>
    <td class='product-row__interest_rate'>
      <span class='interest-rate'>{{ product.interest_rate }}</span>
    </td>
    <td class='product-row__maturity'>
      {{ product.maturity_text }}
    </td>
    <td class='product-row__bank'>
      <img :src='bankLogo' :alt='product.bank_name' />
    </td>
    <td class='product-row__country'>
      {{ product.bank_country }}
    </td>
    <td class='product-row__interest-income'>
      <span class='interest-income'>{{ interestIncome }}</span>
    </td>
    <td class='product-row__cta'>
      <Button text='Jetzt anlegen' :url='buttonUrl'></Button>
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
    bankLogo() {
      // eslint-disable-next-line
      return require(`@/assets/images/banks/${this.product.bank_shortname}.svg`);
    },
    interestIncome() {
      // TODO: Calculate interest income dynamically
      return '3,000';
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

<style lang='scss' scoped>
@import '../variables';

tr { background-color: $primary-white; }
td { padding: 15px; }

.interest-rate {
  font-size: 28px;
  font-weight: 500;
  &:after {
    display: inline;
    font-size: 20px;
    margin-left: 4px;
    content: '%';
  }
}

.interest-income {
  font-size: 22px;
  font-weight: 500;
  &:after {
    display: inline;
    margin-left: 4px;
    content: '€';
  }
}

.product-row__bank {
  img {
    width: 105px;
    height: 60px;
  }
}
</style>
