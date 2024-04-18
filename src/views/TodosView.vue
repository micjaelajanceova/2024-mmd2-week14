<template>
  <div>
    <h1>Create todo</h1>
    <input v-model="todo.title" type="text" placeholder="Enter title" />
    <input v-model="todo.description" type="text" placeholder="Enter description" />

    <button @click="createTodo()">Create todo</button>

    

    <div v-for="todo in todoList" :key="todo">
      <p>{{ todo.title }}</p>
      <p>{{ todo.description }}</p>

      <button @click="deleteTodo(todo)">Delete todo</button> 

      <br>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

import todocomposable from '../modules/todocomposable'
const { todo, todoList, createTodo, deleteTodo, fetchTodos } = todocomposable()

onMounted(() => {
  fetchTodos()
})
</script>




<style lang="scss" scoped>

</style>