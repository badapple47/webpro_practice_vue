<template>
  <div id="app">
    <router-view/>
          <nav class="navbar navbar-default navbar-fixed-top">
  <div class="container-fluid">
    <div class="navbar-header">
      <img class="text-left" id="plane-logo" v-bind:src='"./assets/planelogo.png"' height="42" width="42" />
      <a id="header_contact" class="navbar-brand" href="#/home">
          Home
      
      </a>
    </div>
  </div>
</nav>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

}
/* #plane-logo{
margin-top: 20px;
} */

/* #header_contact{
  margin-left : 200px;
} */
</style>
