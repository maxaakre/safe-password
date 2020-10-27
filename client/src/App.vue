<template>
  <div id="app">
    <div id="nav">
      <Navbar />
      <AppSideMenu />
      <Cookiecontent v-show="show"/>
    </div>
    <router-view />
  </div>
</template>
<script>
import Navbar from "@/components/Navbar.vue";
import AppSideMenu from "@/components/AppSideMenu.vue";
import Cookiecontent from '@/components/Cookiecontent.vue';
export default {

  components: { AppSideMenu, Navbar,Cookiecontent },
  data() {
    return {
      show: false
    }
  },
 mounted(){
 console.log(this.$cookie.get('cookie-consent'));
 const cookie = JSON.parse(this.$cookie.get('cookie-consent'))
 if (!cookie) {
   this.show=true
 }
 }
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
