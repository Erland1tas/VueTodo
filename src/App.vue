<template>
  <section class="container">
    <InputField />
    <ListField />
  </section>
</template>
<script>
import InputField from './components/InputField.vue'
import ListField from './components/ListField.vue'
export default {
  components: {
    InputField,
    ListField
  }
}
</script>
<style lang="scss">
@import './assets/colors';
body {
  background-color: $whole-background;
}
.container {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
}
</style>
