<template>
    <div :class="colorMode">
    <Header/>
    <LandingSection/>

    <section class="section">
      <ul class="house-grid">
        <li v-for="(house,index) in houses" :key="index" >
          <HouseCard :house="houses[index]"/>
        </li>
      </ul>
    </section>

    <MidBanner/>
    <LiveAnywhere/>
    <LastBanner/>
    <Footer/>
  </div>
</template>

<script>
  import Header from "../components/Header.vue"
  import LandingSection from "../components/LandingSection.vue"
  import HouseCard from "../components/HouseCard.vue"
  import MidBanner from "../components/MidBanner.vue"
  import LiveAnywhere from "../components/LiveAnywhere.vue"
  import LastBanner from "../components/LastBanner.vue"
  import Footer from "../components/Footer.vue"
  import { mapState, mapActions } from "pinia";
  import { useStoreStore } from "../store/store";



    export default {
      components: {
        Header,
        HouseCard,
        MidBanner,
        Footer
      },

      data(){
        return{
          houses : [],
          turnable: "#1e1e38"
        }
      },
      computed: {    
      // gives read access to this.countries and this.anotherVar
      ...mapState(useStoreStore, ['colorMode'])
      }
    }
</script>

<style >

    html{
      background: v-bind('turnable');
    }
    .light{
      background: var(--light);
      color: var(--dark);
      
    }
    .dark{
      background: var(--dark);
      color: var(--light);
      height: 100%;
    }

</style>