export enum PrivacyStorageItems {
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

export const getPrivacyStorageValue = (name: PrivacyStorageItems): boolean => {
  const privacyStorageValue = process.client && window.localStorage.getItem(PrivacyStorageKeys[name])
  return Boolean(Number(privacyStorageValue || PrivacyStorageDefault[name]))
}

export const setPrivacyStorageValue = (name: PrivacyStorageItems, value: boolean): void => {
  window.localStorage.setItem(PrivacyStorageKeys[name], String(Number(value)))
}
