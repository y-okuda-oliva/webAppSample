import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0,
    name:"",
    initMode:true,
    initJitaku:true,
    jitakuLatLng: [0,0],
    zoom:15,
    center:[35.771, 139.635]
  },
  mutations: {
    increment(state) {
      state.count++
    },
    setName(state, name) {
        state.name = name;
    }
  }
})

store.commit('increment')

export default store