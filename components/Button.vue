<template>
  <div class="content-button">
    <button @click="action" :class="type == 'cancel' ? 'cancel' : ''">
      <h2>
        {{ text }}
      </h2>
    </button>
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
    type: {
      type: String,
      required: true,
    },
  },
  methods: {
    action() {
      if (this.type === 'register') {
        this.$router.push('/register')
      }
      if (this.type === 'cancel') {
        this.$router.push('/')
      }
      if (this.type === 'save') {
        console.log('save')
      }
    },
  },
})
</script>

<style lang="scss" scoped>
.content-button {
  display: flex;
  justify-content: center;
  margin-top: 67px;
  @include screen('small', 'medium') {
    width: 100%;
    margin-top: 30px;
  }
}
.cancel {
  background-color: white;
  margin-right: 15px;

  h2 {
    color: rgba(168, 58, 44, 0.7) !important;
  }
}
button {
  width: 200px;
  height: 100px;
  border-radius: 20px;
  background: rgba(168, 58, 44, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  @include screen('small', 'medium') {
    width: 100%;
    height: 100%;
    h2 {
      font-size: 15px !important;
      line-height: 15px;
    }
  }
  h2 {
    color: #fbf6ea;
    font-weight: 400;
    font-size: 30px;
    line-height: 35px;
  }
}
</style>
