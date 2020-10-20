<template>
  <div class="wrapper">
    <nav class="nav-bar">
      <div class="nav-links">
        <router-link to="/">Passord site</router-link>
        <router-link v-if="auth.loggedIn" to="/NewPassword"
          >Create Passord</router-link
        >
        <router-link v-if="!auth.loggedIn" to="/signup">Register</router-link>
      </div>
      <router-link class="home-btn" to="/">
        Home
      </router-link>
      <Login />
      <div class="hamburger" @click="$store.commit('TOGGLE_SIDE_MENU')">
        <i class="fas fa-bars"></i>
      </div>
    </nav>
  </div>
</template>

<script>
import Login from "./Login.vue";
export default {
  components: {
    Login,
  },
  methods: {
    toggleCartModal() {
      this.$store.commit("TOGGLE_SIDE_MENU");
    },
  },
  computed: {
    auth() {
      return this.$store.state.auth;
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  .nav-bar {
    z-index: 3;
    width: 100%;
    height: 70px;
    display: flex;
    padding: 0 2rem;
    position: relative;
    background: #fff;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid rgb(107, 104, 104);

    .nav-links,
    span.cart-icon {
      display: none;

      a {
        color: #000;
        text-decoration: none;

        &:hover {
          color: #833c3c;
          opacity: 0.3;
          transition: 0.3s;
        }
      }
    }

    span {
      color: rgb(3, 3, 3);
      cursor: pointer;
      font-size: 2rem;
      position: relative;
    }
  }

  .home-btn {
    text-decoration: none;
  }
}

@media screen and (min-width: 768px) {
  .wrapper {
    width: 100%;
    .nav-bar {
      top: 0;
      padding: 0 2rem;
      width: 100%;
      background: #fff;
      border-bottom: none;
      span.home-icon,
      span.cart-icon,
      .hamburger {
        display: none;
      }
      .m {
        display: none;
      }

      .nav-links {
        display: block;
        width: 100%;

        .brand {
          margin-left: 0;
          font-size: 1.2rem;
          font-weight: bold;
          padding-right: 2rem;
        }

        a {
          color: #000;
          margin-left: 2rem;
        }
      }
    }
  }
}
</style>
