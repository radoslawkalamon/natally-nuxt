import throttle from 'lodash/throttle'
import Vue from 'vue'

type PoemsPromocjaLGBTData = {
  activeImage: number;
  startAnimation: boolean;
  sliderInterval: number | NodeJS.Timeout;
}

const animationDuration = 2000

export default Vue.extend({
  name: 'PoemsPromocjaLGBT',
  data (): PoemsPromocjaLGBTData {
    return {
      activeImage: 0,
      startAnimation: false,
      sliderInterval: 0
    }
  },
  computed: {
    images (): Array<Record<string, string>> {
      const images = [
        {
          alt: 'Dwie uśmiechnięte kobiety w łazience. Jedna z nich wyciera ręcznikiem drugą.',
          '1x': require('./images/promocja-lgbt-1.1x.webp'),
          '2x': require('./images/promocja-lgbt-1.2x.webp')
        },
        {
          alt: 'Dwoje przytulających się, śmiejących się mężczyzn.',
          '1x': require('./images/promocja-lgbt-2.1x.webp'),
          '2x': require('./images/promocja-lgbt-2.2x.webp')
        },
        {
          alt: 'Dwie kobiety, ubrane w suknie ślubne. Jedna całuje czoło drugiej.',
          '1x': require('./images/promocja-lgbt-3.1x.webp'),
          '2x': require('./images/promocja-lgbt-3.2x.webp')
        },
        {
          alt: 'Dwoje mężczyzn, siedzących na trawie, śmiejących się i przytulających się',
          '1x': require('./images/promocja-lgbt-4.1x.webp'),
          '2x': require('./images/promocja-lgbt-4.2x.webp')
        }
      ]
      return images.map(image => ({
        alt: image.alt,
        srcset: `${image['1x']} 1x, ${image['2x']} 2x`,
        src: image['1x']
      }))
    },
    imagesCount (): number {
      return this.images.length
    },
    heartCount (): number {
      return 69
    },
    heartStyles (): Array<Record<string, string>> {
      return Array(this.heartCount).fill(null).map(_i => ({
        left: `${this.getRandomNumberBetween(0, 100)}%`,
        opacity: this.getRandomNumberBetween(0.6, 1),
        animationDuration: `${this.getRandomNumberBetween(1, animationDuration / 1000)}s`
      }))
    }
  },
  created (): void {
    this.buyClick = throttle(this.buyClick, animationDuration, { trailing: false })

    this.sliderInterval = setInterval(() => this.changeSlide(), 3000)
  },
  destroyed (): void {
    clearInterval(Number(this.sliderInterval))
  },
  methods: {
    changeSlide (): void {
      this.activeImage = (this.activeImage + 1) % this.imagesCount
    },
    getRandomNumberBetween (min: number, max: number): string {
      return ((Math.random() * (max - min)) + min).toString()
    },
    buyClick (): void {
      this.startAnimation = true
      setTimeout(() => (this.startAnimation = false), animationDuration)
    }
  }
})
