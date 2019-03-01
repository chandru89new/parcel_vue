// we import Vue to get started
import Vue from 'vue'

// we import vue-router
import Router from 'vue-router'

// we import the components that will be used in different routes
import Home from './home.vue'
// import About from './about.vue'

// code-splitting chunk
const About = () => import('./about.vue')

// we make sure Vue "uses" the vue-router (imported as 'Router')
Vue.use(Router)

// we define our routes and give them some names here.
// we also mention what components get rendered on what routes
const routes = [
  {
    path: '/',
    name: 'default',
    component: Home
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  }
]

// finally we export this Router object (which will be used by index.js)
export default new Router({
  mode: 'history',
  routes
})