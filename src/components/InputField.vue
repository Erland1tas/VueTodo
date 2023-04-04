<template>
  <form class="form-field" @submit.prevent="grabValue">
    <input type="text" v-model="inputData" :placeholder="message" />
    <button class="add-button">Add Task</button>
  </form>
</template>
<script>
import { useTaskStore } from '../store/store.js'
import { format } from 'date-fns'
export default {
  data() {
    return {
      inputData: '',
      message: 'Enter your task..'
    }
  },
  methods: {
    grabValue() {
      if (!this.inputData) {
        this.message = 'You forgot to enter the task!'
        return
      } else {
        this.message = 'Enter your task..'
      }
      const data = {
        description: this.inputData,
        date: format(new Date(), 'dd.MM.yyyy'),
        id: Math.floor(Math.random() * 1000000)
      }
      useTaskStore().newData(data)
      this.inputData = ''
    }
  },
  computed: {}
}
</script>

<style lang="scss">
@import '../assets/colors';
@mixin beautify($fonts: changing, $sides: changing) {
  font-size: $fonts;
  border-top-#{$sides}-radius: 5px;
  border-bottom-#{$sides}-radius: 5px;
}
.form-field {
  display: flex;
  width: 70%;
  height: 40px;
  margin: 30px auto 50px;
  input[type='text'] {
    flex: 3;
    padding-left: 14px;
    @include beautify(19px, left);
  }
  .add-button {
    flex: 1;
    background-color: $button-danger;
    color: $text-colorW;
    cursor: pointer;
    transition: opacity 1s;
    @include beautify(17px, right);
    &:hover {
      opacity: 0.7;
    }
  }
}
</style>
