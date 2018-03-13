/* eslint no-shadow: ["error", { "allow": ["state"] }] */
import Vue from 'vue';
import Vuex from 'vuex';
import { UPDATE_PRODUCTS, START_FETCHING, STOP_FETCHING } from './mutation-types';
import FixedTermProduct from '../lib/api/resources/fixed-term-product';

Vue.use(Vuex);

const state = {
  products: [],
  isFetching: false,
};

const getters = {
  productsCount: state => state.products.length,
  maturityOptions: (state) => {
    const maturityOptions = {};
    state.products.forEach((product) => {
      maturityOptions[product.term_in_months] = product.maturity_text;
    });
    maturityOptions[''] = 'Alle Angebote';
    return maturityOptions;
  },
};

const mutations = {
  [UPDATE_PRODUCTS](state, products) {
    state.products = products;
  },
  [START_FETCHING](state) {
    state.isFetching = true;
  },
  [STOP_FETCHING](state) {
    state.isFetching = false;
  },
};

const actions = {
  fetchProducts({ commit }) {
    const fixedTermProduct = new FixedTermProduct({ countryCode: 'de' });
    commit('START_FETCHING');
    return fixedTermProduct.getAll()
      .then(([...products]) => {
        commit('UPDATE_PRODUCTS', products);
      })
      .finally(() => {
        commit('STOP_FETCHING');
      });
  },
};

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
});
