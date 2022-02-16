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
  currentItem: {},
  lastId: 4,
})

export const mutations = {
  CREATE_ITEM(state, newItem) {
    const id = state.lastId + 1
    state.lastId++
    newItem.id = ('0' + id).slice(-2)
    state.items.push(newItem)
  },
  SET_CURRENT_ITEM(state, item) {
    state.currentItem = item
  },
  DELETE_ITEM(state, id) {
    const index = state.items.findIndex((item) => item.id === id)
    state.items.splice(index, 1)
  },
  EDIT_ITEM(state, editedItem) {
    const index = state.items.findIndex((item) => item.id === editedItem.id)
    state.items.splice(index, 1, editedItem)
  },
}

export const actions = {
  async createItem({ commit }, item) {
    await commit('CREATE_ITEM', item)
  },
  async editItem({ commit }, editedItem) {
    await commit('EDIT_ITEM', editedItem)
  },
  async setCurrentItem({ commit }, item) {
    await commit('SET_CURRENT_ITEM', item)
  },
  async deleteItem({ commit }, id) {
    await commit('DELETE_ITEM', id)
  },
}
