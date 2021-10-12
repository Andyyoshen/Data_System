<template>
  <div id="app">
    <!-- <a  class="menu-toggle rounded" href="#"><i class="fas fa-bars"></i></a> -->
    <frontheader></frontheader>
    
     <div class="vld-parent">
        <loading 
        loader="Dots"
        width=100
        color='blue'
        :active.sync="this.$store.state.LoadingPage" 
        :can-cancel="true" 
        :on-cancel="onCancel"
        :is-full-page="fullPage">
        </loading>
    </div>

    <!-- <div>
      <button type="button" @click="nnn()">click</button>
    </div> -->
    <!-- <div>
      <button type="button" @click="ccc()">click2</button>
    </div> -->
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
import VueLoading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
export default {
  name: "front",
  components: {
    frontheader,
    'loading':VueLoading
    
  },
  data() {
    return {
      isLoading: false,
    };
  },
   beforeCreate(){
      
  // alert("A")
    
   // this.isLoading = true
  },
  created(){
   
    
 //  this.$store.commit("Load",false)
  //  alert("A")
 //  alert("B")
    // this.isLoading = false
  },
  beforeMount(){
     
    
  //  alert("C")
  },
  mounted(){
    this.$store.commit("Load",true)
    let  VuexInside = this.$store
    setTimeout(function(){
      VuexInside.commit("Load",false)
    }
    , 2000);
    //this.LoadingPageFun()
  //  this.isLoading = true
  //  this.$store.state.LoadingPage = true
   // alert()
    //this.isLoading = true
  // alert("D")
  },
  beforeDestroy(){
    
    // this.isLoading = true
  },
  destroyed(){
   // this.isLoading = true
  },
  // updated(){
  //  alert("E")
  // },
  methods: {
    LoadingPageFun: function(){
      
      return this.$store.state.LoadingPage
    },
    nnn: function(){
      console.log("D")
      this.$store.commit("Load",true)
    },
    ccc: function(){
      console.log("D")
      this.$store.commit("Load",false)
    },
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
