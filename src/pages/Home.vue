<template>
  <div>
    <nav class="flex items-center justify-between flex-wrap bg-blue-900 p-6">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <img src="src\images\logo.PNG" alt="Logo" class="w-50 h-20" />
      </div>

      <button @click="logout" class="text-cyan-400 text-xl mr-10">
        Log Out
      </button>
    </nav>
  </div>

  <h1 class="text-4xl text-blue-800 text-center mb-5 mt-5">
    Let's create a new task!
  </h1>
  <div class="flex flex-col items-center justify-center">
    <input
      class="bg-yellow-200 text-black py-16 px-8 rounded-lg w-1/4 focus:outline-none focus:shadow-outline ml-5 mb-5"
      type="text"
      placeholder="Cook a lasagna"
    />
    <button @click="addTask" class="bg-blue-800 hover:bg-blue-500 text-white w-1/4 font-medium py-4 px-16 rounded-lg ml-5 mb-8">Add Task

    </button>
     
  </div>

  <h1 class="text-4xl text-red-600 text-center mb-10">ToDo List:</h1>

  <div class="flex flex-row">
    <div
      class="bg-yellow-200 text-black py-10 px-6 rounded-lg w-1/4 focus:outline-none focus:shadow-outline ml-5 mb-5 flex justify-start flex-wrap  "
    >
    <button
          class="bg-slate-400 hover:bg-slate-300 text-white rounded-lg py-1 px-2 mr-8"
        >
          Edit
        </button>

      
        <input
          type="text"
          placeholder="Task"
          class="bg-yellow-200 text-center"
        />
      

      
        <button
          class="bg-red-600 hover:bg-red-500 text-white rounded-lg py-1 px-2"
        >
          Delete
        </button>
      
      <div class=" mt-10">
        
        <button
          class=" bg-blue-900 hover:bg-blue-700 text-cyan-300 rounded-lg py-1 px-2"
        >
          Did It
        </button>

      </div>

      
    </div>

    <div
      class="bg-yellow-200 text-black py-10 px-6 rounded-lg w-1/4 focus:outline-none focus:shadow-outline ml-5 mb-5 flex justify-start flex-wrap  "
    >
    <button
          class="bg-slate-400 hover:bg-slate-300 text-white rounded-lg py-1 px-2 mr-8"
        >
          Edit
        </button>

      
        <input
          type="text"
          placeholder="Task"
          class="bg-yellow-200 text-center"
        />
      

      
        <button
          class="bg-red-600 hover:bg-red-500 text-white rounded-lg py-1 px-2"
        >
          Delete
        </button>
      
      <div class=" relative mt-10">
        <button
          class=" bg-orange-500 hover:bg-orange-400 text-white rounded-lg py-1 px-2 bottom-0  left-0"
        >
          Pending
        </button>
       

      </div>

      
    </div>

    
  </div>
</template>

<script setup>
import { supabase } from "../supabase";
import { useRouter } from "vue-router";
import { useTaskStore } from '../store/task';

const router = useRouter();

const task = useTaskStore();

const logout = async () => {
  console.log("data");
  await supabase.auth.signOut();
  router.push({ name: "Auth" });
};

const addTask = async () => {
  await task.insert();
}

const fetchTasks = async () => {
  await task.fetchTasks();
}
</script>

<style scoped></style>
