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
        id: Date.now(),
        site: "",
        username: "",
        password: this.generateSecurePassword(),
      },
      
    
    };
  },
  methods: {
       addAccount() {
            this.$store.dispatch("createPassword", this.credentials);
        },
        generateSecurePassword() {
            return new Array(15).fill().map(() => String.fromCharCode(Math.random() * 86 + 40)).join('');
        }
    },

  


};
</script>

<style lang="scss" scoped>
.wrapper {
  background: #15085f;
  height: 100vh;
  padding: 6rem 0;
  .form {
    display: flex;
    flex-direction: column;
    width: 370px;
    height: 100vh;
    padding: 1.2rem 0;
  }
  h2 {
    color: white;
    margin: 2rem;
  }
  .error-message {
    color: #ffbd21;
  }
  .box {
    margin: 1rem;
    text-align: left;
  }
  label {
    padding: 0 1rem;
    margin: 0 1rem;
    width: 115px;
    height: 22px;
    color: black;
    background: #ffbd21;
    border-radius: 8px 8px 0px 0px;
  }
  input {
    width: 300px;
    padding: 0.6rem;
    font-size: 24px;
    margin: 0 1rem;
    border: 2px solid #ffbd21;
    background: #15085f;
    color: #ffbd21;
  }
  .btn {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    border-radius: 5px;
    color: #000;
    background: #ffffff;
    text-decoration: none;
    width: 311px;
    height: 62px;
    border-radius: 8px;
    margin: 1rem auto;
  }
  .login {
    font-size: 24px;
    color: #ffbd21;
  }
  span {
    margin-left: 1rem;
  }
}
</style>
