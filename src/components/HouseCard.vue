<template>
    <div class="box">
        <div class="box-image">
            <img :src="house.imageUrl" >
        </div>
        <div class="box-info">
            <h6>{{ house.houseAddress }},{{ house.country }}</h6>
            <p>{{ house.price }} €/noche</p>
            <p>{{ house.score }} <img src="./icons/star.svg" alt="star" style="width: 1vw;"></p>
        </div>
    </div>

</template>

<script>
export default{
    props:{
        house: {
            type: Object,
            default: {}
        }
    }
}

</script>

<style scoped>
    
    img {
        max-width: 100%;
        max-height: 100%;
    }
    .box {
        background-color: var(--light);
        width: 19rem;
        margin: 2vw;
        height: 19rem;
        border-radius: 1vw;
        color: var(--dark);
    }
    p{
        font-size: 1vw;
    }
    h6{
        font-size: 1vw;
    }
    .box-info{
       margin: 1vw 1vw;
    }
</style>