import { defineStore } from "pinia";

export const useTaskStore = defineStore("taskStore", {
  state: () => ({
    tasks: [],
    isLoading: false,
  }),
  getters: {
    favs() {
      return this.tasks.filter((t) => t.isFav);
    },
    favCount() {
      return this.tasks.reduce((p, c) => {
        return c.isFav ? p + 1 : p;
      }, 0);
    },
    totalCount: (state) => {
      return state.tasks.length;
    },
  },
  actions: {
    async getTask() {
      this.loading = true;
      const response = await fetch("http://localhost:3000/tasks");
      const data = await response.json();

      this.tasks = data;
      this.loading = false;
    },

    async addTask(task) {
      // console.log("add task");
      this.tasks.push(task);
      const response = await fetch("http://localhost:3000/tasks", {
        method: "POST",
        body: JSON.stringify(task),
        headers: { "Content-Type": "application/json" },
      });

      if (response.error) {
        console.log(response.error);
      }
      // const data = await response.json();
    },
    async deleteTask(id) {
      this.tasks = this.tasks.filter((t) => {
        return t.id !== id;
      });

      const response = await fetch("http://localhost:3000/tasks/" + id, {
        method: "DELETE",
      });

      if (response.error) {
        console.log(response.error);
      }
    },
    async toggleFav(id) {
      const task = this.tasks.find((t) => t.id === id);
      task.isFav = !task.isFav;

      const response = await fetch("http://localhost:3000/tasks/" + id, {
        method: "PATCH",
        body: JSON.stringify({isFav: task.isFav}),
        headers: { "Content-Type": "application/json" },
      });

      if (response.error) {
        console.log(response.error);
      }
    },
  },
});
