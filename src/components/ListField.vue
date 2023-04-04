<template>
  <div class="favorite">
    <label for="filterFav" class="fav" :class="hiddenButton">{{ labelMessage }}</label>
    <input type="checkbox" id="filterFav" v-model="isChecked" />
  </div>
  <section class="list-field">
    <WillDoCard :tasks="tasks" />
    <DoneCard />
  </section>
</template>

<script>
import WillDoCard from './WillDoCard.vue'
import DoneCard from './DoneCard.vue'
import { useTaskStore } from '../store/store'
export default {
  components: {
    WillDoCard,
    DoneCard
  },
  data() {
    return {
      isChecked: false
    }
  },
  computed: {
    tasks() {
      const favoriteTasks = useTaskStore().favTasks
      return this.isChecked && favoriteTasks.length > 0 ? favoriteTasks : useTaskStore().willDoTasks
    },
    hiddenButton() {
      return useTaskStore().favTasks.length > 0 ? '' : 'hidden'
    },
    labelMessage() {
      return this.isChecked ? 'Show All' : 'Show Favorites'
    }
  }
}
</script>

<style lang="scss">
@import '../assets/colors';
.favorite {
  margin-bottom: 35px;
  input[type='checkbox'] {
    display: none;
  }
  label {
    font-size: 20px;
    display: block;
    width: 170px;
    padding: 12px 0;
    text-align: center;
    border-radius: 5px;
    background-color: $button-soft;
    cursor: pointer;
  }
  label.hidden {
    visibility: hidden;
  }
}
.list-field {
  display: flex;
  gap: 50px;
}
</style>
