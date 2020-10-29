<template>
  <div class="home" @click="$router.push('/login')">
    <img class="logga" src="@/assets/logga.png" alt="" />
    <h1>LCKD</h1>
    <h2>Welcome to secure password</h2>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
};
</script>
<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100vh;
  background: #15085f;
  display: flex;
  flex-direction: column;
  margin: auto;
  img {
    margin: 15rem auto 0 auto;
    display: flex;
    width: 76px;
    height: 76px;
    background: #ffffff;
  }
  h1 {
    color: white;
  }
  h2 {
    /* or 30px */
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.15em;

    color: #ffbd21;
  }
}
</style>
