<template>
  <div class="card" :style="{ backgroundColor: background }">
    <div class="card-media" v-show="showMedia">
        <slot name="media"></slot>
    </div>
    <div class="card-body">
      <div class="card-header" v-show="showHeader">
        <slot name="header"></slot>
      </div>
      <div class="card-text" v-show="showText">
        <slot name="text"></slot>
      </div>
      <div class="card-btns" v-show="showBtns">
        <slot name="btns"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardEl',
  data() {
    return {}
  },
  // props: ['background', 'showMedia','showHeader','showText','showBtns'],
  props: {
    background: {
      type: String
    },
    showMedia: {
      type: Boolean,
      default(){
        return true
      }
    },
    showHeader: {
      type: Boolean,
      default(){
        return true
      }
    },
    showText: {
      type: Boolean,
      default(){
        return true
      }
    },
    showBtns: {
      type: Boolean,
      default(){
        return true
      }
    },
  }
}
</script>

<style scoped>
.card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
  padding: 0 20px;
  border-radius: 10px;
}
.card-media,
.card-body,
.card-btns {
  width: 100%;
  padding: 10px;
}
.card-header {
  font-size: 25px;
}
.card-text {
  font-size: 18px;
}
</style>
