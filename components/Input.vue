<template>
  <div>
    <div class="name">
      <h3>{{ name }}</h3>
    </div>
    <div class="input">
      <input type="text" :placeholder="`${name} do produto`" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    name: {
      type: String,
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped>
h3 {
  font-size: 30px;
  line-height: 35px;
  font-weight: 500;
  margin-bottom: 10px;
}

input {
  border-radius: 10px;
  height: 95px;
  width: 100%;
  padding: 10px 20px;
  font-size: 30px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.8);
}
</style>
