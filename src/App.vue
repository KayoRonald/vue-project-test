<template>
  <div id="app">
    <!-- navbar -->
    <div class="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
      <div class="container">
        <router-link to="/" class="navbar-brand">Home</router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" to="/blog">Blog</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/services"
                >Services</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/contact">contact</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="container">
      <transition name="moveInUp">
        <router-view />
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
:root {
  /* Paleta de Cores */
  --color-background: #F0F0F7;
  --color-primary-lighter: #9871F5;
  --color-primary-light: #916BEA;
  --color-primary: #8257E5;
  --color-primary-dark: #774DD6;
  --color-primary-darker: #6842c2;
  --color-secondary: #04D361;
  --color-secondary-dark: #04BF58;
  --color-title-in-primary: #FFFFFF;
  --color-text-in-primary: #D4C2FF;
  --color-text-title: #32264D;
  --color-text-complement: #9C98A6;
  --color-text-complement-2: #454545; /**/
  --color-text-base: #6A6180;
  --color-line-in-white: #E6E6F0;
  --color-input-background: #F8F8FC;
  --color-button-text: #FFFFFF;
  --color-box-base: #FFFFFF;
  --color-box-footer: #FAFAFC;
  --color-small-info: #C1BCCC;
  /* New */
  --body-bg-color: #e4e6f5;
  --border-color: #e5e4e9;
  --theme-bg-color: #fff;
  --body-color: #1b1f31;
  --main-color: #7a7e9d;
  --main-light-color: #a1a4b9;
  --title-color: #979dc3;
  --button-bg-color: #eaeefc;
  --button-color: #4d76fd;
  --unselected-mail: #f1f2f7;
  --calendar-border-color: #cbcfe0;
  --main-container-bg: #f0f0f7;
}
body {
  background: #1b1f31;
  color: #FFFFFF;
}
body::-webkit-scrollbar {
  width: 10px;
}

body::-webkit-scrollbar-track {
  background: black;
}

body::-webkit-scrollbar-thumb {
  background: #454545;
  border-radius: 3px;
}

body::-webkit-scrollbar-thumb:hover {
  background: grey;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
.moveInUp-enter-active {
  animation: fadeIn 2s ease-in;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}
.moveInUp-leave-active {
  animation: moveInUp 0.3s ease-in;
}
@keyframes moveInUp {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-400px);
  }
}
</style>