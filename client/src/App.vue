<template>
  <div id="app">
    <div id="nav">
      <Navbar />
      <AppSideMenu />
      <button class="cookie-btn" @click="cookie">Cookie</button>
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
 methods:{
   cookie(){
      this.$store.commit('toggleCookie', true)
    },
    window(){
      if(this.$cookie.get('cookie-consent')){
        this.$store.commit('toggleCookie', false)
      } else{
        this.$store.commit('toggleCookie', true)
      }     
    },
 }, 
 mounted(){
this.window();
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
  .cookie-btn{
    width: 100px;
  
  }
}
</style>
