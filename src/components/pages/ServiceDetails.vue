<template>
  <div>
    <h1>Service Details Page</h1>
    <h3>ID : {{id}} </h3>
  </div>
</template>

<script>
export default {
  name: 'ServiceDetails',
  data(){
    return{
        id: this.$route.params.id,
    }
  }
}
</script>

<style>

</style>