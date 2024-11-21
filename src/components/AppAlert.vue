<script setup>
import IconInfo from './icons/IconInfo.vue';
import IconSuccess from './icons/IconSuccess.vue';
import IconWarning from './icons/IconWarning.vue';
import IconError from './icons/IconError.vue';
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

const icon = computed(() => {
    return {
        info: IconInfo,
        success: IconSuccess,
        warning: IconWarning,
        error: IconError
    } [props.type]
})
</script>

<template>
    <div role="alert" :class="`alert ${alertType}`" v-if="!close">
        <component :is="icon"></component>
        <span><slot></slot></span>
        <button @click="handleClose" class="btn btn-sm">x</button>
    </div>
</template>