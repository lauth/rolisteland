import Vue from 'vue'
import Router from 'vue-router'
import CharacterSheet from '@/components/CharacterSheet'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'CharacterSheet',
      component: CharacterSheet
    }
  ]
})
