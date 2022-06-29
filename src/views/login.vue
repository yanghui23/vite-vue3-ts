<template>
  <div>登录</div>
</template>

<script setup lang="ts">
  import { login } from '@/api/login'
  await login('zhangsan', '123456');
</script>

<style scoped>

</style>