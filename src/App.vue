<script setup>
import AppAlert from './components/AppAlert.vue';
import { ref } from 'vue';

const alertTypes = ref(["info", "success", "warning", "error"])
</script>

<template>
  <div class="p-5">
    <AppAlert v-for="alert in alertTypes" :key="alert" :type="alert"></AppAlert>
  </div>

</template>