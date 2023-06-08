<template>
  <div>
    <h1>Home Page</h1>
    <p>Redirect demo</p>
    <button @click="contact">Contact Page</button>
    <button @click="service">Service Page</button>
    <button @click="back">Back</button>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data(){
    return{

    }
  },
  methods:{
    contact(){
      this.$router.push('/contact');
    },
    service(){
      this.$router.push('/service');
    },
    back(){
      this.$router.go(-1);
    }
  }
}
</script>

<style>

</style>