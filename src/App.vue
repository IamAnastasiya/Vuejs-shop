<template>
  <div id="app">
    <shop-main-wrapper/>
  </div>
</template>

<script>
import shopMainWrapper from './components/shop-main-wrapper'

export default {
  name: 'App',
  components: {
    shopMainWrapper,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 5px;
}
</style>
