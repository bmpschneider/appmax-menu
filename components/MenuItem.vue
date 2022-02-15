<template>
  <div class="content-item">
    <div class="menu-item">
      <div class="id">01</div>
      <div class="title">Batata Frita</div>
      <div class="description">
        300g de batata frita com 50g de queijo cheddar
      </div>
      <div class="price">5,50</div>
      <div class="price">5,50</div>
      <div class="content-btn">
        <button><img src="@/assets/images/icons/edit.svg" /></button>
        <button><img src="@/assets/images/icons/delete.svg" /></button>
      </div>
    </div>
    <hr />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style lang="scss" scoped>
.content-item {
  height: 108px;
  padding: 15px 5px;
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
  }
  .title {
    grid-area: title;
    font-size: 30px;
    line-height: 35px;
    color: color('menu-item', 'title');
  }
  .description {
    grid-area: description;
    font-size: 15px;
    line-height: 18px;
    color: color('menu-item', 'description');
  }
  .price {
    grid-area: price;
    font-size: 53px;
    line-height: 62px;
    color: color('menu-item', 'price');
    display: flex;
    align-items: center;
    justify-content: right;
  }
  .content-btn {
    grid-area: content-btn;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  button {
    background-color: color('background');
  }
}
</style>
