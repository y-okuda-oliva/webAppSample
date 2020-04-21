<template>
  <div id="app">
    <div id="overlay" v-show="initMode">
      <div id="dialog">
        <p>ユーザ登録</p>
        <input
          class="userinit"
          v-model="userName"
          placeholder="ユーザ名を入力してください"
        />
        <button class="" @click="userIns">登録</button>
      </div>
    </div>
    <!-- <img alt="Vue logo" src="./assets/top.png"> -->
    <HelloWorld :msg="title" />
    <!-- <h1>まじごみ日記のクソアプリ</h1> -->
    <Map />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Map from "./components/Map.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    Map,
  },
  data() {
    return {
      userName: "",
      title: "パチスロ情報サイト",
    };
  },
  mounted() {
    if (window.localStorage) {
      if (localStorage.getItem("userName")) {
        this.$store.state.initMode = false;
        if (localStorage.getItem("lat")) {
          this.$store.state.initJitaku = false;
        }
        this.$store.state.name = localStorage.getItem("userName");
      }
      if (localStorage.getItem("lat")) {
        this.$store.state.jitakuLatLng = [
          parseFloat(localStorage.getItem("lat")),
          parseFloat(localStorage.getItem("lng")),
        ];
        this.$store.state.center = [
          parseFloat(localStorage.getItem("lat")),
          parseFloat(localStorage.getItem("lng")),
        ];
      }
    }
  },
  computed: {
    initMode() {
      return this.$store.state.initMode;
    },
  },
  methods: {
    userIns() {
      if (this.userName) {
        window.localStorage.setItem("userName", this.userName);
        this.$store.state.initMode = false;
        this.$store.state.name = this.userName;
        this.userName = "";
      }
    },
  },
};
</script>

<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
  text-align: center;
  /* color: #2c3e50; */
  /* margin-top: 60px; */
  /* height:10Px; */
}
#overlay {
  z-index: 5000;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}
#dialog {
  position: absolute;
  z-index: 5100;
  width: 60%;
  height: 100px;
  border-radius: 10px;
  /* top: 0px; */
  /* left: 0px; */
  /* right:0px; */
  top: 100px;
  padding: 1em;
  background: #fff;
}
.userinit {
  width: 70%;
  /* position: absolute; */
  top: 10px;
  margin-right: 10px;
}
</style>
