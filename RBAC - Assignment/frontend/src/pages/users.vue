<template>
    <div class="p-6">
      <h1 class="text-2xl font-bold mb-6">User Management</h1>
      <button
        @click="openModal('add')"
        class="bg-blue-600 text-white px-4 py-2 rounded mb-4"
      >
        Add User
      </button>
      <UserTable :users="users" @edit="openModal('edit', $event)" @delete="deleteUser" />
      <Modal v-if="showModal" @close="closeModal">
        <template #title>{{ modalAction === 'add' ? 'Add User' : 'Edit User' }}</template>
        <template #body>
          <form @submit.prevent="handleSubmit">
            <div class="mb-4">
              <label class="block text-gray-700">Name</label>
              <input
                type="text"
                v-model="formData.name"
                class="w-full border rounded px-3 py-2"
                required
              />
            </div>
            <div class="mb-4">
              <label class="block text-gray-700">Email</label>
              <input
                type="email"
                v-model="formData.email"
                class="w-full border rounded px-3 py-2"
                required
              />
            </div>
            <div class="mb-4">
              <label class="block text-gray-700">Role</label>
              <select
                v-model="formData.role"
                class="w-full border rounded px-3 py-2"
                required
              >
                <option value="Admin">Admin</option>
                <option value="Editor">Editor</option>
              </select>
            </div>
            <div class="mb-4">
              <label class="block text-gray-700">Status</label>
              <select
                v-model="formData.status"
                class="w-full border rounded px-3 py-2"
                required
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
            <button
              type="submit"
              class="bg-blue-600 text-white px-4 py-2 rounded"
            >
              Save
            </button>
          </form>
        </template>
      </Modal>
    </div>
</template>
<script setup>
  const userStore = useUserStore();
  const { fetchUsers, addUser, updateUser, deleteUser } = userStore;
  const { users } = storeToRefs(userStore);

  const showModal = ref(false);
  const modalAction = ref('add');
  const formData = ref({
    id: null,
    name: '',
    email: '',
    role: 'Admin',
    status: 'Active',
  });
  
  const openModal = (action, user = null) => {
    modalAction.value = action;
    if (user) {
      formData.value = { ...user };
    } else {
      formData.value = {
        id: null,
        name: '',
        email: '',
        role: 'Admin',
        status: 'Active',
      };
    }
    showModal.value = true;
  };
  
  const closeModal = () => {
    showModal.value = false;
  };
  
  const handleSubmit = () => {
    if (modalAction.value === 'add') {
      addUser({ ...formData.value, id: Date.now() });
    } else {
      updateUser(formData.value.id, formData.value);
    }
    closeModal();
  };
  
  fetchUsers();
</script>
  