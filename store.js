// importing Vue and Vuex
import Vue from 'vue'
import Vuex from 'vuex'

// making sure Vue "uses" Vuex
Vue.use(Vuex)

// setting up an initial state with a variable in it
const state = {
  stateIsActive: 'Yes'
}

// finally exporting this all
export default new Vuex.Store({
  state
})