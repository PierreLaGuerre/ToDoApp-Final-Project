<template>
   
   <nav class="flex items-center justify-between flex-wrap bg-blue-900 p-6">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <img :src="logo" alt="Logo" class="w-50 h-20 " />
    </div>
    
  </nav>
{{ errorMsg }}
    <div class="bg-white py-8 px-4 rounded-lg ">
      <form @submit.prevent="login" class="mx-auto max-w-lg">
        <h1 class="text-2xl font-bold mb-4">Log In</h1>
        <div class="mb-4">
          <label for="email" class="block text-gray-700 text-sm font-bold mb-2">Email</label>
          <input v-model="email" id="email" type="email" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div class="mb-6">
          <label for="password" class="block text-gray-700 text-sm font-bold mb-2">Password</label>
          <input v-model="password" id="password" type="password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div class="flex items-center justify-between">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Log In
          </button>
          <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
            Forgot Password?
          </a>
        </div>
      </form>
    </div>
  
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import {supabase} from '../supabase.js';
  import { useUserStore } from '../store/user';
  import logo from '../assets/logo.png';

  const router = useRouter();
  const user = useUserStore();
  const email = $ref('');
  const password = $ref('');
  const errorMsg = $ref('');

  // Login function
  const login = async () => {
    try {
      const {user, error} = await supabase.auth.signIn({
          email: email,
          password: password,
      });
      console.log(error)
      if (error) throw error;
      router.push({ name: "Home" });
    } catch (error) {
      errorMsg = error.message
    }
  };

  </script>
  
  <style scoped>
  
  </style>