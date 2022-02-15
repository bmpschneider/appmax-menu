<template>
  <div class="box">
    <Title :text="'Cardápio'" />
    <MenuItem />
    <Button :text="'Novo Item'" :type="'register'" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  layout: 'menu',
})
</script>

<style lang="scss" scoped>
.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 200px;
  grid-auto-flow: column;
  grid-gap: 0.5rem;
  background-color: #000;
  @include screen('small', 'medium') {
    grid-template-columns: 1fr;
  }
  .box {
  }
}
</style>
