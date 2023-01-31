<template>
  <div>
    <nav class="flex items-center justify-between flex-wrap bg-blue-900 p-6">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <img :src="logo" alt="Logo" class="w-50 h-20" />
      </div>

      <button @click="logout" class="text-cyan-400 text-3xl mr-10">
        Log Out
      </button>
    </nav>
  </div>

  <h1 class="text-4xl text-blue-800 text-center mb-5 mt-5 ml-6">
    Let's create a new task!
  </h1>
  <div class="flex flex-col items-center justify-center">
    <input
      class="bg-yellow-200 text-black py-16 px-8 rounded-lg w-1/4 focus:outline-none focus:shadow-outline ml-5 mb-5"
      v-model="newTaskName"
      type="text"
      placeholder="New task"
    />

    <button
      @click="addTask"
      class="bg-blue-800 hover:bg-blue-500 text-white w-1/4 font-medium py-4 px-16 rounded-lg ml-5 mb-8"
    >
      Add Task
    </button>
  </div>

  <h1 class="text-4xl text-red-600 text-center mb-10">ToDo List:</h1>

  <div class="flex flex-row">
    <Task :key="taskKey" v-for="task in taskStore.tasks" :task="task" @deleteTask="deleteTaskById" @changeTask="changeTask"/>
  </div>
</template>

<script setup>
import { supabase } from '../supabase';
import { useRouter } from 'vue-router';
import { useTaskStore } from '../store/task';
import { onMounted } from 'vue';
import { useUserStore } from '../store/user';
import Task from '../components/Task.vue';
import logo from '../assets/logo.png';


const router = useRouter();
const taskStore = useTaskStore();
const { user } = useUserStore();
const newTaskName = $ref('');

// log out function
const logout = async () => {
  await supabase.auth.signOut();
  router.push({ name: 'Auth' });
};
// add task function
const addTask = async () => {
  const { id } = user;
   await taskStore.insert(id, newTaskName);
  await taskStore.fetchTasks();
};
// delete task function
const deleteTaskById = async (taskId) => {
  await taskStore.delete(taskId);
};
// edit task function
const changeTask = async (title, id) => {
  await taskStore.editTask(title, id);
  
};
// fetch task function
onMounted(async () => {
  try {
    taskStore.fetchTasks();
  } catch (e) {
    console.log(e);
  }

});
</script>

<style scoped></style>
