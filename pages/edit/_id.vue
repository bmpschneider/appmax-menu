<template>
  <div>
    <BaseTitle :text="'Editar Item'" />
    <BaseFormItem :type="'edit'" :current-item="currentItem" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Item } from '@/models/Item'

export default Vue.extend({
  layout: 'menu',
  computed: {
    currentItem(): Item {
      return this.$store.state.currentItem
    },
  },
})
</script>
