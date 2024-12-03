<template>
    <div class="p-6">
      <h1 class="text-2xl font-bold mb-6">Role Management</h1>
      <button
        @click="openModal('add')"
        class="bg-blue-600 text-white px-4 py-2 rounded mb-4"
      >
        Add Role
      </button>
      <RoleTable :roles="roles" @edit="openModal('edit', $event)" @delete="deleteRole" />
      <Modal v-if="showModal" @close="closeModal">
        <template #title>{{ modalAction === 'add' ? 'Add Role' : 'Edit Role' }}</template>
        <template #body>
          <form @submit.prevent="handleSubmit">
            <div class="mb-4">
              <label class="block text-gray-700">Role Name</label>
              <input
                type="text"
                v-model="formData.name"
                class="w-full border rounded px-3 py-2"
                required
              />
            </div>
            <div class="mb-4">
              <label class="block text-gray-700">Permissions</label>
              <div class="space-y-2">
                <label>
                  <input type="checkbox" value="Read" v-model="formData.permissions" />
                  Read
                </label>
                <label>
                  <input type="checkbox" value="Write" v-model="formData.permissions" />
                  Write
                </label>
                <label>
                  <input type="checkbox" value="Delete" v-model="formData.permissions" />
                  Delete
                </label>
              </div>
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
  const roleStore = useRoleStore();
  const { fetchRoles, addRole, updateRole, deleteRole } = roleStore;
  const { roles } = storeToRefs(roleStore);

  const showModal = ref(false);
  const modalAction = ref('add');
  const formData = ref({
    id: null,
    name: '',
    permissions: [],
  });
  
  const openModal = (action, role = null) => {
    modalAction.value = action;
    if (role) {
      formData.value = { ...role };
    } else {
      formData.value = {
        id: null,
        name: '',
        permissions: [],
      };
    }
    showModal.value = true;
  };
  
  const closeModal = () => {
    showModal.value = false;
  };
  
  const handleSubmit = () => {
    if (modalAction.value === 'add') {
      addRole({ ...formData.value, id: Date.now() });
    } else {
      updateRole(formData.value.id, formData.value);
    }
    closeModal();
  };
  
  fetchRoles();
</script>
  