<script setup>
import FancyButton from './components/FancyButton.vue';
</script>

<template>
  <div class="content">
    <!-- slots let you pass html down to child elements - here the strong tag can be applied -->
    <FancyButton>
      <!-- can specify a name slot with the template tag and v-slot directive -->
      <!-- can access props with 'selectedProps or deconstruct as below' -->
      <template #icon="{ hover }">
        {{ hover ? '❤️' : '💔' }}
      </template>

      <template v-slot:default>
        <strong>S</strong>ubmit
      </template>
    </FancyButton>
  </div>
</template>