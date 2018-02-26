/* eslint no-shadow: ["error", { "allow": ["state"] }] */

import Vue from 'vue';
import Vuex from 'vuex';
import FixedTermProduct from '../lib/api/resources/fixed-term-product';

Vue.use(Vuex);

const state = {
  products: [],
  isFetching: false,
};

const getters = {
  productsCount: state => state.products.length,
};

const mutations = {
  updateProducts(state, products) {
    state.products = products;
  },
  startFetching(state) {
    state.isFetching = true;
  },
  stopFetching(state) {
    state.isFetching = false;
  },
};

const actions = {
  fetchProducts({ commit }) {
    const fixedTermProduct = new FixedTermProduct({ countryCode: 'de' });
    commit('startFetching');
    return fixedTermProduct.getAll()
      .then(([...products]) => {
        commit('updateProducts', products);
      })
      .finally(() => {
        commit('stopFetching');
      });
  },
};

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
});
