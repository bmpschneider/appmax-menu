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
.box {
}
</style>
