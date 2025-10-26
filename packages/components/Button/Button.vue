<script setup>
defineOptions({
  name: 'UnButton'
})

defineProps({
  type: {
    type: String,
    default: 'default'
  },
  size: {
    type: String,
    default: 'default'
  },
  disabled: {
    type: Boolean,
    default: false
  },
  round: {
    type: Boolean,
    default: false
  },
  plain: {
    type: Boolean,
    default: false
  },
  icon: {
    type: String,
    default: ''
  },
  circle: {
    type: Boolean,
    default: false
  },
  loading: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <button style="background-color: blue;color: tomato;">This is Button</button>
</template>

<style lang='scss' scoped>

</style>
