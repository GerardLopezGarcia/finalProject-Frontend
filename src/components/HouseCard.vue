<template>
    <div class="box">
        <div class="box-image">
            <img :src="house.imageUrl" >
        </div>
        <div class="box-info">
            <h6>{{ house.country }}</h6>
            <p>{{ house.price }} €/noche</p>
            <p>{{ house.score }} <img src="./icons/star.svg" alt="star" style="width: 5%;"></p>
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
        width: 333px;
        margin: 2vw;
        height: 333px;
        border-radius: 1vw;
        color: var(--dark);
    }
    p{
        font-size: 2vw;
    }
    h6{
        font-size: 2vw;
    }
    .box-info{
        margin: 1vw;
    }
</style>