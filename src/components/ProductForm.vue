<template>
  <form class="product-form" @submit.prevent>
    <app-input class="product-form__input input" v-model="product.name" type="text" placeholder="Название" />
    <app-input class="product-form__input input" v-model="product.price" type="number" placeholder="Стоимость" />
    <app-input class="product-form__input input" v-model="product.amount" type="number" placeholder="Количество" />
    <app-button class="product-form__add-btn add-btn" @click="addProduct">Добавить</app-button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      product: {
        name: "",
        price: 0,
        amount: 0,
        total: 0
      }
    }
  },
  methods: {
    addProduct() {
      this.product.id = Date.now();
      this.product.total = this.product.price * this.product.amount;
      this.$emit('addProduct', this.product);
      this.product = {
        name: "",
        price: 0,
        amount: 0,
        total: 0
      }
    },
  }
}
</script>

<style scoped></style>