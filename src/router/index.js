import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import TsStudy from './modules/ts-study/index'
import EssixStudy from './modules/essix-study/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ].concat(
    TsStudy,
    EssixStudy
  )
})
