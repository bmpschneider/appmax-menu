<template>
  <div class="container-item">
    <div class="content-item" v-for="item in items" :key="item.id">
      <div class="menu-item">
        <div class="id">{{ item.id }}</div>
        <div class="title">{{ item.title }}</div>
        <div class="description">
          {{ item.description }}
        </div>
        <div class="price">{{ item.price }}</div>
        <div class="content-btn">
          <NuxtLink :to="`/edit/${item.id}`">
            <button @click="saveCurrentItem(item)">
              <img src="@/assets/images/icons/edit.svg" />
            </button>
          </NuxtLink>
          <button @click="removeItem(item.id)">
            <img src="@/assets/images/icons/delete.svg" />
          </button>
        </div>
      </div>
      <hr />
    </div>
  </div>
</template>

<script lang="ts">
import { mapActions } from 'vuex'
import Vue from 'vue'
import { Item } from '@/models/Item'

export default Vue.extend({
  computed: {
    items(): Item {
      return this.$store.state.items
    },
  },
  methods: {
    ...mapActions(['deleteItem']),
    ...mapActions(['setCurrentItem']),
    removeItem(id: number) {
      this.deleteItem(id)
    },
    saveCurrentItem(item: Item) {
      console.log('save')
      this.setCurrentItem(item)
    },
  },
})
</script>

<style lang="scss" scoped>
.container-item {
  padding: 0px 5px;
}
.content-item {
  height: 108px;
  @include screen('small') {
    height: 130px;
    padding: 5px;
  }
}
.menu-item {
  display: grid;
  grid-template-columns: 1fr 10fr 2fr 1fr;
  grid-template-areas:
    'id title price content-btn'
    'id description price content-btn';
  font-weight: 600;
  .id {
    grid-area: id;
    font-size: 53px;
    line-height: 62px;
    color: color('menu-item', 'description');
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    height: 66px;
    @include screen('small', 'medium') {
      font-size: 25px;
      line-height: 80px;
      margin-right: 10px;
    }
  }
  .title {
    grid-area: title;
    font-size: 30px;
    line-height: 35px;
    color: color('menu-item', 'title');
    @include screen('small') {
      font-size: 20px;
    }
  }
  .description {
    grid-area: description;
    font-size: 15px;
    line-height: 18px;
    color: color('menu-item', 'description');
    @include screen('small', 'medium') {
      font-size: 12px;
    }
  }
  .price {
    grid-area: price;
    font-size: 53px;
    line-height: 62px;
    color: color('menu-item', 'price');
    display: flex;
    align-items: center;
    justify-content: right;
    @include screen('small', 'medium') {
      font-size: 20px;
    }
  }
  .content-btn {
    grid-area: content-btn;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    @include screen('small') {
      margin-left: 5px;
    }
  }
  button {
    background-color: color('background');
  }
}
</style>
