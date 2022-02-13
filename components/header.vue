<template>
  <header>
  </header>
</template>

<script>
export default {
  name: 'Header',
  components: {
    PrismicImage: () => import('./prismic-image.vue')
  },

  data () {
    return {
      isMobileMenuOpen: false
    }
  },

  watch:{
    $route () {
        this.isMobileMenuOpen = false
    }
  },

  computed: {
    header () {
      return this.$store.getters.header
    },
    title () {
      return this.header && this.header.data.title[0].text
    },
    firstLevelNavItems () {
      return this.header && this.header.data.body
        .filter(slice => slice.slice_type === 'menu')
        .map(slice => ({
          name: this.name(slice.primary),
          href: this.href(slice.primary),
          submenu: this.secondLevelNavItems(slice)
        }))
    },
    socialMediaNavItems () {
      return this.header && this.header.data.body
        .filter(slice => slice.slice_type === 'social_media_item')
        .map(slice => ({
          icon: this.classNames(slice.primary.icon),
          href: slice.primary.link.url
        }))
    }
  },

  methods: {
    secondLevelNavItems(slice) {
      return slice.items.filter(item => item.page || item.name.length > 0)
        .map(item => ({
          name: this.name(item),
          href: this.href(item)
        }))
    },
    name(item) {
      return (item.name[0] && item.name[0].text) || this.$store.getters.page(item.page.uid).title[0].text
    },
    href(item) {
      return (item.page && item.page.uid && `/${item.page.uid}`)
    },
    classNames(icon) {
      return {
        facebook: ['fab', 'fa-facebook-f'],
        instagram: ['fab', 'fa-instagram']
      }[icon.toLowerCase()]
    },
    toggleMobileMenu () {
      this.isMobileMenuOpen = !this.isMobileMenuOpen
    }
  }
}
</script>
