<template>
  <div class="container">
    <h1>Github user search</h1>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000;
}

html, body {
  width: 100%;
}

body {
  margin: 0;
}

.container {
  padding-top: 60px;
  margin: 0 auto;
  max-width: 1360px;
  text-align: center;
}
</style>
