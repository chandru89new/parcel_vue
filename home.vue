<template>
  <div>
    This is home.
    State is active: {{ stateIsActive }}
  </div>
</template>
<script>
export default {
  computed: {
    stateIsActive() {
      return this.$store.state.stateIsActive
    }
  }
}
</script>
