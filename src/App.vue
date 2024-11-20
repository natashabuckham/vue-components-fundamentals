<script setup>
  import PlanPicker from './components/PlanPicker.vue';
  import { ref } from 'vue';

  const show = ref(true)
</script>

<template>
 <div class="content">
  <h1 class="title">Coffee Plans</h1>

  <h2 class="subtitle">We travel the world to source the very best single origin coffee for you</h2>

  <label for=""><input type="checkbox" v-model="show">Show plan picker</label>
  
  <PlanPicker v-if="show"/>
</div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
