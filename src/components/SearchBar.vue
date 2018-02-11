<template>
  <div class="search-bar">
    <input type="text" v-model="searchParams.investmentAmount" @blur="publishSearchParamsUpdated"/>
    <select v-model="searchParams.maturity" @change="publishSearchParamsUpdated">
      <option v-for="option in maturityOptions" :value="option.value" :key="option.value">
        {{ option.text }}
      </option>
    </select>
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

<style scoped>
</style>
