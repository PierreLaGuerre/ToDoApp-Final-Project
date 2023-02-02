<template>
   
   <nav class="flex items-center justify-between flex-wrap bg-blue-900 p-6">
    <div class=" container flex  justify-between items-center">
      <img :src="logo" alt="Logo" class="w-50 h-20 " />
      <h1 class=" text-white text-lg">A To Do App by P. Guerrero</h1>
    </div>
    
  </nav>

    <div class=" py-8 px-4 rounded-lg mt-14 ">
      <form @submit.prevent="login" class="mx-auto max-w-lg">
        <h1 class="text-2xl font-bold mb-4 text-blue-800">Log In</h1>
        <div class="mb-4">
          <label for="email" class="block text-gray-700 text-sm font-bold mb-2 ">Email</label>
          <input v-model="email" id="email" type="email" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div class="mb-6">
          <label for="password" class="block text-gray-700 text-sm font-bold mb-2">Password</label>
          <input v-model="password" id="password" type="password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div class="flex items-center justify-between">
          <button class="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Log In
          </button>
          <a class="inline-block align-baseline font-bold text-sm text-blue-800 hover:text-blue-700" href="#">
            Forgot Password?
          </a>
        </div>
      </form>
    </div>

    <footer class="bg-blue-900 text-white py-4 fixed bottom-0 w-full">
      <div class="container mx-auto flex items-center justify-between">
        <p class="text-sm ml-10">Copyright 2023</p>
        <nav>
          <ul class="flex">
            <li class="mr-6">
              <a href="#" class="text-white hover:text-gray-600">Privacy Policy</a>
            </li>
            <li class="mr-6">
              <a href="#" class="text-white hover:text-gray-600">Terms of Service</a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  
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