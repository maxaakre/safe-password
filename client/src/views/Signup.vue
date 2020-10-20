<template>
  <div class="wrapper">
    <form class="form">
      <div class="message"></div>
      <h1 class="error-message">{{ message }}</h1>
      <p class="error-message">{{ error }}</p>
      <div class="box">
        <label for="text">Usermname</label>
        <input type="text" v-model="credentials.name" />
      </div>
      <div class="box">
        <label for="email">Email</label>
        <input type="email" v-model="credentials.email" />
      </div>
      <div class="box">
        <label for="password">Password</label>
        <input type="password" v-model="credentials.password" />
      </div>
      <div class="box">
        <label for="repeatpassword"> Repeat password</label>
        <input type="repeatpassword" v-model="credentials.repeatPassword" />
      </div>

      <a href="#" @click="register" class="btn"> Sign me up! </a>
      <router-link to="/login" class="login"
        >Already a member click here!
      </router-link>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "Register",
      logedIn: "You are registerd go to login",
      credentials: {
        email: "",
        password: "",
        repeatPassword: "",
        name: "",
      },
      error: "Fill in input fielde's",
    };
  },
  computed: {
    auth() {
      return this.$store.state.auth;
    },
  },
  methods: {
    async register() {
      this.error = "";
      if (this.credentials.email == "" || this.credentials.password == "") {
        this.error = "Fill in input fielde's";
        return;
      } else if (!this.validEmail(this.credentials.email)) {
        this.error = "invalid mail";
        return;
      }
      await this.$store.dispatch("register", this.credentials);
      await sessionStorage.setItem("meetup", JSON.stringify(this.credentials));
    },
    validEmail: function(email) {
      var regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return regEx.test(email);
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  background: #15085f;
  .form {
    display: flex;
    flex-direction: column;
    width: 370px;
    height: 100vh;
    padding: 1.2rem 0;
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
    background: #ffbd21;
    border-radius: 8px 8px 0px 0px;
  }
  input {
    width: 300px;
    padding: 1rem;
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
    position: absolute;
    width: 311px;
    height: 62px;
    left: 32px;
    top: 718px;

    border-radius: 8px;
  }
  .login {
    font-size: 24px;
    color: #ffbd21;
  }
}
</style>
