<template>
  <div class="container__list-item">
    <div v-for="(item, index) in items" :key="index" class="content">
      <div class="content__item">
        <div class="content__id">{{ ('0' + [index + 1]).slice(-2) }}</div>

        <div class="content__title">{{ item.title }}</div>

        <div class="content__description">
          {{ item.description }}
        </div>

        <div class="content__price">{{ item.price }}</div>

        <div class="content__btn">
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
import Vue from 'vue'
import { mapActions } from 'vuex'
import { Item } from '@/models/Item'

export default Vue.extend({
  computed: {
    items(): Item {
      return this.$store.state.items
        .slice()
        .sort((a: Item, b: Item) =>
          a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1
        )
    },
  },
  methods: {
    ...mapActions(['deleteItem']),
    ...mapActions(['setCurrentItem']),
    removeItem(id: number) {
      this.deleteItem(id)
    },
    saveCurrentItem(item: Item) {
      this.setCurrentItem(item)
    },
  },
})
</script>

<style lang="scss" scoped>
.container__list-item {
  padding: 0px 5px;
  margin-bottom: 37px;
  @include screen('small') {
    margin-bottom: 0px;
  }
}

.content {
  height: 108px;
  @include screen('small') {
    height: 130px;
    padding: 5px;
  }
}
.content__item {
  display: grid;
  grid-template-columns: 1fr 10fr 2fr 1fr;
  grid-template-areas:
    'id title price content-btn'
    'id description price content-btn';
  font-weight: 600;
  grid-gap: 0px 10px;
  @include screen('small') {
    grid-gap: 0px 5px;
  }
  .content__id {
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
  .content__title {
    grid-area: title;
    font-size: 30px;
    line-height: 35px;
    color: color('menu-item', 'title');
    @include screen('small') {
      font-size: 20px;
    }
  }
  .content__description {
    grid-area: description;
    font-size: 15px;
    line-height: 18px;
    color: color('menu-item', 'description');
    @include screen('small', 'medium') {
      font-size: 12px;
    }
  }
  .content__price {
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
  .content__btn {
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
