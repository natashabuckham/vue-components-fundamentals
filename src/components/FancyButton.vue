<script setup>
import { ref } from 'vue';
const hover = ref(false)
</script>

<template>
    <button @mouseenter="hover = true" @mouseleave="hover = false">
        <!-- the slot element tells this component where the data from the parent should go in the template -->
        <!-- anything between the slot tags is the default content, if the parent doesn't pass anything down -->
        <slot name="icon" :hover="hover">💫</slot>
        <slot>Click Me</slot>
    </button>
    {{ hover }}
</template>