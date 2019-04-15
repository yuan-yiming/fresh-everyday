<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  list-style: none;
  text-decoration: none;
}
a:link, a:visited {
  color: #424242;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #424242;/*#2c3e50;*/
}
/*@font-face {
    font-family: wenyuexinqingnian;
    src: url('../static/wenyuexinqingnian.ttf');
}
@font-face {
  font-family:WenYueSXSQiuYiNongTi;
  src: url('../static/WenYueSXSQiuYiNongTi.otf');
}*/
</style>