import About from './about.vue'
import { shallowMount } from '@vue/test-utils'

// existing code
describe('About.vue', () => {
  test('Component is loaded', () => {
    const wrapper = shallowMount(About)
    expect(wrapper.isVueInstance()).toBe(true)
  })
})