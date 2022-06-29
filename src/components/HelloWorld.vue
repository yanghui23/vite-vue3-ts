<script setup lang="ts">
  import { useUserStore } from "../store/user";
  const userStore = useUserStore()
  const updateName = () => {
    userStore.updateName('李四')
  }

</script>

<template>
  <div>{{ userStore.name }}</div>
  <button @click="updateName">update name</button>
</template>

<style scoped>
</style>
