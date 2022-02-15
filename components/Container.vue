<template>
  <div class="container">
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  max-width: 1338px;
  @include screen('small', 'medium', 'large') {
    width: 90%;
  }
}
</style>
