import throttle from 'lodash/throttle'
import Vue from 'vue'

export default Vue.extend({
  name: 'PoemsHoroskop',
  data () {
    return {
      activeState: 1,
      showHoroscope: false,
      showReset: false
    }
  },
  computed: {
    zodiacs (): string[] {
      return [
        'Baran',
        'Byk',
        'Bliźnięta',
        'Rak',
        'Lew',
        'Panna',
        'Waga',
        'Skorpion',
        'Strzelec',
        'Koziorożec',
        'Wodnik',
        'Ryby'
      ]
    },
    spells (): string[] {
      return [
        'Dotykam duszy…',
        'Kontempluję Feng shui…',
        'Otwieram czakry…',
        'Wypłaszczam Ziemię…',
        'Szukam Yin i Yang…',
        'Rozciągam orbity…',
        'Magnesuje pola…'
      ]
    }
  },
  created () {
    this.onZodiacClick = throttle(this.onZodiacClick, 14000)
  },
  methods: {
    onZodiacClick () {
      this.activeState = 2
      setTimeout(() => (this.activeState = 3), 9000)
      setTimeout(() => (this.showHoroscope = true), 12000)
      setTimeout(() => (this.showReset = true), 14000)
    },
    onResetClick () {
      this.activeState = 1
      this.showHoroscope = false
      this.showReset = false
    },
    getOpacity (condition: boolean) {
      return {
        opacity: Number(condition).toString()
      }
    }
  }
})
