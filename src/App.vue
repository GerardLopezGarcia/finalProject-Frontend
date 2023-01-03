<template>
  <header>
    <div class="headerInner">
      <div class="div-logo">
        <img src="https://img.icons8.com/material/2x/hut.png" alt="logo" class="logo">
        <span >The housing App</span>
      </div>
    </div>
  </header>

  <section class="jumbotron" style="width: 100%;">
    <div class="innerJumbo">
      <span>
        <h1>Travel anywhere  <br>
          fast secure and free</h1>
        <a href="#" class="btn">Explore now</a>
      </span>
    </div>
  </section>
  <section class="house-items-section">
    <ul class="house-grid">
      <li v-for="(house,index) in houses" :key="index" >
        <HouseComponent :house="houses[index]"/>
      </li>
    </ul>
  </section>
  <br>
  <!-- <img :src="this.houses[0].imageUrl" > -->
  <p>{{ houses }}</p>
  <div>
    <!-- <div v-for="item in  this.houses[0].houseImages">
    <img  :src="item.url" width="400">
    </div> -->
  </div>

  
</template>

<script>
import HouseComponent from "./components/HouseCard.vue"


  export default {
    components: {
      HouseComponent
    },

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
  *,
  *::before,
  *::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  :root {
    --dark: #1e1e38;
    --white: #112;
    --light: #fafafc;
    --gray: #002;
    --sidePadding: 3rem;
    --maxWidth: 40%;
    --containerWidth: 1200px;
    
  }
  body {
    font-family: Nunito Sans,sans-serif;
    background: var(--light);
    background: var(--dark);
    color: var(--dark);
    color: var(--light);
    line-height: 1.5;
    -webkit-tap-highlight-color: transparent;
    font-size: 1rem;
  }
  header{
    position: absolute;
    top: 0;
    color: #fafafc;
    padding: 1.5rem var(--sidePadding);
    width: 100%;
    z-index: 10;
    transition: background 0.2s, border-bottom 0.2s;
  }

  /* landing image */
  .jumbotron{
    background: linear-gradient(to bottom, #0a0c2c80 3rem, transparent 10rem),url(./components/icons/forest.jpg);
    background-size: cover;
    background-position: center;
    color: var(--light);
    padding: 15rem var(--sidePadding) 6rem;
    

  }
  .innerJumbo{
    display: flex;
    max-width: var(--containerWidth);
    margin: 0 auto;
  }
  h1 {
    font-weight: 900;
    font-size: clamp(2rem, 5.5vw, 3.25rem);
    line-height: 1.2;
    margin-bottom: 1.5rem;
    width: 41%;
  }
  .btn{
    --color: var(--dark);
    --bgcolor: var(--light);
    display: inline-block;
    white-space: nowrap;
    padding: 0.75rem 1.5rem;
    font-size: 1.15rem;
    font-weight: 600;
    color: var(--color);
    background: var(--bgcolor);
    border-radius: 0.66rem;
    -webkit-transition: all .2s;
    -moz-transition: all .2s;
    transition: all .2s;
    -webkit-box-shadow: 0 .5rem 1.5rem -.5rem currentColor;
    box-shadow: 0 .5rem 1.5rem -.5rem currentColor;
    text-decoration: none;
  }
  p{
    font-size: 1vw;
  }
  .logo{
    -webkit-filter: grayscale(1) invert(1);
    filter: grayscale(1) invert(1); 
  }
  .div-logo{
    display: flex;
    align-items: center;
  }

  /* house items section  -------*/
  .house-items-section {
    margin-top: 4vw;
    margin-left: 11vw;
    margin-left: 11vw;
    margin-bottom: 4vw;
  }
  .house-grid{
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
  ul {
    list-style: none;
  }




</style>