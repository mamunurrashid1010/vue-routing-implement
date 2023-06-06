<script setup>
import HelloWorld from './components/HelloWorld.vue'
import Navbar from "./components/navbar/Navbar.vue";
</script>

<template>
  <div id="app">
      <h2>Vue Routing Implement</h2>
      <Navbar/>
    <router-view/>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
