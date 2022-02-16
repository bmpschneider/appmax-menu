<template>
  <div>
    <form class="content-form">
      <div v-if="type == 'edit'" class="id">
        <BaseInput :label="'ID'" :model-value="currentItem.id" />
      </div>
      <div class="title">
        <BaseInput :label="'Título'" :model-value="currentItem.title" />
      </div>
      <div class="description">
        <BaseInput
          :label="'Descrição'"
          :model-value="currentItem.description"
        />
      </div>
      <div class="price">
        <BaseInput :label="'Valor'" :model-value="currentItem.price" />
      </div>
    </form>
    <div class="content-buttons">
      <BaseButton :text="'Cancelar'" :type="'cancel'" />
      <BaseButton :text="'Salvar'" :type="'save'" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { Item } from '@/models/Item'

export default Vue.extend({
  props: {
    type: {
      type: String,
      required: true,
    },
    // eslint-disable-next-line vue/require-default-prop
    currentItem: {
      type: Object,
    } as PropOptions<Item>,
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
.content-buttons {
  display: flex;
  justify-content: flex-end;
  grid-template-columns: 1fr;
}
.id {
  width: 100%;
}
.title {
  width: 100%;
}
</style>
