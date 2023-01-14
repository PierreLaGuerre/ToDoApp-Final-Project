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
</template>

<script setup>
import { supabase } from "../supabase";
import { useRouter } from "vue-router";

const router = useRouter();

const logout = async () => {
  console.log("data");
  await supabase.auth.signOut();
  router.push({ name: "Auth" });
};
</script>

<style scoped></style>
