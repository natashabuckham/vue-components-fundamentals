<script setup>
    import CoffeePlan from './CoffeePlan.vue';
    import {ref} from 'vue'
    const plans = ref(["The Single", "The Curious", "The Addict", "The Hacker"])

    const selectedCoffeePlan = ref()

    function handleSelectCoffeePlan(name) {
        selectedCoffeePlan.value = name
    }
</script>

<template>
    <div class="plans">
        {{ selectedCoffeePlan }}
        <!-- listen for event with @ and call function when event occurs, payload is automatically passed to the function -->
        <CoffeePlan 
            v-for="plan in plans" 
            :key="plan" 
            :name="plan" 
            :selected="plan === selectedCoffeePlan" 
            @selected="handleSelectCoffeePlan" 
        />
        <!-- instead of doing a custom event with @selected, you could use @click and pass 'plan' (the name of the plan) -->
    </div>
</template>