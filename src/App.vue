<script setup>
import AppAlert from './components/AppAlert.vue';
import { ref } from 'vue';

const alertData = ref([
  { type: "info", message: "New software update available." },
  { type: "success", message: "Your purchase has been confirmed!" },
  { type: "warning", message: "Warning: Invalid email address!" },
  { type: "error", message: "Error! Task failed successfully." }
])

// need to filter by comparing the passed payload, not the parent alert.type as this would filter out all of them
const closeAlert = (alertType) => {
  alertData.value = alertData.value.filter((alert) => alert.type !== alertType)
}

</script>

<template>
  <div class="p-5">
    <AppAlert v-for="alert in alertData" :key="alert.message" :type="alert.type"
      @closed="closeAlert">{{ alert.message }}</AppAlert>
  </div>
  <pre>
    {{ alertData }}
  </pre>
</template>