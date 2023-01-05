<template>
    <div :class="colorMode">
        <div class="img-header-profile">
        <Header/>
        </div>
        <section class="section">
            <h2> Detalles de la cuenta </h2>
            <h4>Hola, {{users[1].name}}</h4>
            <p>Fecha de nacimiento: {{users[1].dateOfBirth}}</p>
            <p>Dirección: Calle {{users[1].address.street}}, {{users[1].address.houseAddress}} </p>
            <p>{{users[1].address.city}}</p>
            <div v-if="users[1].userStatus== 'ONLINE'">
                <p>Status : online 🌝</p>
            </div>
            <div v-else>
                <p>Status : offline 😴</p>
            </div>
            
        <!-- <ul>
            <li v-for="(user,index) in users" :key="index" >
                {{user.name}}
            </li>
        </ul> -->
        </section>
        <section class="section">
            <p>{{users}}</p>
        </section>
        <br>
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
  import { useUsersStore } from "../store/users";



    export default {
      components: {
        Header,
        HouseCard,
        MidBanner,
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
        this.fetchAllUsers();
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

</style>