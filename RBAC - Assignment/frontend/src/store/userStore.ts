import axios from 'axios';

export interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: 'Active' | 'Inactive';
}

interface UserState {
  users: User[];
}

const API_URL = 'http://localhost:3001';

export const useUserStore = defineStore('userStore', {
  state: (): UserState => ({
    users: [],
  }),
  actions: {
    async fetchUsers(): Promise<void> {
      const response = await axios.get(`${API_URL}/users`);
      this.users = response.data;
    },
    async addUser(user: User): Promise<void> {
      const response = await axios.post(`${API_URL}/users`, user);
      this.users.push(response.data);
    },
    async updateUser(id: number, updatedUser: Partial<User>): Promise<void> {
      const response = await axios.put(`${API_URL}/users/${id}`, updatedUser);
      const index = this.users.findIndex(user => user.id === id);
      if (index !== -1) {
        this.users[index] = response.data;
      }
    },
    async deleteUser(id: number): Promise<void> {
      await axios.delete(`${API_URL}/users/${id}`);
      this.users = this.users.filter(user => user.id !== id);
    },
  },
});
