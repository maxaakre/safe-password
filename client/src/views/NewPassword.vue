<template>
  <div class="wrapper">
    <h2>NEW SECURE CREDENTIALS</h2>
    <form @submit.prevent="createPassword">
      <div class="box">
        <label for="site">Site</label>
        <input
          type="text"
          class="site"
          name="site"
          v-model="credentials.site"
        />
      </div>
      <div class="box">
        <label for="username">Username</label>
        <input
          type="text"
          class="username"
          name="username"
          v-model="credentials.username"
        />
      </div>
      <div class="box">
        <label for="password">Password</label>
        <input
          :type="type"
          class="password"
          name="password"
          v-model="credentials.password"
        />
        <span @click="showPassword"> {{ btnText }}</span>
      </div>

      <button class="btn" type="submit">NEW LCkD</button>
    </form>
  </div>
</template>

<script>
// import { mapGetters } from 'vuex';
export default {
  data() {
    return {
      credentials: {
        id: Date.now(),
        site: "",
        username: "",
        password: "",
      },
      type: "password",
      btnText: "ShowPassword",
    };
  },
  methods: {
    showPassword() {
      if (this.type === "password") {
        this.type = "text";
        this.btnText = "Hide Password";
      } else {
        this.type = "password";
        this.btnText = "Show Password";
      }
    },
  },
  createPassword() {
    this.$store.dispatch("createPassword", this.credentials);
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
