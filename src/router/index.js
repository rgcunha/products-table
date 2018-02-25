import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import FilterableProductsTable from '@/components/FilterableProductsTable';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Products',
      component: FilterableProductsTable,
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld,
    },
  ],
});
