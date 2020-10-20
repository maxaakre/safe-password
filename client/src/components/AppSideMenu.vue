<template>
  <ul class="side-menu" :class="{ toggle: isOpen }">
    <li>
      <router-link to="/" @click.native="$store.commit('TOGGLE_SIDE_MENU')"
        >Home</router-link
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
        to="createPass"
        @click.native="$store.commit('TOGGLE_SIDE_MENU')"
        >New Password</router-link
      >
    </li>
    <li>
      <router-link to="Signup" @click.native="$store.commit('TOGGLE_SIDE_MENU')"
        >Signup</router-link
      >
    </li>
  </ul>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Appsidemenu",
  computed: { ...mapState(["isOpen"]) },
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
