export const state = () => ({
  news: []
})

export const mutations = {
  SET_NEWS (state, news) {
    state.news = news
  }
}
