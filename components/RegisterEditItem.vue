<template>
  <div class="content-form">
    <div class="id" v-if="type == 'edit'">
      <Input :name="'ID '" />
    </div>
    <div class="title">
      <Input :name="'Título'" />
    </div>
    <div class="description">
      <Input :name="'Descrição'" />
    </div>
    <div class="price">
      <Input :name="'Valor'" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    type: {
      type: String,
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped>
.content-form {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
  @include screen('small', 'medium') {
    grid-template-columns: 1fr;
    grid-gap: 15px;
  }
}
.id {
  width: 100%;
}
.title {
  width: 100%;
}
</style>
