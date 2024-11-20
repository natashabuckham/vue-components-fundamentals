<script setup>
    import CoffeePlan from './CoffeePlan.vue';
    import { ref, onMounted, onUnmounted } from 'vue'
    const plans = ref(["The Single", "The Curious", "The Addict", "The Hacker"])

    const selectedCoffeePlan = ref()

    function handleSelectCoffeePlan(name) {
        selectedCoffeePlan.value = name
    }

    // onUnmounted often used for clean-up - e.g. this counter runs even if the component is not visible on the page, which can cause memory leaks
    const count = ref(0)
    const interval = setInterval(() => {
        count.value++
    }, 1000)

    const plansWrapper = ref() // template ref - links to the ref on the first div, this is a way to access a DOM element instead of using querySelector
    onMounted(() => {
        console.log(plansWrapper.value)
    })

    onUnmounted(() => {
        clearInterval(interval) // clearInterval will 'clean up' the counter
        console.log("Bye bye plan picker")
    })
</script>

<template>
    <div ref="plansWrapper" class="plans">
        {{ count }}
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