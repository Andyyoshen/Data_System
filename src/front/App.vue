<template>
  <div id="app">
    <!-- <a  class="menu-toggle rounded" href="#"><i class="fas fa-bars"></i></a> -->
    <!-- <frontheader></frontheader> -->
    <!-- <div id="nav"> 
       <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>|
      <router-link to="/login">Login</router-link>
    </div> -->
    <router-view />
  </div>
</template>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
} */

/* #nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}  */
</style>
<script>
import frontheader from "../front/components/frontheader.vue";
export default {
  name: "front",
  components: {
    frontheader,
  },
  methods: {
    Showdialog: function () {
      this.DialogModal = new bootstrap.Modal(
        document.getElementById("exampleModal"),
        {
          keyboard: false,
        }
      );
      this.DialogModal.show();
    },
  },
};
</script>
