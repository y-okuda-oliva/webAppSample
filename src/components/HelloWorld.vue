<template>
  <div class="hello">
    <img class="logo" src="../assets/top.png">
    <span class="title">
      {{ msg }} {{ response }}</span>
    <!-- <h1></h1> -->
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  computed:{
    response() {
      const req = new XMLHttpRequest
      let message = ''
      req.open('GET', '/gomi', false)
      req.onload = function () {
        message = JSON.parse(req.responseText).msg
      }
      req.send(null)
      return message
    }
  }
}
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
  height:40px;
  width:40px;
}
.title {
  font-size:20px;
}
/* .hello {
  height:30%;
} */
</style>
