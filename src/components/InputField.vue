<template>
  <form class="form-field" @submit.prevent="takeValues">
    <input type="text" v-model="inputData" placeholder="Enter your task.." />
    <button class="add-button">Add Task</button>
  </form>
</template>
<script>
export default {
  data() {
    return {
      inputData: ''
    }
  },
  methods: {
    takeValues() {
      console.log(this.inputData)
    }
  }
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
