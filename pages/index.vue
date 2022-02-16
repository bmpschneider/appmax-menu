<template>
  <div class="box">
    <BaseTitle :text="'Cardápio'" />
    <MenuContent />
    <BaseButton :text="'Novo Item'" :type="'register'" />
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
