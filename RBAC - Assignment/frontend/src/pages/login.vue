<template>
    <div class="login-container">
      <div class="login-card">
        <h1 class="login-title">Login</h1>
        <form @submit.prevent="login">
          <div class="input-group">
            <label for="email" class="input-label">Email</label>
            <input
              v-model="email"
              id="email"
              type="email"
              class="input-field"
              placeholder="Enter your email"
              required
            />
          </div>
          <div class="input-group">
            <label for="password" class="input-label">Password</label>
            <input
              v-model="password"
              id="password"
              type="password"
              class="input-field"
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" class="login-button">Login</button>
        </form>
        <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  import axios from 'axios';
  import { useRouter } from 'vue-router';
  
  export default defineComponent({
    setup() {
      const email = ref('');
      const password = ref('');
      const errorMessage = ref('');
      const router = useRouter();
  
      const login = async () => {
        try {
          const response = await axios.post('http://localhost:3001/login', {
            email: email.value,
            password: password.value,
          });
          localStorage.setItem('token', response.data.token);
          localStorage.setItem('user', JSON.stringify(response.data.user));
  
          router.push('/users');
        } catch (error) {
          errorMessage.value = 'Invalid email or password';
        }
      };
  
      return {
        email,
        password,
        errorMessage,
        login,
      };
    },
  });
  </script>
  
  <style scoped>
  .login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding: 16px;
    background: linear-gradient(135deg, #0077ff, #00d4ff);
  }
  
  .login-card {
    background: #fff;
    border-radius: 16px;
    padding: 32px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
    text-align: center;
    width: 100%;
    max-width: 400px;
  }
  
  .login-title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 24px;
    color: #333;
  }
  
  .input-group {
    margin-bottom: 20px;
    text-align: left;
  }
  
  .input-label {
    display: block;
    font-size: 14px;
    color: #555;
    margin-bottom: 8px;
  }
  
  .input-field {
    width: 100%;
    padding: 12px;
    border-radius: 8px;
    border: 1px solid #ddd;
    font-size: 16px;
    transition: border-color 0.2s ease-in-out;
  }
  
  .input-field:focus {
    outline: none;
    border-color: #0077ff;
  }
  
  .login-button {
    background-color: #0077ff;
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    padding: 12px 24px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    width: 100%;
    margin-top: 10px;
    transition: background-color 0.3s ease;
  }
  
  .login-button:hover {
    background-color: #005fcc;
  }
  
  .error-message {
    color: #e74c3c;
    font-size: 14px;
    margin-top: 12px;
  }
  
  @media screen and (max-width: 768px) {
    .login-card {
      padding: 24px;
    }
  
    .login-title {
      font-size: 20px;
    }
  
    .input-field {
      padding: 10px;
      font-size: 14px;
    }
  
    .login-button {
      font-size: 14px;
      padding: 10px 20px;
    }
  }
  
  @media screen and (max-width: 480px) {
    .login-container {
      padding: 8px;
    }
  
    .login-card {
      padding: 16px;
    }
  
    .login-title {
      font-size: 18px;
    }
  
    .input-field {
      padding: 8px;
      font-size: 12px;
    }
  
    .login-button {
      font-size: 12px;
      padding: 8px 16px;
    }
  }
</style>  