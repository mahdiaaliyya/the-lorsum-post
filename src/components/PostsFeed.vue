<template>
  <div class="posts-container">
    <router-link :to='`/post/${post.id}`' class="post-block" v-for="(post, idx) in postsWithAuthor" :key="idx">
      <div class="post-preview">
        <h2>{{ post.title }}</h2>
        <p>{{post.body.substr(0,40)}}...</p>
      </div>
      <div class="post-author">
        <div class="user-profile-round"/>
          <p class="author-name">{{ post.author }} </p>
      </div>
    </router-link>

  </div>

</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'PostsFeed',
  created() {
    this.getPosts(),
    this.getUsers()
  },
  methods: {
    ...mapActions([
        'getPosts',
        'getUsers'
    ])
  },
  computed: {
    ...mapGetters(['posts','users']),
    postsWithAuthor: function() {
      var postsAuthor = this.posts.map(post => ({ ...post,
        author : this.users.find(user => user.id == post.userId)?.name})
      );
      // postsAuthor =  [{title: "Wait!!!", name: "im noone", body:"ima boody", author:"i wrote this!"}];
      console.log("hey", postsAuthor)
      // return postsAuthor ? postsAuthor : [{title: "Wait!!!", name: "im noone", body:"ima boody", author:"i wrote this!"}];
      return postsAuthor;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.posts-container {
  text-decoration: none;
  padding: 2em;
  //columns: 4 416px;
  column-gap: 1rem;
  row-gap: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  .post-block {
    //width: 416px;
    color: #000000;
    width: 100%;
    max-width: 360px;
    padding: 24px;
    margin-right: 1rem;
    background-color: #f4f4f4;
    border-radius: 16px;
    text-align: left;
    height: fit-content;
      h2 {
        margin: 0 0 12px 0;
        font-weight: bold;
        font-size: 36px;
        text-transform: capitalize;
      }
  }

  a {
    text-decoration: none;
  }

}
.post-author {
  display: flex;
  align-items: center;
  .user-profile-round {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: black;
    margin-right: 12px;
  }
}

a {
  color: #42b983;
  text-decoration: none;
}
</style>
