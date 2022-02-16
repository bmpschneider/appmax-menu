<template>
  <div class="box">
    <BaseTitle :text="'Cadastrar Item'" />
    <BaseFormItem :type="'register'" :current-item="{}" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  layout: 'menu',
})
</script>

<style lang="scss" scoped></style>
