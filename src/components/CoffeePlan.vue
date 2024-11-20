<script setup>
    // defineProps(['name']) define props as an array
    // const props = defineProps(['name']) assign to a constant so the props can be used inside script
    
    // best practice is to use an array and define the type
    // defineProps({
    //     name: String,
    //     price: Number,
    // })

    // can also give the prop a default value and make it required
    // this will throw an error in browser console if not followed
    defineProps({
     name: { type: String, default: 'Default Plan' },
    //  price: { type: Number, required: true }
    })
</script>

<template>
    <div class="plan">
      <div class="description">
        <span class="title">{{ name }}</span>
      </div>
    </div>
</template>