import Vue from 'vue'

enum PrivacyStorageItems {
  Core = 'Core',
  Soundcloud = 'Soundcloud'
}

enum PrivacyStorageKeys {
  Core = 'privacy-settings-core',
  Soundcloud = 'privacy-settings-soundcloud'
}

enum PrivacyStorageDefault {
  Core = '1',
  Soundcloud = '0'
}

const getBooleanFromString = (string: string) => Boolean(Number(string))

const getPrivacyStorageValue = (name: PrivacyStorageItems): boolean => {
  const privacyStorageValue = process.client && window.localStorage.getItem(PrivacyStorageKeys[name])
  return getBooleanFromString(privacyStorageValue || PrivacyStorageDefault[name])
}

const setPrivacyStorageValue = (name: PrivacyStorageItems, value: boolean): void => {
  window.localStorage.setItem(PrivacyStorageKeys[name], String(Number(value)))
}

export default Vue.extend({
  computed: {
    'privacy/storage/getCore': () => getBooleanFromString(PrivacyStorageDefault[PrivacyStorageItems.Core]),
    'privacy/storage/getSoundcloud': () => getPrivacyStorageValue(PrivacyStorageItems.Soundcloud)
  },
  methods: {
    'privacy/storage/setSoundcloud': (value: boolean) => setPrivacyStorageValue(PrivacyStorageItems.Soundcloud, value)
  }
})
