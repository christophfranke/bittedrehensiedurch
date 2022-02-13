<template>
  <footer>
  </footer>
</template>

<script>
import components from '@/components'
import linkResolver from '@/util/linkResolver'

export default {
  name: 'Footer',
  components,

  computed: {
    slices () {
      return this.$store.getters.footer.data.body.map(slice => ({
        ...slice.primary,
        type: slice.slice_type,
        href: slice.slice_type === 'menu_entry' ?
          linkResolver(slice.primary.page) :
          slice.primary.link.url
      }))
    },
    address () {
      return this.$store.getters.footer.data.adresse
    },
    signupAction () {
      return 'https://flugwerk.us18.list-manage.com/subscribe/post?u=f509a06c4f035daa85627f028&amp;id=1a4837c332'
    }
  },

  methods: {
    linkName (slice) {
      return slice.name.length > 0 ? slice.name[0].text :
        this.$store.getters.page(slice.page.uid).title[0].text
    },
    classNames (icon) {
      return {
        facebook: ['fab', 'fa-facebook-f'],
        instagram: ['fab', 'fa-instagram'],
      }[icon.toLowerCase()]
    }
  }
}
</script>
