<template>
    <table class="min-w-full bg-white border rounded-lg shadow">
      <thead>
        <tr class="bg-gray-100 text-left">
          <th class="px-6 py-3">Name</th>
          <th class="px-6 py-3">Email</th>
          <th class="px-6 py-3">Role</th>
          <th class="px-6 py-3">Status</th>
          <th class="px-6 py-3 text-right">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id" class="hover:bg-gray-50">
          <td class="px-6 py-4">{{ user.name }}</td>
          <td class="px-6 py-4">{{ user.email }}</td>
          <td class="px-6 py-4">{{ user.role }}</td>
          <td class="px-6 py-4">{{ user.status }}</td>
          <td class="px-6 py-4 text-right">
            <button
              @click="$emit('edit', user)"
              class="text-blue-600 hover:underline"
            >
              Edit
            </button>
            <button
              @click="$emit('delete', user.id)"
              class="text-red-600 hover:underline ml-4"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
</template>
<script setup>
  defineProps(['users']);
</script>
  