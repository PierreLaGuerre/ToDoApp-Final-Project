<template>
  <div
    class="bg-yellow-200 text-black py-10 px-6 rounded-lg w-1/4 focus:outline-none focus:shadow-outline ml-5 mb-5 flex justify-start flex-wrap">
    
    <div class=" flex flex-col-reverse">
    

    <button class="bg-red-600 hover:bg-red-500 text-white rounded-lg py-1 px-2 " @click="$emit('deleteTask', task.id)">
      Delete
    </button>

    <button class="bg-slate-400 hover:bg-slate-300 text-white rounded-lg py-1 px-2 mb-4" @click="$emit('changeTask' , taskTitle, task.id )">
      Edit
    </button>

    <button class=" bg-blue-900 hover:bg-blue-700 text-cyan-300 rounded-lg py-1 px-2 mb-4">
      Did It
    </button>

    
    
  </div> 

  <div class=" flex flex-col">
    <p class=" ml-10 text-lg">{{ task.title }}</p>
  <input v-model="taskTitle" class=" ml-10 mt-5 text-lg bg-yellow-100">
</div>

  </div>
</template>

<script>
import { defineComponent , ref } from 'vue'




export default defineComponent({
    props: {
      task: { required: true },
    },
    setup(props) {
      const { task } = props;
      
      return { task };
    }
  });

  const taskTitle = ref();
</script>

<style scoped>

</style>