<template>
      <header>
    <div class="headerInner">
      <div class="div-logo">
        <img src="https://img.icons8.com/material/2x/hut.png" alt="logo" class="logo">
        <span >The housing App</span>
      </div>
      <div class="profile">
        <a href="#">Become a host</a>
        <div class="color-mode">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="moon">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
        </div>
        <div class="user">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="userIcon">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>
            </svg>
        </div>
      </div>
    </div>
  </header>
</template>

<script>

</script>

<style scoped>
    header{
        position: absolute;
        top: 0;
        color: #fafafc;
        padding: 1.5rem var(--sidePadding);
        width: 100%;
        z-index: 10;
        
        
    }
    .headerInner{
        max-width: var(--containerWidth);
        margin: 0px auto;
        display: flex;
        justify-content: space-between;
        align-items: center;

    }
    span, a {
        font-weight: 600;
        font-size: 1.15rem;
        margin-left: 0.5rem;
        text-decoration: none;
        color: var(--light);
    }
    a {
        margin-right: 1rem;
    }
 
    .profile{
        -webkit-box-pack: end;
        justify-content: flex-end;
        white-space: nowrap;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        margin-right: 1rem;
        margin-left: 1rem;
    }
    .profile div {
        margin-right: 1rem;
    }
    .logo{
    -webkit-filter: grayscale(1) invert(1);
    filter: grayscale(1) invert(1); 
    }
    .div-logo{
        display: flex;
        align-items: center;
    }
</style>