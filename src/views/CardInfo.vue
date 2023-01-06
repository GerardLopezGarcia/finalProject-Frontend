<template>
    <div :class="colorMode">
        <div class="img-header-profile">
        <Header/>
        </div>
        <section class="section">
        <ul class="house-grid">
            <li v-for="(house, index) in houses" :key="index">
            <HouseCard :house="houses[index]" />
            </li>
        </ul>
        </section>
        <br>
        <Footer/>
    </div>




</template>

<script>
  import Header from "../components/Header.vue"
  import HouseCard from "../components/HouseCard.vue"
  import Footer from "../components/Footer.vue"
  import { mapState, mapActions } from "pinia";
  import { useStoreStore } from "../store/store";
  import { useUsersStore } from "../store/users";



    export default {
      components: {
        Header,
        HouseCard,
        Footer
      },

      data(){
        return{
            
        }
      },
      computed: {    
      // gives read access to this.countries and this.anotherVar
      ...mapState(useStoreStore, ['colorMode','houses']),
      ...mapState(useUsersStore, ['users'])
      },
      methods: {    
      // gives access to this.fetchAll()
      ...mapActions(useUsersStore, ['fetchAllUsers']),
      ...mapActions(useStoreStore, ['fetchAll'])
      },
      async created() {
         this.fetchAll();
      }
    }
</script>

<style scoped>
    header{
        position: relative;
    }
    .img-header-profile {
        background: url("../components/icons/forest.jpg");
        background-size: cover;
        background-position: 0% 35%;
    }
    .section {
  /* margin-top: 4vw;
      margin-left: 11vw;
      margin-right: 11vw;
      margin-bottom: 4vw; */
  margin: 3rem var(--sidePadding) 0;

    }

    .house-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    }

    ul {
    list-style: none;
    }

</style>