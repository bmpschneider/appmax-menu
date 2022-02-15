export const state = () => ({
  items: [
    {
      id: '01',
      title: 'Batata Frita',
      description: '300g de batata frita com 50g de queijo cheddar',
      price: '5,50',
    },
    {
      id: '02',
      title: 'Hamburguer',
      description: '300g de batata frita com 50g de queijo cheddar',
      price: '10,00',
    },
    {
      id: '03',
      title: 'Batata Frita',
      description: '300g de batata frita com 50g de queijo cheddar',
      price: '5,50',
    },
    {
      id: '04',
      title: 'Batata Frita',
      description: '300g de batata frita com 50g de queijo cheddar',
      price: '5,50',
    },
  ],
})

export const getters = {
  getItemById: (state) => (id) => {
    return state.items.find((item) => item.id === id)
  },
}

export const mutations = {
  SET_ITEM(state, newItem) {
    state.items.push(newItem)
  },
  DELETE_ITEM(state, id) {
    const index = state.items.findIndex((item) => item.id === id)
    state.items.splice(index, 1)
  },
  SEARCH_ITEM(state, id) {
    const index = state.items.findIndex((item) => item.id === id)
    state.items.splice(index, 1)
  },
}

export const actions = {
  async setItem({ commit }, item) {
    await commit('SET_ITEM', item)
  },
  async deleteItem({ commit }, id) {
    await commit('DELETE_ITEM', id)
  },
  async searchItem({ commit }, id) {
    await commit('SEARCH_ITEM', id)
  },
}
