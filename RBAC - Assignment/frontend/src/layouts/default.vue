<template>
  <div class="flex">
    <Sidebar v-if="!isLoginPage" />
    <div :class="isLoginPage ? 'flex-1' : 'flex-1 ml-64 p-6'">
      <NuxtPage />
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import Sidebar from '~/components/Sidebar.vue';
const route = useRoute();
const isLoginPage = computed(() => route.path === '/login');
</script>