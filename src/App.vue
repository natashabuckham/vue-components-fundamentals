<script setup>
import AppAlert from './components/AppAlert.vue';
import { ref } from 'vue';

const alertData = ref([
  {alert: "info", message: "New software update available."},
  {alert: "success", message: "Your purchase has been confirmed!"},
  {alert: "warning", message: "Warning: Invalid email address!"},
  {alert: "error", message: "Error! Task failed successfully."}
])
</script>

<template>
  <div class="p-5">
    <AppAlert v-for="alert in alertData" :key="alert.alert" :type="alert.alert">{{ alert.message }}</AppAlert>
  </div>

</template>