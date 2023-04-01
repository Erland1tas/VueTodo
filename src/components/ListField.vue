<template>
  <section class="list-field">
    <WillDoCard />
    <DoneCard />
  </section>
</template>

<script>
import WillDoCard from './WillDoCard.vue'
import DoneCard from './DoneCard.vue'
export default {
  components: {
    WillDoCard,
    DoneCard
  }
}
</script>

<style lang="scss">
.list-field {
  display: flex;
  gap: 50px;
}
</style>
