<template>
  <div class='search-bar'>
    <div class='form-group'>
      <Label for='investmentAmount'>Anlagebetrag:</Label>
      <InputText
        id='investmentAmount'
        v-model='searchParams.investmentAmount'
        @blur='publishSearchParamsUpdated'
      />
    </div>
    <div class='form-group'>
      <Label for='maturity'>Laufzeit:</Label>
      <Select
        id='maturity'
        v-model='searchParams.maturity'
        @change='publishSearchParamsUpdated'
        :options='maturityOptions'
      />
    </div>
  </div>
</template>

<script>
import InputText from './InputText';
import Select from './Select';
import Label from './Label';

const DEFAULT_SEARCH_PARAMS = {
  investmentAmount: '30000',
  maturity: '',
};

export default {
  components: { InputText, Select, Label },
  name: 'SearchBar',
  data() {
    return {
      searchParams: { ...DEFAULT_SEARCH_PARAMS },
      maturityOptions: [
        { text: 'Alle Angebote', value: '' },
        { text: '6 Monate', value: '6' },
        { text: '9 Monate', value: '9' },
        { text: '1 Jahr', value: '12' },
        { text: '2 Jahre', value: '24' },
      ],
    };
  },
  methods: {
    publishSearchParamsUpdated() {
      this.$emit('searchParamsUpdated', this.searchParams);
    },
  },
};
</script>

<style lang='scss' scoped>
@import '../variables';

.search-bar {
  margin: 30px;
  padding: 30px 0;
  border: 1px solid $palette-grey-3;
  background-color: $primary-white;
}
.form-group {
  display: inline-block;
  width: 40%;
}
</style>
