<template>
   <section class="add-account">
        <header class="header">
            <img alt="Vue logo" src="../assets/logga.png" class="logo" />
            <h4>LCKD</h4>
        </header>
        <h1 class="title">New secure credentials</h1>
        <section class="input-wrapper first">
            <label class="label">www</label>
            <input type="text" class="input-field" v-model="credentials.site" />
        </section>
        <section class="input-wrapper">
            <label class="label">username</label>
            <input type="text" class="input-field" v-model="credentials.username" />
        </section>
        <section class="input-wrapper">
            <label class="label">secure password</label>
            <input type="text" class="input-field" v-model="credentials.password" />
        </section>
        <button class="button" @click="addAccount">New LCKD</button>
    </section>
    

</template>

<script>



export default {
  data() {
    return {
      credentials: {
        
        site: "",
        username: "",
        password: this.generateSecurePassword(),
      },
      
    
    };
  },
  methods: {
       addAccount() {
            this.$store.dispatch("createPassword", this.credentials);
            this.$router.push('/createdpasswords')
        },
        generateSecurePassword() {
            return new Array(15).fill().map(() => String.fromCharCode(Math.random() * 86 + 40)).join('');
        }
    },

  


};
</script>

<style lang="scss" scoped>
.add-account {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
}

.header {
    // display: flex;
    // align-self: flex-start;
    align-items: center;
    // margin-left: 1.8rem;
    // margin-bottom: 1rem;
    margin-top: 1.1rem;
}

.header h4 {
    margin-left: 0.5rem;
}

.title {
    margin-top: auto;
    text-transform: uppercase;
    font-size: 1.1em;
}

.input-wrapper {
    display: flex;
    flex-direction: column;
}

.first {
    margin-top: auto;
}

.label {
    color: #000000;
    align-self: flex-start;
    background-color: #ffbd21;
    text-transform: uppercase;
    padding: 0.2rem;
    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 0.9em;
    line-height: 19px;
    border-radius: 8px 8px 0px 0px;
}

.input-field {
    min-width: 250px;
    border: 1px solid #ffbd21;
    border-radius: 0px 4px 4px 4px;
    background-color: transparent;
    padding: 1rem;
    color: #ffbd21;
    margin-bottom: 2rem;
    font-size: 1.3em;
}

.button {
    min-width: 250px;
    padding: 0.8rem;
    background-color: #FFFFFF;
    border-radius: 8px;
    font-family: Open Sans;
    font-weight: bold;
    font-size: 1.3em;
    margin: auto;
    // margin-top: auto;
    // margin-bottom: 1.5rem;
    text-transform: uppercase;
}

</style>
