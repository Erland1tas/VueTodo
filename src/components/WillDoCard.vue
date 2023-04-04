<template>
  <div class="list-side will-do-side">
    <div class="task-card" v-for="willDotask in tasks" :key="willDotask.id">
      <div class="items">
        <h2>{{ willDotask.description }}</h2>
        <span
          @click="pickFavTask(willDotask.id)"
          :class="{ active: willDotask.isFav }"
          class="material-symbols-outlined"
        >
          favorite
        </span>
      </div>
      <div class="buttons-and-date">
        <p>{{ willDotask.date }}</p>
        <div class="action-buttons">
          <button @click="doneTask(willDotask.id, 'willDoTasks')">DONE</button>
          <button @click="deleteTask(willDotask.id, 'willDoTasks')">DELETE</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useTaskStore } from '../store/store.js'
export default {
  props: ['tasks'],
  methods: {
    doneTask(id, willDoSide) {
      useTaskStore().doneOrReverse(id, willDoSide)
    },
    deleteTask(id, willDoSide) {
      useTaskStore().deleteTask(id, willDoSide)
    },
    pickFavTask(id) {
      useTaskStore().favTask(id)
    }
  }
}
</script>
