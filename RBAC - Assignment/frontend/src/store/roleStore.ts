import axios from 'axios';

export interface Role {
  id: number;
  name: string;
  permissions: string[];
}

interface RoleState {
  roles: Role[];
}

const API_URL = 'http://localhost:3001';

export const useRoleStore = defineStore('roleStore', {
  state: (): RoleState => ({
    roles: [],
  }),
  actions: {
    async fetchRoles(): Promise<void> {
      const response = await axios.get(`${API_URL}/roles`);
      this.roles = response.data;
    },
    async addRole(role: Role): Promise<void> {
      const response = await axios.post(`${API_URL}/roles`, role);
      this.roles.push(response.data);
    },
    async updateRole(id: number, updatedRole: Partial<Role>): Promise<void> {
      const response = await axios.put(`${API_URL}/roles/${id}`, updatedRole);
      const index = this.roles.findIndex(role => role.id === id);
      if (index !== -1) {
        this.roles[index] = response.data;
      }
    },
    async deleteRole(id: number): Promise<void> {
      await axios.delete(`${API_URL}/roles/${id}`);
      this.roles = this.roles.filter(role => role.id !== id);
    },
  },
});
