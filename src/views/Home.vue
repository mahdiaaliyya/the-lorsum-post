<template>
  <div class="home">
    <PostsFeed/>
  </div>
</template>

<script>
// @ is an alias to /src
import PostsFeed from '@/components/PostsFeed.vue'

export default {
  name: 'Home',
  components: {
    PostsFeed
  }
}
</script>
