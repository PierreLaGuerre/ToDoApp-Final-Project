<template>
   <nav class="flex items-center justify-between flex-wrap bg-blue-900 p-6">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <img src="src\images\logo.PNG" alt="Logo" class="w-50 h-20 " />
    </div>
    
  </nav>
    <div class="bg-white py-8 px-4 rounded-lg">
      <form @submit.prevent="register" class="mx-auto max-w-lg">
        <h1 class="text-2xl font-bold mb-4">Create an Account</h1>
        <div class="mb-4">
          <label for="email" class="block text-gray-700 text-sm font-bold mb-2">Email</label>
          <input v-model="email" id="email" type="email" @focus="clearError" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div class="mb-6">
          <label for="password" class="block text-gray-700 text-sm font-bold mb-2">Password</label>
          <input v-model="password" id="password" type="password" @focus="clearError" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div>
            
        <div class="mb-6">
          <label for="repeatPassword" class="block text-gray-700 text-sm font-bold mb-2">Repeat Password</label>
          <input v-model="repeatPassword" id="password" type="password" @focus="clearError" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div class="flex items-center justify-between"></div>
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
           Sign Up
          </button>
         
        </div>
        <div class="block text-red-700 text-sm font-bold mb-2" v-if="showError">{{ errorMsg }}</div>
      </form>
    </div>
  
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import {supabase} from '../supabase.js';
  import { useUserStore } from '../store/user';

  const router = useRouter();
  const user = useUserStore();
  const email = $ref('');
  const password = $ref('');
  const repeatPassword = $ref('');
  const errorMsg = $ref('Passwords do not match');
  const showError = $ref(false)

  // register function
  const register = async () => {
    if (checkPasswords()) {
      try {
        const {user, error} = await supabase.auth.signUp({
          email: email,
          password: password,
        });
        if (error) throw error;
        router.push({name: 'Login'})
      } catch (error) {
        errorMsg = error.message;
      }
    }
    errorMsg = "Passwords do not match";
  }

  function checkPasswords() {
      if (password === repeatPassword) {
        showError = false;
        errorMsg = 'Thanks for Signing up';
      } else {
        showError = true;
        errorMsg = 'Passwords do not match';
      }
      return showError
    }

  function clearError() {
    errorMsg = ''
  }
  </script>
  
  <style scoped>
  
  </style>