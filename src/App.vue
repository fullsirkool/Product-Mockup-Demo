<template>
  <drawer></drawer>
  <div class="right">
    <search-bar></search-bar>
    <main-container></main-container>
  </div>
</template>
<script lang="ts">
import Drawer from "./components/Drawer.vue";
import SearchBar from "./components/Search-Bar.vue";
import MainContainer from "./components/Main-Container.vue";
export default {
  name: "app",
  components: {
    Drawer,
    SearchBar,
    MainContainer,
  },
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Inter&display=swap");
body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
}
.btn {
  padding: 10px 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Josefin Sans;
  font-size: 16px;
  line-height: 16px;
  border: none;
  border-radius: 6px;
  text-decoration: none;
}
/* Disabled */
.btn:disabled {
  opacity: 0.4;
}
.btn-primary {
  color: #ffffff;
  background: #56b4b8;
}
/* Hover */
.btn-primary:hover {
  color: #FFFFFFFF;
  background: #429A9DFF;
}
/* Pressed */
.btn-primary:hover:active {
  color: #FFFFFFFF;
  background: #3B8A8DFF;
}

.btn-light{
  color: #5A6372FF;
  background: #F3F4F6FF;
}
/* Hover */
.btn-light:hover {
  color: #5A6372FF;
  background: #CED2D9FF;
}
/* Pressed */
.btn-light:hover:active {
  color: #5A6372FF;
  background: #BBC0C9FF;
}
.left {
  height: 100%;
}
.right {
  width: 100%;
}
$drawer-size: 256px;
$drawer-padding: 18px;
#drawer {
  width: $drawer-size;
  padding: $drawer-padding;
}
#search-bar {
  padding-left: $drawer-size + $drawer-padding * 2 + 30 !important;
}
#profile {
  width: $drawer-size;
}
#main-container {
  margin-left: $drawer-size + $drawer-padding * 2 + 30;
}
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
