// /store/task.js
import { defineStore } from 'pinia';
import { supabase } from '../supabase';
const taskselector = 'tasks';

export const useTaskStore = defineStore('tasks', {
  state: () => ({
    tasks: null,
  }),
  actions: {
    async fetchTasks() {
      const { data: tasks } = await supabase
        .from(taskselector)
        .select('*')
        .order('id', {
          ascending: false,
        });
      this.tasks = tasks;
    },
    async insert(userId, title) {
      const { data: tasks } = await supabase
      .from(taskselector)
      .insert({ user_id: userId, title })
    },
    async delete(id) {
      await supabase
        .from(taskselector)
        .delete()
        .eq('id', id);
    },
    async editTask(title, id) {
      const { error } = await supabase
        .from("tasks")
        .update({ title: title })
        .match({ id: id });
      if (error) throw error;
    },
    // Hacer el PUT (cambiar entre completada y pendiente)
  },
});
