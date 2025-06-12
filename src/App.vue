<script setup>
import { useTaskStore } from './stores/TaskStore.js';

import TaskDetails from './components/TaskDetails.vue';

import TaskForm from './components/TaskForm.vue';

// import TaskFormNew from './components/TaskFormNew.vue'

import { ref } from 'vue';

const taskStore = useTaskStore();

taskStore.getTask();

const filter = ref('all');

const { tasks, loading, favs, totalCount, favCount } = storeToRefs(taskStore)

// return { tasks, loading, favs, totalCount, favCount }

</script>

<template>
  
  <main>

    <header>
      <img src="./assets/pinia-logo.svg" alt="pinia logo">
      <h2>Pinia Tasks</h2> 
    </header>


    <div class="new-task-form">
      <TaskForm />
      <!-- <TaskFormNew /> -->
    </div>


    <nav class="filter">
      <button @click="filter = 'all'">All Tasks</button>
      <button @click="filter = 'favs'">Fav Tasks</button>
    </nav>


    <div class="loading" v-if="loading">
      Loading task...
    </div>

     <!-- task list -->
      <div class="task-list" v-if="filter === 'all'">
        <!-- <p>All Tasks</p> -->
         <p>You have {{ totalCount }} tasks left to do</p>
        <div v-for="task in tasks" :key="task.id">
          <TaskDetails :task="task" />
        </div>
      </div>

      <div class="task-list" v-if="filter === 'favs'">
        <p>You have {{  favCount }} favorite tasks left to do</p>
        <div v-for="task in taskStore.favs" :key="task.id">
          <TaskDetails :task="task" />
        </div>
      </div>


      <button @click="taskStore.$reset">Reset State</button> 

  </main>

</template>