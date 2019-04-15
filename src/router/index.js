import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import ProductDetails from '@/components/ProductDetails'
import Login from '@/components/Login'
import Register from '@/components/Register'

import UserCenter from '@/components/UserCenter'
import PriceReduced from '@/components/PriceReduced'
import UserCenterHome from '@/components/UserCenterHome'
import ShoppingCart from '@/components/ShoppingCart'
import MyOrder2 from '@/components/MyOrder2'
import MyFocus from '@/components/MyFocus'
import DiscountCoupon from '@/components/DiscountCoupon'
import MyWallet from '@/components/MyWallet'
import MyMessage from '@/components/MyMessage'
import AfterSale from '@/components/AfterSale'


Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/product-details',
      name: 'ProductDetails',
      component: ProductDetails,
      
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/user-center',
      name: 'UserCenter',
      component: UserCenter,
      // redirect: ''
      children: [
	    {
	    	path: '',
	    	name: 'UserCenterHome',
	    	component: UserCenterHome,

	    },
	    {
	    	path: 'price-reduced',
	    	name: 'PriceReduced',
	    	component: PriceReduced,
	    },
      	{
      		path: 'shooping-cart',
      		name: 'ShoppingCart',
      		component: ShoppingCart,
      	},
      	{
      		path: 'my-order2',
      		name: 'MyOrder2',
      		component: MyOrder2,
      	},
      	{
      		path: 'my-focus',
      		name: 'MyFocus',
      		component: MyFocus,
      	},
      	{
      		path: 'my-wallet',
      		name: 'MyWallet',
      		component: MyWallet,
      	},
      	{
      		path: 'my-message',
      		name: 'MyMessage',
      		component: MyMessage,
      	},
      	{
      		path: 'after-sale',
      		name: 'AfterSale',
      		component: AfterSale,
      	},
      ],
    },
  ]
})
