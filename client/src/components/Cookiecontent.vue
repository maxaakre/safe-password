<template>
    <div class="wrapper" v-show="show">
        <section >
        <h3>Accept our cookies!</h3>
        <label for="one">Nivå 1 nödvändiga</label>
        <input type="checkbox" name="consent" value="one" v-model="consent" id="level1" >
        <label for="two">Nivå 2 mer alla cookies</label>
        <input type="checkbox" name="consent" value="two" v-model="consent" id="level2"   >
        <button type="submit" class="cookie-btn" @click="createCookie" :disabled="consent.length < 1"> Accept</button>
        </section>
    </div>
</template>

<script>
    import settingCookie  from '../settingCookie.js';
    export default {
        data() {
            return {
               consent: []
            }
        },
     computed:{
         show(){
             return this.$store.state.cookieWindow
         }
     },   

     
     methods: {
      
    createCookie() {
        if (this.consent.indexOf('two') !== -1){
            settingCookie();
        } else{
            this.$cookie.delete('info')
        }
        this.$store.commit('toggleCookie',false)
        this.$cookie.set("cookie-consent", JSON.stringify(this.consent, "1h", true))
        },

       
     
    },
   
     
        
    }
</script>

<style lang="scss" scoped>
.wrapper{
  z-index: 100;
  position: fixed;
//   display: none;
  top:0;
  bottom:0;
  right: 0;
  left: 0;
  margin: auto;
  padding: 0;
  background: rgb(37, 36, 36);
  
  section{  
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    padding: 2rem;
    margin: 1rem;
    text-decoration: none;
    color: black;
    font-family: serif;
    background: #fff;
    h3{
        padding: 2rem;
    }
      #level1 #level2{
        width: 20px;
        height: 20x;
        padding: 1rem;
    }
  button{
      margin:1rem auto;
      
  }
  
  }    
}
</style>