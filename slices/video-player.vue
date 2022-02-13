<template>
  <div class="main">
    <video autoplay muted loop>
      <source :src="primary.video.url" type="video/mp4">
    </video>
    <div class="box">
      <RichText :content="primary.text" />
    </div>
  </div>
</template>

<script>
import slice from '@/mixins/slice'
import components from '@/components'

export default {
  name: 'Video',
  components,
  mixins: [slice],
}
</script>

<style lang="scss" scoped>
@import '@/style/_imports';

video {
  width: 100%;
}

.main {
  position: relative;
}

</style>
