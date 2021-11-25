import Vue from 'vue'

export default Vue.extend({
  name: 'PoemsChecklista',
  computed: {
    checkboxes () {
      return [
        ['Byle by być', 'byle-by-byc', true],
        ['Byle by zaliczyć', 'byle-by-zaliczyc', false],
        ['Punkt po punkcie', 'punkt-po-punkcie', false],
        ['Życie', 'zycie', false]
      ]
    }
  }
})
