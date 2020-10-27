<template>
  <div class="wrapper">
    <form v-if="!auth.loggedIn" @submit.prevent="login">
      <img src="@/assets/logga.png" alt="login" />
      <h1>LCKD</h1>
      <div class="box">
        <label for="email"> Email</label>
        <input
          type="email"
          id="email"
          v-model="credentials.email"
          autocomplete="off"
        />
      </div>
      <div class="box">
        <label for="password"> Password </label>
        <input
          type="password"
          id="password"
          v-model="credentials.password"
          autocomplete="off"
        />
      </div>
      <button type="submit" class="btn large">LET ME IN</button>
    </form>
    <div v-if="auth.loggedIn" class="passwords"></div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      error: "Fill in input fielde's",
      message: "Login",
      credentials: {
        email: "",
        password: "",
      },
    };
  },
  computed: {
    auth() {
      return this.$store.state.auth;
    },
  },
  methods: {
    login() {
      this.error = "";
      if (this.credentials.email == "" || this.credentials.password == "") {
        this.error = "Fill in input fielde's";
        return;
      }
      this.$store.dispatch("login", this.credentials);
    },
    logout() {
      this.$store.dispatch("logout");
    },
    close() {},
  },
};
</script>
<style lang="scss" scoped >
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
  h1 {
    color: white;
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
}
</style>
}
