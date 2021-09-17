import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
// import MockAdapter from 'axios-mock-adapter'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: [],
    post: {},
    comments: [],
    users: [],
    user: {},
  },
  mutations: {
    setPosts (state, value) {
      state.posts = value
    },
    setPost (state, value) {
      state.post = value
    },
    setComments (state, value) {
      state.comments = value
    },
    setUsers (state, value) {
      state.users = value
    },
    setUser (state, value) {
      state.user = value
    }
  },
  actions: {
    getPosts ({ commit }) {
      axios.get("https://jsonplaceholder.typicode.com/posts").then(function (response) {
        commit('setPosts', response.data);
        // console.log(response.data);
      });

    },
    getPost ({ commit }, param) {
      axios.get("https://jsonplaceholder.typicode.com/posts/" + param.id).then(function (response) {
        commit('setPost', response.data);
        // console.log(response.data);
      });
      // axios.get("https://jsonplaceholder.typicode.com/posts" + param.id + "/comments").then(function (response) {
      //   commit('setComments', response.data)
      // });
    },
    getComments ({ commit }, param) {
      axios.get("https://jsonplaceholder.typicode.com/posts/" + param.id + "/comments").then(function (response) {
        commit('setComments', response.data);
        // console.log(response.data);
      });
    },
    getUsers ({ commit }) {
      axios.get("https://jsonplaceholder.typicode.com/users" ).then(function (response) {
        commit('setUsers', response.data)
      });
    },
    getUser ({ commit }, param) {
      axios.get("https://jsonplaceholder.typicode.com/users" + param.id ).then(function (response) {
        commit('setUser', response.data)
      });
    }
  },
  getters: {
    posts: state => state.posts,
    post: state => state.post,
    comments: state => state.comments,
    users: state => state.users,
    user: state => state.user,
  },
  modules: {
  }
})
