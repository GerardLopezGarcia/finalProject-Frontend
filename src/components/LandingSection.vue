<template>
    <section class="jumbotron" style="width: 100%;">
        <div class="innerJumbo">
        <span>
            <h1>Travel anywhere  <br>
            fast secure and free</h1>
            <a href="#" class="btn">Explore now</a>
        </span>
        </div>
    </section>
</template>

<script>
</script>

<style>
  /* landing image */
  .jumbotron{
    background: linear-gradient(to bottom, #0a0c2c80 3rem, transparent 10rem),url(./icons/forest.jpg);
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
</style>