<script setup>
import { useTaskStore } from './stores/TaskStore.js';

import TaskDetails from './components/TaskDetails.vue';

const taskStore = useTaskStore();

</script>

<template>
  
  <main>

    <header>
      <img src="./assets/pinia-logo.svg" alt="pinia logo">
      <h2>Pinia Tasks</h2> 
    </header>

     <!-- task list -->
      <div class="task-list">
        <p>All Tasks</p>
        <div v-for="task in taskStore.tasks" :key="task.id">
          <TaskDetails :task="task" />
        </div>
      </div>

      <div class="task-list">
        <p>Fav Tasks</p>
        <div v-for="task in taskStore.favs" :key="task.id">
          <TaskDetails :task="task" />
        </div>
      </div>

  </main>

</template>

