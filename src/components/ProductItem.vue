<template>
  <div class="product-item">
    <div class="product-item__property">{{ product.name }}</div>
    <div class="product-item__property">{{ product.price }}</div>
    <div class="product-item__property">{{ product.amount }}</div>
    <app-button class="product-item__rmv-btn rmv-btn" @click="$emit('removeProduct', product)">Удалить</app-button>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style scoped>
.product-item { /* доделать */
  padding: 15px;
  display: flex;
  justify-content: space-between;
}
</style>