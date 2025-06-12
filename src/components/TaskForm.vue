<script setup>
// import { useTaskStore } from '../stores/TaskStore';

// import { reactive } from 'vue';

// const taskStore = useTaskStore();

// const inputData = reactive( { newTask: '' })

// const handleSubmit = (inputData) => {
//     if(inputData.newTask.value.length > 0){
//         taskStore.addTask({
//             title: inputData.newTask,
//             isFav: false,
//             id: Math.floor(Math.random() * 10000)
//         })
//         inputData.newTask= ''
//     }
// }

import { useTaskStore } from "../stores/TaskStore";

import { ref } from "vue";

const taskStore = useTaskStore();

// taskStore.addTask();

const newTask = ref("");

const handleSubmit = () => {
  if (newTask.value.length > 0) {
    console.log(taskStore);
    taskStore.addTask({
      title: newTask.value,
      isFav: false,
      id: Math.floor(Math.random() * 10000),
    });
    newTask.value = "";
  }
};
</script>

<template>
  <form @submit.prevent="handleSubmit()">
    <input type="text" placeholder="I need to.." v-model="newTask" />

    <button >Add</button>
  </form>

</template>
