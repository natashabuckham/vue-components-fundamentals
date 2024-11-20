<script setup>
    import { ref } from 'vue';

    const props = defineProps({
        username: {
            type: String,
            required: true
        }
    })

    const user = ref()

    fetch(`https://api.github.com/users/${props.username}`)
        .then(async (response) => {
            const data = await response.json()
            user.value = data
        })
</script>

<template>
    <!-- without v-if, the data is loaded asynchronously so user.avatar_url doesn't exist until the data is loaded from the fetch request -->
     <!-- v-if waits for user to be truthy, i.e. not undefined -->
    <div v-if="user" class="card card-side bg-base-100 shadow-xl">
  <figure>
    <img
      :src="user.avatar_url"
      alt="Movie" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">{{ user.name }}</h2>
    <p>
        <strong>Followers:</strong> {{ user.followers }}
        <strong>Following:</strong> {{ user.following }}
    </p>
    <div class="card-actions justify-end">
      <a :href="user.html_url" class="btn btn-primary">View Profile</a>
    </div>
  </div>
</div>
</template>