/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'

import SignUp from '@/components/SignUp'
import SignIn from '@/components/SignIn'
import City from '@/components/City'

import Weather from '@/components/Weather'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SignIn',
      component: SignIn
    },
    {
      path: '/SignUp',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/home',
      name: 'City',
      component: City
    },



    {
      path: '/weather/:cityname',
      name: 'Weather',
      component: Weather,
    },
    



  ]

})
