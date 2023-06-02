export default {
  actions: {
    async fetchPosts(ctx, limit = '3') {
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`)
      const posts = await res.json()

      ctx.commit('updatePosts', posts)

    }
  },
  // функции торые напрямую изменяют стор
  mutations: {
    updatePosts(state, posts) {
      state.posts = posts
    },
    createPost(state, newPost) {
      state.posts.unshift(newPost)
    }
  },
  // изначальные данные приложения
  state: {
    posts: []
  },
  // трансформировать данные и получать из стора
  getters: {
    allPosts(state) {
      return state.posts
    },

    postsCount(state) {
      return state.posts.length
    }
  }
}
