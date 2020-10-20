<template>
  <div id="app">
    <div id="nav">
      <Navbar />
      <AppSideMenu />
    </div>
    <router-view />
  </div>
</template>
<script>
import Navbar from "@/components/Navbar.vue";
import AppSideMenu from "@/components/AppSideMenu.vue";
export default {
  components: { AppSideMenu, Navbar },
};
</script>
<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
#app {
  font-family: "Open Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
}

#nav {
  a {
    font-weight: bold;
    color: #fff;
  }
}
</style>
