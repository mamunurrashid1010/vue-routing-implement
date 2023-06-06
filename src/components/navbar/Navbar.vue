<template>
  <div id="navbar">
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/service">Service</router-link></li>
      <li><router-link to="/contact">Contact</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name : 'Navbar',
  data(){
    return{

    }
  }
}
</script>

<style scoped>
#navbar ul li{
  display: inline-block;
  padding: 10px;
  font-size: 25px;
}
</style>