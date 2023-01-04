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

  <section class="section">
    <ul class="house-grid">
      <li v-for="(house,index) in houses" :key="index" >
        <HouseComponent :house="houses[index]"/>
      </li>
    </ul>
  </section>

  <section class="section mid-banner">
    <span class="mid-banner-flex">
      <h2>Not sure where to go? <br> Perfect.</h2>
      <a href="#" class="btn btn-dark">I'm flexible</a>
    </span>
  </section>

  <section class="section live-anywhere">
    <h2>Live anywhere</h2>
    <div class="cards">
      <div class="card">
        <div class="card-img">
          <img src="./components/icons/polaris.jpg" alt="outdoor image" style="width: 100%;">
        </div>
        <span>
          <h3>Outdoor getaways</h3>
        </span>
      </div>
      <div class="card">
        <div class="card-img">
          <img src="./components/icons/polaris.jpg" alt="outdoor image" style="width: 100%;">
        </div>
        <span>
          <h3>Outdoor getaways</h3>
        </span>
      </div>
      <div class="card">
        <div class="card-img">
          <img src="./components/icons/polaris.jpg" alt="outdoor image" style="width: 100%;">
        </div>
        <span>
          <h3>Outdoor getaways</h3>
        </span>
      </div>
      <div class="card">
        <div class="card-img">
          <img src="./components/icons/polaris.jpg" alt="outdoor image" style="width: 100%;">
        </div>
        <span>
          <h3>Outdoor getaways</h3>
        </span>
      </div>
    </div>

  </section>

  <section class="section">
    <p>{{ houses }}</p>
  </section>

  

  <Footer/>
  
</template>

<script>
import HouseComponent from "./components/HouseCard.vue"
import Footer from "./components/Footer.vue"


  export default {
    components: {
      HouseComponent,
      Footer
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
    --brown: #3f3f1a;
    --yellow: #ffffd6;
    --sidePadding: 8rem;
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
  .section {
    /* margin-top: 4vw;
    margin-left: 11vw;
    margin-right: 11vw;
    margin-bottom: 4vw; */
    margin: 3rem var(--sidePadding) 0;
    
  }
  .house-grid{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  ul {
    list-style: none;
  }

/* mid banner section */

.mid-banner{
  color: var(--brown);
  padding: 6rem var(--sidePadding);
  border-radius: 1rem;
  background: url("./components/icons/banner.jpg") 0% 0% / cover;
  background-position: center;
}
.mid-banner h2 {
  font-size: clamp(1.75rem, 3vw, 2.25rem);
  line-height: 1.2;
  margin-bottom: 1.5rem;
  font-weight: 800;
}
.btn-dark{
    --bgcolor: var(--brown);
    --color: var(--yellow);
}

/* live anywhere section */
.cards{
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin-bottom: -1.5rem;
  padding: 1.5rem 0px;
}
.card {
  position: relative;
  display: flex;
  flex-direction: column;
  cursor: pointer;
}
.card-img{
  /* position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  box-sizing: border-box;
  padding: 0;
  border: none;
  margin: auto;
  display: block;
  width: 1rem;
  height: 1rem;
  min-width: 100%;
  max-width: 100%;
  min-height: 100%;
  max-height: 100%; */
}


</style>