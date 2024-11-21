<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
    type: {
        type: String,
        default: 'info'
    }
})

let close = ref(false)

function handleClose() {
    close = true
}

// computed properties are reactive and the function re-executes if any of the dependencies change
// here the dependency is [props.type], with the square brackets giving dynamic key access to the object
// this means the computed property will return a different string based on the value of the dependency
const alertType = computed(() => {
    return {
        info: 'alert-info',
        warning: 'alert-warning',
        error: 'alert-error',
        success: 'alert-success'
    } [props.type]
})
</script>

<template>
    <div role="alert" :class="`alert ${alertType}`" v-if="!close">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-info h-6 w-6 shrink-0">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <span>12 unread messages. Tap to see.</span>
        <button @click="handleClose" class="btn btn-sm">x</button>
    </div>
</template>