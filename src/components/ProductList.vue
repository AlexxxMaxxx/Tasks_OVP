<template>
  <div class="product-list">
    <div class="product-list__header-list header-list">
      <h3>{{ headerList }}</h3>
    </div>
    <div class="product-list__content-list content-list">
    <product
  				v-for="product in products"
  				:product="product"
  				:key="product.id"
          @removeProduct="$emit('removeProduct', product)"
  			/>
    </div>
  </div>
</template>

<script>
import Product from '@/components/ProductItem.vue';
export default {
  data() {
    return {
      headerList: "" /*заменить потом на А чего это мы голодаем? Добавим что-нибудь!*/
    }
  },
  props: {
    products: {
      type: Array,
      required: true,
    }
  },
  components: {
    Product
  },
  updated() {
    this.headerList = this.getHeaderList();
  },
  methods: {
    getHeaderList() {
      const amountProducts = this.products.length;

      if (amountProducts) {
        if (amountProducts === 1) {
          return amountProducts + " позиция";
        }
        else if (amountProducts > 4) {
          return amountProducts + " позиций";
        }
        else {
          return amountProducts + " позиции";
        }
      }
      else {
        return "А чего это мы голодаем? Добавим что-нибудь!";
      }
    }
  }
}
</script>

<style scoped>
</style>