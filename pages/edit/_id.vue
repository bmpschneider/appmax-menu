<template>
  <div class="box">
    <Title :text="'Editar Item'" />
    <RegisterEditItem :type="'edit'" />
    <div class="content-buttons">
      <Button :text="'Cancelar'" :type="'cancel'" />
      <Button :text="'Salvar'" :type="'save'" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  layout: 'menu',
})
</script>

<style lang="scss" scoped>
.content-buttons {
  display: flex;
  justify-content: flex-end;
}
</style>
