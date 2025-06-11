<script setup>
import { useTaskStore } from './stores/TaskStore';

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
        <div v-for="task in taskStore.tasks" :key="task.id">
          <p>{{ task.title }}</p>
        </div>
      </div>

  </main>

</template>

