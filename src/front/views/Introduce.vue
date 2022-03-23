<template>
  <div class="Introduce_top_bootstrap-iso">
    <div id="Introduce_top" class="text-center text-white bg-dark">
      <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <main class="mt-auto px-3">
          <div class="container px-4 px-lg-5 text-center">
            <h1 id="Introduce_top_title" class="mb-1 text-dark">柴 窩 平 台</h1>
            <h3 id="Introduce_top_title2" class="mb-5 text-dark">
              <em>快 來 加 入 會 員 觀 看 最 新 柴 犬 圖</em>
            </h3>
            <!-- <a href="#" class="btn-secondaryq">Learn more</a> -->
            <a class="btn btn-primary btn-xl" href="#/">了 解 更 多</a>
            <!-- <a href="#" class="btn btn-lg btn-secondaryn fw-bold border-white bg-white">Learn</a> -->
          </div>
          <!-- <h1>數 據 平 台</h1>
    <p class="lead">加 入 會 員 可 觀 看 最 新 即 時 數 據</p>
    <p class="lead">
      <a href="#" class="btn btn-lg btn-secondary fw-bold border-white bg-white">Learn more</a>
    </p> -->
        </main>

        <footer class="mt-auto text-white-50">
          
        </footer>
      </div>
    </div>

    <div class="vld-parent">
      <loading
        loader="Dots"
        width="100"
        color="blue"
        :active.sync="isLoading"
        :can-cancel="true"
        :on-cancel="onCancel"
        :is-full-page="fullPage"
      >
      </loading>
    </div>
  </div>
</template>
<script>
import "../../../public/front_css/bootstrap-iso_Introduce.css";
import VueLoading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
export default {
  name: "Introduce",
  components: {
    loading: VueLoading,
  },
  data() {
    return {
      //  isLoading: false,
    };
  },
  beforeCreate() {
    //this.$store.commit("Load",true)
    // this.$store.commit("Load",true)
  },
  created() {
    // this.$store.commit("Load",true)
    //  let  VuexInside = this.$store
    // setTimeout(function(){
    //   VuexInside.commit("Load",false)
    // }
    // , 2000);
    // this.$store.commit("Load",true)
    // alert(this.$store.state.LoadingPage)
    //alert("B")
  },
  mounted() {
    //this.$store.commit("Load",true)
    // this.$store.commit("Load",false)
    //alert(this.$store.state.LoadingPage)
  },
  methods: {},
};
</script>
<style>
/* #Introduce_top{
    height: 100vh;
    background-image: url("../../../public/front_assets/img/bg-masthead.jpg");
    background-position: center;
    background-size: cover;
}
#Introduce_top_title{
  font-size: 4rem;
  margin: 0;
} */
</style>
