<template>
    <table class="min-w-full bg-white border rounded-lg shadow">
      <thead>
        <tr class="bg-gray-100 text-left">
          <th class="px-6 py-3">Role</th>
          <th class="px-6 py-3">Permissions</th>
          <th class="px-6 py-3 text-right">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="role in roles" :key="role.id" class="hover:bg-gray-50">
          <td class="px-6 py-4">{{ role.name }}</td>
          <td class="px-6 py-4">{{ role.permissions.join(', ') }}</td>
          <td class="px-6 py-4 text-right">
            <button
              @click="$emit('edit', role)"
              class="text-blue-600 hover:underline"
            >
              Edit
            </button>
            <button
              @click="$emit('delete', role.id)"
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
  defineProps(['roles']);
</script>
  