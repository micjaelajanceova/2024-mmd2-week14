<script setup>
import { ref } from 'vue';

const isMobileNavVisible = ref(false);
const isDesktopNavVisible = ref(true);

const hideNavbar = () => {
  isMobileNavVisible.value = false;
}

const showNavbar = () => {
  isMobileNavVisible.value = true;
}
</script>


<template>
    <header>
    <img alt="Logo" class="logo" src="@/assets/mylogo.png" width="80" height="80" />

    <div class="wrapper">
      <nav>
        <ul class="navbar" v-if="isMobileNavVisible">
          <!-- mobile navigation links -->
          <ul class="navbar">
        <li><a href="/">HOME</a></li>
        <li><a href="#about">ABOUT</a></li>
        <li><a href="#skills">SKILLS</a></li>
        <li><a href="#portfolio">PORTFOLIO</a></li>
        <li><a href="#contact">CONTACT</a></li>

      </ul>
          <li @click="hideNavbar"><svg xmlns="http://www.w3.org/2000/svg" height="35" viewBox="0 -960 960 960" width="35"><path d="m249-207-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"/></svg></li>
          <!-- other mobile navigation links -->
        </ul> 
     
          <ul class="navbar-desktop">
        <li class="hideOnMobile"><a href="/">HOME</a></li>
        <li class="hideOnMobile"><a href="#about">ABOUT</a></li>
        <li class="hideOnMobile"><a href="#skills">SKILLS</a></li>
        <li class="hideOnMobile"><a href="#portfolio">PORTFOLIO</a></li>
        <li class="hideOnMobile"><a href="#contact">CONTACT</a></li>
      </ul>
      <li class="menu-button" @click=showNavbar()><a href="#"><svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M120-240v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z"/></svg></a></li>
      
      </nav>
    </div>
  </header>


<RouterView v-slot=" { Component }">
  
</RouterView>


<!------footer------>
<div class="icons">

<!-- Linkedin --> 
<a href="https://www.linkedin.com/in/michaela-janceová-26b5022aa/">
<span class="[&>svg]:h-10 [&>svg]:w-10">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 448 512">
    <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. -->
    <path
      d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
  </svg>
</span>
</a>
<!-- Instagram -->
<a href="https://www.instagram.com/michaela_janceova/">
<span class="[&>svg]:h-10 [&>svg]:w-10">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 448 512">
    <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. -->
    <path
      d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
  </svg>
</span>
</a>

<!-- Facebook -->
<a href="https://www.facebook.com/michaela.janceova.7/">
<span class="[&>svg]:h-10 [&>svg]:w-10">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 320 512">
    <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. -->
    <path
      d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
  </svg>
</span>
</a>

</div>

</template>



<style scoped>


/*----------navbar----------*/ 
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
  margin-top: 10px;
}

nav ul {
  width: 100%;
  list-style: none;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

nav ul li {
  height: 50px;
}

nav ul li a {
  color: rgb(0, 0, 0);
  text-decoration: none;
  height: 100%;
  letter-spacing: 1.2px;
  padding: 1px 30px;
  text-decoration: none;
  display: flex;
  align-items: center;
  font-size: 25px;
}

nav ul li a:hover {
  width: 100%;
  color: #ffffff;
}

.navbar {
  position: fixed;
  top: 0;
  right: 0;
  height: 250px;
  width: 100%;
  z-index: 999;
  background-color: rgba(181, 213, 194, 0.2);
  backdrop-filter: blur(10px);
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}

.navbar li {
  width: 100%;
}

.navbar a {
  width: 100%;
}

.navbar li a {
  justify-content: center;
}

.menu-button {
  display: none;
}

svg {
  cursor: pointer;
}

ul li svg:hover {
  color: white;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
  }

  header .wrapper {
    display: flex;
    flex-wrap: wrap;
  }

  .logo {
    margin-left: 20px;
}
}

  @media (max-width: 768px){
  .hideOnMobile{
    display: none;
  }

  .menu-button{
  display: block;
}

.hideOnMobile{
  display: none;
}

.navbar{
  display: flex;
}
  
}

/*------------footer------------*/

.icons {
  display: flex;
  margin: 10px;
  cursor: pointer;
  justify-content: center;
}

svg {
  margin-left: 10px;
}

svg:hover {
  color: #000000;
}

</style>


