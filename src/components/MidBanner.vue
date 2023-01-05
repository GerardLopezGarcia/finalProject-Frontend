<template>
    <section class="section mid-banner">
        <span class="mid-banner-flex">
        <h2>Not sure where to go? <br> Perfect.</h2>
        <a href="#" class="btn btn-dark">I'm flexible</a>
        </span>
    </section>
</template>

<scrip>

</scrip>

<style>
/* mid banner section */

    .mid-banner{
    color: var(--brown);
    padding: 6rem var(--sidePadding);
    border-radius: 1rem;
    background: url("./icons/banner.jpg") 0% 0% / cover;
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
</style>