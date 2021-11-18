import Vue from 'vue'

const firstTimeStorageName = 'poem-first-time-visits'
const firstTimeMaxVisits = 3
const getFirstTimeVisitsCount = (): number => {
  const firstTimeStorageValue = window.localStorage.getItem(firstTimeStorageName)
  return Number(firstTimeStorageValue || '0')
}

export default Vue.extend({
  computed: {
    'poem/firstTime/shallShow' (): boolean {
      if (process.client) {
        const firstTimeVisitsCount = getFirstTimeVisitsCount()
        return firstTimeVisitsCount < firstTimeMaxVisits
      }

      return false
    }
  },
  methods: {
    'poem/firstTime/countVisit' (): void {
      const firstTimeVisitsCount = getFirstTimeVisitsCount()
      window.localStorage.setItem(firstTimeStorageName, String(firstTimeVisitsCount + 1))
    },
    'poem/firstTime/hideSection' (): void {
      window.localStorage.setItem(firstTimeStorageName, String(firstTimeMaxVisits))
    }
  }
})
