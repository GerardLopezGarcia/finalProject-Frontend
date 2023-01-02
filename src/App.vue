<template>
  <img :src="this.houses[0].imageUrl" >
  <p>{{ houses }}</p>
  <img :src="this.houses[0].imageUrl"  >
</template>

<script>
  export default {
    data(){
      return{
        houses : []
      }
    },

    async created(){
      const response = await fetch('http://localhost:8080/houses')
      const data = await response.json()
      this.houses = await data
      console.log(this.houses);
      
    }
  }
</script>

<style>
  p{
    font-size: 2vw;
  }
</style>