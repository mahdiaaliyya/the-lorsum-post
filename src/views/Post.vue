<template>
  <div class="post">
    <section class="post-content">
      <div class="post-box">
        <div class="post-header">
          <h2>{{ post.title }}</h2>
          <div class="post-author">
            <div class="user-profile-round"/>
            <p class="author-name">{{ authorName }}</p>
          </div>
        </div>
        <div class="post-body">
          <p>{{ post.body }}</p>
        </div>
      </div>
    </section>
    <section class="comment">
      <h2>Comments</h2>
      <div class="comment-container" v-for="(comment) in comments" :key="comment.id">
        <div class="comment-box">
          <div class="comment-author">
            <p><b>{{ comment.name }}</b></p>
            <p>{{ comment.email }}</p>
          </div>
          <p class="comment-text">
            {{ comment.body }}
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Post',
  created() {
    this.getPost({id: this.id})
    this.getComments({id: this.id});
    this.getUsers();
  },
  methods: {
    ...mapActions([
      'getPost',
      'getComments',
      'getUsers'
    ])
  },
  computed: {
    ...mapGetters(['post', 'comments', 'users']),
    id: function() {
      return this.$route.params.post_id;
    },
    authorName: function() {
      var author = this.users.find(user => user.id == this.post.userId)?.name;
      console.log("hi", author)
      return author;
    }
    // func(){
    //   posts.map(post => post.username = users.find(user => user.id == post.userId).name)
    // }

    // author_name: function() {
    //   return get
    // }
  }
}
</script>

<style scoped lang="scss">

.post {
  padding: 3em 11em;
}

.post-box {
  background: #f4f4f4;
  border-radius: 16px;
  padding: 7rem;
  margin-bottom: 76px;

  h2 {
    margin: 0px;
    font-size: 40px;
    text-transform: capitalize;
  }
  .post-header {
    text-align: left;
    margin-bottom: 80px;
  }
  .post-body {
    text-align: justify;
    line-height: 32px;
    font-size: 20px;
    :first-letter {
      text-transform: capitalize;
    }
  }
}

.comment {
  text-align: left;
  h2 {
    font-size: 24px;
  }
}

.comment-box {
  background: #f4f4f4;
  border-radius: 16px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 24px;
  p {
    //margin: 0;
    font-size: 16px;
    //line-height: 24px;
  }
  .comment-text:first-letter {
    text-transform: capitalize;
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

</style>
