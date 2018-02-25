<template>
  <div class='search-bar'>
    <div class='form-group'>
      <label for='investmentAmount'>Anlagebetrag:</label>
      <input
        id='investmentAmount'
        type='text'
        v-model='searchParams.investmentAmount'
        @blur='publishSearchParamsUpdated'
      />
    </div>
    <div class='form-group'>
      <label for='maturity'>Laufzeit:</label>
      <select id='maturity' v-model='searchParams.maturity' @change='publishSearchParamsUpdated'>
        <option v-for='option in maturityOptions' :value='option.value' :key='option.value'>
          {{ option.text }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
const DEFAULT_SEARCH_PARAMS = {
  investmentAmount: '30000',
  maturity: null,
};

export default {
  name: 'SearchBar',
  data() {
    return {
      searchParams: { ...DEFAULT_SEARCH_PARAMS },
      maturityOptions: [
        { text: 'Alle Angebote', value: null },
        { text: '6 Monate', value: 6 },
        { text: '9 Monate', value: 9 },
        { text: '1 Jahr', value: 12 },
        { text: '2 Jahre', value: 24 },
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

input[type=text], select {
  background-color: $primary-white;
  border: 1px solid $palette-grey-3;
  border-radius: 3px;
  padding: 0 8px;
  font-size: 16px;
  font-family: 'Avenir';
}

input[type=text] {
  height: 36px;
}

select {
  height: 38px;
}

label {
  color: $palette-ash-grey-3;
  margin-right: 30px;
}
</style>
