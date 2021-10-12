import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    LoadingPage: false,
    LoadingforData: false
  },
  mutations: {
    Load(state,data){
      state.LoadingPage = data
      //alert(state.LoadingPage)
    },
    LoadforData(state,data){
      state.LoadingforData = data
      //alert(state.LoadingPage)
    }
  },
  actions: {},
  modules: {},
});
