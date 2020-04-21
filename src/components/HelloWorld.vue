<template>
  <div class="hello">
    <div v-if="!initMode && !initJitaku">
      <img class="logo" src="../assets/top.png" />
      <span class="title"> {{ userName }}</span>
      <button @click="clearStrage">クリア</button>
    </div>
    <div v-if="initJitaku">
      <span class="title"> まずは自宅を登録！！</span>
    </div>
    <!-- <span>{{ jitakuLatLng}}</span> -->
    <!-- <span> {{ response }}</span> -->
    <!-- <h1></h1> -->
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  computed: {
    // response() {
    //   const req = new XMLHttpRequest();
    //   let message = "";
    //   req.open("GET", "/gomi", false);
    //   req.onload = function() {
    //     message = JSON.parse(req.responseText).msg;
    //   };
    //   req.send(null);
    //   return message;
    // },
    userName() {
      if (this.$store.state.name != "") {
        return this.$store.state.name + "の" + "パチスロ情報";
      }
      return "";
    },
    initMode() {
      return this.$store.state.initMode;
    },
    initJitaku() {
      return this.$store.state.initJitaku;
    },
    jitakuLatLng() {
      return this.$store.state.jitakuLatLng;
    },
  },
  methods: {
    clearStrage() {
      localStorage.clear();
      this.$store.state.initMode = true;
      this.$store.state.initJitaku = true;
      this.$store.state.name = "";
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.logo {
  height: 30px;
  /* width: 40px; */
}
.title {
  font-size: 20px;
}
/* .hello {
  height:30%;
} */
</style>
