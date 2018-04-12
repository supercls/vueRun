<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <p @click="goPush">点击去另一个页面</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return{
      msg: 'Welcome to Yo1uzr Vue.js App'
    }
  },
  methods:{
    goPush:function(){
      this.$router.push({
        path:'/page1',
        query:{
          id:'122'
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
h1, h2 {
  font-weight: normal;
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
</style>
