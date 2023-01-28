// /store/task.js
import { defineStore } from "pinia";
import { supabase } from "../supabase";

export const useTaskStore = defineStore("tasks", {
  state: () => ({
    tasks: null,
  }),
  actions: {
    async fetchTasks() {
      const { data: tasks } = await supabase
        .from("tasks")
        .select("*")
        .order("id", {
          ascending: false,
        });
      this.tasks = tasks;
    },
    async insert(userId, title) {
      const { data: tasks } = await supabase
      .from("tasks")
      .insert({ user_id: userId, title })
    },
    // Hacer el PUT (edit)
    // Hacer el delete
    // Hacer el PUT (cambiar entre completada y pendiente)
  },
});
