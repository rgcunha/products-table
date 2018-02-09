import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import FilterableProductsTable from '@/components/FilterableProductsTable';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/products',
      name: 'Products',
      component: FilterableProductsTable,
    },
  ],
});
