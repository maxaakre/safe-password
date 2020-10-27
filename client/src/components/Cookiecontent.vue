<template>
    <div class="wrapper">
        <h3>Accept our cookies</h3>
        <form @submit="createCookie">
        <label for="level1">Nivå 1 nödvändiga</label>
        <input type="checkbox" name="level1" id="level1" v-model="accept.level1">
        <label for="level2">Nivå 2 mer alla cookies</label>
        <input type="checkbox" name="level2" id="level2" v-model="accept.level2" @click="setCookie"  >
        <button cookie-btn> Accept</button>
        </form>
    </div>
</template>

<script>
    import settingCookie  from '../settingCookie.js';
    export default {
        data() {
            return {
                accept: {
                    level1: "",
                    level2: ""
                }
            }
        },

     
     methods: {
      
    createCookie() {
       this.$cookie.set("cookie-consent", JSON.stringify(this.accept, "1h", true))
        },
    setCookie(){
        settingCookie();
    }        
    },
   
     
        
    }
</script>

<style lang="scss" scoped>

</style>