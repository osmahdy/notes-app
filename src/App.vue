<template>
  <navbarEl></navbarEl>
</template>

<script>
import navbarEl from './components/navbarEl.vue';

export default {
  name: 'App',
  components: {
    navbarEl,
  },
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
