import { getPrivacyStorageValue, PrivacyStorageItems, setPrivacyStorageValue } from '@/utils/privacy.storage'

describe('Utils / Privacy / Storage', () => {
  describe('getPrivacyStorageValue', () => {
    it('shall return default value for PrivacyStorageItems.Core', () => {
      expect(getPrivacyStorageValue(PrivacyStorageItems.Core)).toBe(true)
    })

    it('shall return set value for PrivacyStorageItems.Soundcloud', () => {
      process.client = true
      Storage.prototype.getItem = jest.fn(() => '1')
      expect(getPrivacyStorageValue(PrivacyStorageItems.Soundcloud)).toBe(true)
    })
  })

  describe('setPrivacyStorageValue', () => {
    it('shall set value for PrivacyStorageItems.Soundcloud', () => {
      const spy = jest.spyOn(Storage.prototype, 'setItem')
      setPrivacyStorageValue(PrivacyStorageItems.Soundcloud, true)
      expect(spy).toBeCalledWith('privacy-settings-soundcloud', '1')
    })
  })
})
