<template>
  <form class="product-form" @submit.prevent>
    <app-input class="product-form__input input" v-model="name" type="text" placeholder="Название" />
    <app-input class="product-form__input input" v-model="price" type="number" placeholder="Стоимость" />
    <app-input class="product-form__input input" v-model="amount" type="number" placeholder="Количество" />

    <select class="product-form__select" v-model="idPayer">
      <option class="product-form__option" v-for="person in persons"
      :value="person.id">{{ person.name }}</option>
    </select>

    <form class="product-form__checkbox-form">
      <div class="product-form__title">
        Кто ел/пил?
      </div>

      <div class="product-form__content">
        <label class="product-form__checkbox">
          <input type="checkbox" name="all">
          <span>Все</span>

         <label class="product-form__checkbox" v-for="person in persons" >
             <input type="checkbox" :value="person.id" v-model="checkedId">
             <span>{{ person.name }}</span>
          </label>

        </label>
      </div>
    </form>

    <app-button class="product-form__add-btn add-btn" @click="addProduct">Добавить</app-button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      price: 0,
      amount: 0,
      idPayer: this.persons[0].id,
      checkedId: []
    }
  },
  methods: {
    addProduct() {
      this.$emit('add', {
        id: Date.now(),
        name: this.name,
        price: this.price,
        amount: this.amount,
        idPayer: this.idPayer,
        checkedId: this.checkedId,
        total: this.price * this.amount
      });
      this.name = "";
      this.price = this.amount = 0;
      this.idPayer = this.persons[0].id;
      this.checkedId = [];
    }
  },
  props: {
    persons: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped></style>