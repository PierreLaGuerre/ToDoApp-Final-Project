<template>
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
</template>

<script setup>
import { useTaskStore } from '../store/task';
import { ref } from 'vue'; 

const task = useTaskStore();

</script>

<style scoped>

</style>