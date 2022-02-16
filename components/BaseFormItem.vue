<template>
  <div class="content">
    <form class="content__form">
      <div v-if="type == 'edit'" class="content__form-id">
        <label>
          <h3>ID</h3>
        </label>
        <div class="content__form-input">
          <input
            :value="currentItem.id"
            type="text"
            :placeholder="`ID do produto`"
            readonly
          />
        </div>
      </div>

      <div class="content__form-title">
        <label>
          <h3>Título</h3>
        </label>
        <input
          :value="currentItem.title"
          type="text"
          :placeholder="`Descrição do produto`"
          @input="saveCurrentItemTitle"
        />
      </div>

      <div class="content__form-description">
        <label>
          <h3>Descrição</h3>
        </label>
        <input
          :value="currentItem.description"
          type="text"
          :placeholder="`Descrição do produto`"
          @input="saveCurrentItemDescription"
        />
      </div>

      <div class="content__form-price">
        <label>
          <h3>Valor</h3>
        </label>
        <input
          :value="currentItem.price"
          type="text"
          :placeholder="`Preço do produto`"
          @input="saveCurrentItemPrice"
        />
      </div>
    </form>
    <div class="content__buttons">
      <BaseButton :text="'Cancelar'" :type="'cancel'" />
      <BaseButton :text="'Salvar'" :type="'save'" @saveItem="saveItem" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { mapActions } from 'vuex'
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
  data() {
    return {
      editedItem: {
        id: this.currentItem.id,
        title: this.currentItem.title,
        description: this.currentItem.description,
        price: this.currentItem.price,
      } as Item,
    }
  },
  methods: {
    ...mapActions(['createItem']),
    ...mapActions(['editItem']),

    saveCurrentItemTitle(event: any) {
      this.editedItem.title = event.target.value
    },
    saveCurrentItemDescription(event: any) {
      this.editedItem.description = event.target.value
    },
    saveCurrentItemPrice(event: any) {
      this.editedItem.price = event.target.value
    },
    saveItem() {
      if (this.type === 'register') {
        this.createItem(this.editedItem)
        this.$router.push('/')
      } else {
        this.editItem(this.editedItem)
        this.$router.push('/')
      }
    },
  },
})
</script>

<style lang="scss" scoped>
.content__form {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
  @include screen('small', 'medium') {
    grid-template-columns: 1fr;
    grid-gap: 25px 15px;
  }
}
.content__buttons {
  display: flex;
  justify-content: flex-end;
  grid-template-columns: 1fr;
  height: 100px;
  margin-top: 178px;
  @include screen('small', 'medium') {
    margin-top: 0px;
  }
}
.content__form-id {
  width: 100%;
}
.content__form-title {
  width: 100%;
}
h3 {
  font-size: 30px;
  line-height: 35px;
  font-weight: 500;
  margin-bottom: 10px;
  @include screen('small', 'medium') {
    font-size: 15px;
    margin-bottom: 0;
  }
}
input {
  border-radius: 10px;
  height: 95px;
  width: 100%;
  padding: 10px 20px;
  font-size: 30px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.8);
  @include screen('small', 'medium') {
    font-size: 15px;
    height: 50px;
    padding: 10px 10px;
  }
}
</style>
