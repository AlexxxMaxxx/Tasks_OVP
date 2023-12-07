<template>
  <form class="product-form" @submit.prevent>
    <app-input class="product-form__input input" v-model="name" type="text" placeholder="Название" />
    <app-input class="product-form__input input" v-model="price" type="number" placeholder="Стоимость" />
    <app-input class="product-form__input input" v-model="amount" type="number" placeholder="Количество" />
    <app-button class="product-form__add-btn add-btn" @click="addProduct">Добавить</app-button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      price: 0,
      amount: 0
    }
  },
  methods: {
    addProduct() {
      this.$emit('add', {
        id: Date.now(),
        name: this.name,
        price: this.price,
        amount: this.amount,
        total: this.price * this.amount
      });
      this.name = "";
      this.price = this.amount = 0
    }
  }
}
</script>

<style scoped></style>