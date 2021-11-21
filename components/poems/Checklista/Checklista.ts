import Vue from 'vue'

export default Vue.extend({
  name: 'PoemsChecklista',
  components: {
    ComponentsCheckbox: () => import(/* webpackChunkName: "components-checkbox" */'@/components/components/Checkbox/Checkbox.vue')
  }
})
