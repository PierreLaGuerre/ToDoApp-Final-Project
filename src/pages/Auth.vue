<template>
    <Login v-if="login" />
    <Register v-else />
    <div class="flex flex-col items-center">
    <button class="p-2 bg-orange-500 rounded-sm text-white absolute " @click="change">Don't have an account?</button>
</div>
</template>

<script setup>
import { ref } from "vue";
import Login from '../components/LoginForm.vue';
import Register from '../components/RegisterForm.vue';

const login = ref(true);

function change() {
    login.value = !login.value;
}
</script>

<style scoped>

</style>