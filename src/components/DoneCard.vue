<template>
  <div class="list-side done-side">
    <div class="task-card" v-for="doneTask in doneTasks" :key="doneTask.id">
      <div class="items">
        <h2>{{ doneTask.description }}</h2>
      </div>
      <div class="buttons-and-date">
        <p>{{ doneTask.date }}</p>
        <div class="action-buttons">
          <button @click="reverseTask(doneTask.id, 'doneTasks')">REVERSE</button>
          <button @click="deleteTask(doneTask.id, 'doneTasks')">DELETE</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useTaskStore } from '../store/store.js'
export default {
  data() {
    return {
      doneTasks: useTaskStore().doneTasks
    }
  },
  methods: {
    deleteTask(id, doneSide) {
      useTaskStore().deleteTask(id, doneSide)
    },
    reverseTask(id, doneSide) {
      useTaskStore().doneOrReverse(id, doneSide)
    }
  }
}
</script>
