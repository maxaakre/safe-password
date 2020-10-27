<template>
  <ul class="side-menu" :class="{ toggle: isOpen }">
    <li>
      <router-link to="/" @click.native="$store.commit('TOGGLE_SIDE_MENU')"
        >Home</router-link
      >
    </li>
    <li>
      <router-link
        v-if="auth.loggedIn"
        class="link"
        to="/password/:id"
        @click.native="$store.commit('TOGGLE_SIDE_MENU')"
        >Your passwords</router-link
      >
    </li>
    <li>
      <router-link
        class="link"
        to="login"
        @click.native="$store.commit('TOGGLE_SIDE_MENU')"
        >Login</router-link
      >
    </li>
    <li>
      <router-link
        v-if="auth.loggedIn"
        to="newpassword"
        @click.native="$store.commit('TOGGLE_SIDE_MENU')"
        >New Password</router-link
      >
    </li>
    <li>
      <router-link to="signup" @click.native="$store.commit('TOGGLE_SIDE_MENU')"
        >Signup</router-link
      >
    </li>
  </ul>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Appsidemenu",
  computed: {
    ...mapState(["isOpen"]),
    auth() {
      return this.$store.state.auth;
    },
  },
};
</script>

<style lang="scss" scoped>
.side-menu {
  display: none;
  text-align: right;
  background: #ffbd21;
  //   color: #15085f;
  width: 100%;

  a {
    display: block;
    color: #ffffff;
    padding: 1rem;
    width: 100%;

    margin: auto;
  }
  li {
    list-style: none;
    width: 100%;
    color: #15085f;
  }

  &.toggle {
    display: block;
  }
}

@media screen and (min-width: 1024px) {
  .side-menu {
    display: none;
  }
}
</style>
