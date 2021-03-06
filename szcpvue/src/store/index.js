import Vue from 'vue'
import Vuex from 'vuex'

import user from './module/user'
import app from './module/app'
import sysicon from './module/sysicon'
import sysmenu from './module/sysmenu'
import sysorgan from './module/sysorgan'
import sysrole from './module/sysrole'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //
  },
  mutations: {
    //
  },
  actions: {
    //
  },
  modules: {
    user,
    app,
    sysicon,
    sysmenu,
    sysorgan,
    sysrole
  }
})
