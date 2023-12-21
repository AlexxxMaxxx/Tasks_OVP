<template>
  <div class="whom-who-list list">
    <div class="whom-who-list__content-list content-list">
   <div 
        class="whom-who-list__item list__item"
        v-for="person in persons">
          <h3 class="whom-who-list__name name">
            {{ person.name.slice(0, -1) + 'е' + ' должны' }}</h3>
            <div 
            v-for="who in whomWho.find(w => w.whom === person.id).who">
              <p>{{ persons.find(p => p.id === who.id).name + ' - ' + who.amount + ' рублей' }}</p>
            </div>
            <div 
            v-if="whomWho.find(w => w.whom === person.id).who.length === 0">
              <p>Никто ничего не должен, к сожалению.</p>
            </div>
        </div>
        </div>
  </div>
</template>

<script>
export default {
  props: {
    persons: {
      type: Array,
      required: true,
    },
    whomWho: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style>

</style>