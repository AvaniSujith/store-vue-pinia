<script lang="ts">

import { ref, computed } from 'vue';

import { defineStore } from 'pinia';

export const useTaskStore = defineStore('taskStore', () => {
    const tasks = ref([
        { 
            id: 1, 
            title: 'buy milk', 
            isFav: false
        }
    ])

    const favs = computed(() => tasks.value.filter(t => t.isFav))
    const favCount = computed(() => tasks.value.reduce((p, c) => (c.isFav ? p + 1: p), 0))
    const totalCount = computed(() => tasks.value.length)

    function addTask(task: { id: number; title: string; isFav: boolean }){
        tasks.value.push(task);
    }

    return{
        tasks,
        favs,
        favCount,
        totalCount,
        addTask
    }
});

</script>


<template>

    <form @submit.prevent="addTask()">
        <input type="text" placeholder="write smthgg">
    </form>

</template>