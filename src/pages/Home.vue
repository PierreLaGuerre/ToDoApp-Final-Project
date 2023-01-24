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
      v-model= "newTaskName" 
      type="text"
      placeholder="Cook a lasagna"
    />
    <button @click="addTask" class="bg-blue-800 hover:bg-blue-500 text-white w-1/4 font-medium py-4 px-16 rounded-lg ml-5 mb-8">Add Task

    </button>
     
  </div>

  <h1 class="text-4xl text-red-600 text-center mb-10">ToDo List:</h1>

  <div class="flex flex-row">
<Task v-for=" task in taskStore.tasks " :task="task" /></div>

</template>

<script setup>
import { supabase } from "../supabase";
import { useRouter } from "vue-router";
import { useTaskStore } from '../store/task';
import { onMounted } from "vue";
import { ref } from 'vue'; 
import { useUserStore } from "../store/user";
import Task from '../components/Task.vue';


const router = useRouter(); 

const taskStore = useTaskStore();
console.log(taskStore.tasks)
const user = useUserStore();
const newTaskName = $ref('');
const tasks = $ref('');


const logout = async () => {
  await supabase.auth.signOut();
  router.push({ name: "Auth" });
};

const addTask = async () => {
  await taskStore.insert({ user_id: user.user.id , name: newTaskName });
}

onMounted(async () => {
try {
  await taskStore.fetchTasks();
} catch (e) {
    console.log(e);
  }
});
</script>

<style scoped></style>
