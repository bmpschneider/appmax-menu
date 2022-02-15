<template>
  <div class="title">
    <h1>{{ text }}</h1>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    text: {
      type: String,
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped>
.title {
  height: 183px;
  left: 386px;
  top: 57px;
  display: flex;
  align-items: center;
  justify-content: center;
  h1 {
    font-family: Sedgwick;
    font-weight: normal;
    font-size: 80px;
    line-height: 100px;
    letter-spacing: 0.1em;
  }
}
</style>
