<template>
  <div>
    <knober
      v-model="level"
      min="-100"
      max="200"
      primary-color="darkcyan"
      diff-color="lightblue"
      quench-color="lightslategray"
    />
    <knober
      v-model="level"
      min="-100"
      max="200"
      primary-color="darkcyan"
      diff-color="lightblue"
      quench-color="lightslategray"
    />
    <knober
      v-model="level"
      min="-100"
      max="200"
      primary-color="darkcyan"
      diff-color="lightblue"
      quench-color="lightslategray"
    />
    <knober
      v-model="level"
      min="-100"
      max="200"
      primary-color="darkcyan"
      diff-color="lightblue"
      quench-color="lightslategray"
    />
    <knober
      v-model="level"
      min="-100"
      max="200"
      primary-color="darkcyan"
      diff-color="lightblue"
      quench-color="lightslategray"
    />
    <h1>{{ level }}</h1>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      level: 100
    }
  },
  name: 'app'
}
</script>
