<script setup>
    import {ref} from 'vue'
    // defineProps(['name']) define props as an array
    // const props = defineProps(['name']) assign to a constant so the props can be used inside script
    
    // best practice is to use an array and define the type
    // defineProps({
    //     name: String,
    //     price: Number,
    // })

    // can also give the prop a default value and make it required
    // this will throw an error in browser console if not followed
    const props = defineProps({
     name: { type: String, default: 'Default Plan', validator(value) {
        return value.startsWith("The")
     } },
     selected: { type: Boolean, default: false }
    //  price: { type: Number, required: true }
    })

    // const emit = defineEmits(['selected']) // define a custom event with defineEmits, returns an emit function which is saved in a const
    // to validate events need to define emits as an object, not an array
    const emit = defineEmits({
        hiThere: null, // an event which doesn't need validating
        selected(payload) {
            return typeof payload === 'string'
        }
    })

    function selectPlan() {
        // validation above makes sure that props.name is a string
        emit('selected', props.name) // use saved emit function to emit an event called selected and send a payload to parent
    }
</script>

<template>
    <div @click="selectPlan" class="plan" :class="{ 'active-plan': selected }">
      <div class="description">
        <span class="title">{{ name }}</span>
      </div>
    </div>
</template>