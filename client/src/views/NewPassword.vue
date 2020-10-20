<template>
  <div class="wrapper">
    <form @submit.prevent="createPassword">
      <label for="username">Username</label>
      <input
        type="text"
        class="username"
        placeholder=""
        name="username"
        v-model="credentials.username"
      />
      <div class="box">
        <label for="password">Password</label>
        <input
          :type="type"
          class="password"
          placeholder="******"
          name="password"
          v-model="credentials.password"
        />
        <span @click="showPassword"> {{ btnText }}</span>
      </div>

      <button type="submit">Create</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      credentials: {
        id: Date.now(),
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
  height: 100vh;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #000;
  }
  label {
    padding: 0.3rem;
  }
  input {
    width: 300px;
    height: 40px;
    font-size: 20px;
    display: flex;
    &::placeholder {
      color: #000;
    }
  }
  .content {
    width: 300px;
    height: 300px;
    font-size: 18px;
    padding: 5px;
    &::placeholder {
      color: #000;
    }
  }
  button {
    padding: 1rem;
    margin: 1rem;
    background: none;
  }
}
@media screen and (min-width: 768px) {
  .wrapper {
    input {
      font-size: 12px;
      height: 30px;
    }
    .content {
      height: 200px;
    }
  }
}
</style>
