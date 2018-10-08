<template>
  <div>
    <knober v-model="level"/>
    <h1>{{ level }}</h1>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      level: 0
    }
  },
  name: 'app'
}
</script>
