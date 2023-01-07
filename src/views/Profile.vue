<template>
    <div :class="colorMode">
        <div class="img-header-profile">
            <Header />
        </div>
        <div class="container">
            <div class="userdata-column">
                <h2> Detalles de la cuenta </h2>
                <h4>Hola, {{ selectedUser.name }}</h4> 
                <br>
                <p>Fecha de nacimiento: {{ selectedUser.dateOfBirth }}</p>
                <p>Dirección: Calle {{ selectedUser.address.street }}, {{ selectedUser.address.houseAddress }} </p>
                <p>{{ selectedUser.address.city }}</p>
                <div v-if="selectedUser.userStatus == 'ONLINE'">
                    <p>Status : online <img src="../components/icons/online.svg" style="width: 1rem;"></p>
                </div>
                <div v-else>
                    <p>Status : offline <img src="../components/icons/offline.svg" style="width: 1rem;"></p>
                </div>
                <br>
                <h3>{{ logedUser }}</h3>
                
            </div>
            <div class="bookings-column">
                <div class="bookings">
                    <h2> Gestiona tus reservas </h2>
                    <p>Consulta las casas disponibles</p>
                    <br>
                </div>
                <div class="bookings">
                    <p>{{ users }}</p>
                </div>
                <ul class="house-grid">
                    <li v-for="(house, index) in houses" :key="index" @mouseenter="focus" @mouseleave="unfocus">
                        <HouseCard :house="houses[index]" />
                    </li>
                </ul>
            </div>
        </div>
        <LastBanner :kiss="kiss" :unfocus="unfocus" />
        <section class="section">
            <!-- {{ selectedUser }} -->
            <!-- <p>{{ houses[0]}}</p> -->

        </section>
        <br>
        <Footer />
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
//animations
import { gsap } from "gsap"
import { CSSPlugin } from 'gsap/CSSPlugin'
gsap.registerPlugin(CSSPlugin);




export default {
    components: {
        Header,
        HouseCard,
        MidBanner,
        LastBanner,
        Footer
    },

    data() {
        return {
            selectedUser: {}
        }
    },
    computed: {
        // gives read access to this.countries and this.anotherVar
        ...mapState(useStoreStore, ['colorMode', 'houses']),
        ...mapState(useUsersStore, ['users', 'logedUser'])
    },
    methods: {
        // gives access to this.fetchAll()
        ...mapActions(useUsersStore, ['fetchAllUsers']),
        ...mapActions(useStoreStore, ['fetchAll']),
        focus(event) {
            gsap.to(event.target, { duration: .4, scale: 1.1 })
        },
        unfocus(event) {
            gsap.to(event.target, { duration: .4, scale: 1 })
        },
        kiss(event) {
            gsap.from(event.target, { duration: .7, scaleY: 0.4 })
            console.log("kissin");
        }
    },
    async created() {
        this.fetchAll();
        this.fetchAllUsers();
        const response = await fetch(`http://localhost:8080/guestusers/${this.$route.params.name}`)
        const selectedUserFetch = await response.json()
        this.selectedUser = selectedUserFetch
    }
}
</script>

<style scoped>
header {
    position: relative;
}

.container {
    /* display: flex;
    flex-direction: row; */
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: 1fr;
}

.img-header-profile {
    background: url("../components/icons/forest.jpg");
    background-size: cover;
    background-position: 0% 35%;
}

.userdata-column {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    width: 100%;
    border-right: 1px solid #0002;
    margin: 1rem;
}
.bookings-column {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding: 2rem;
    width: 100%;
}
.bookings {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    border-bottom: 1px solid #0002;
    width: 55rem;
}
</style>