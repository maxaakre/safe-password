<template>
  <div class="home" @click="$router.push('/signup')">
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
  .logga {
    position: absolute;
    width: 76px;
    height: 76px;
    left: 149px;
    top: 302px;
  }
  h1 {
    /* LCKD */

    position: absolute;
    width: 167px;
    height: 35px;
    left: 125px;
    top: 403px;

    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 44px;
    line-height: 60px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.15em;

    color: #ffffff;
  }
  h2 {
    /* KEEPING YOUR PASSWORDS SAFE */

    position: absolute;
    width: 215px;
    height: 69px;
    left: 80px;
    top: 452px;

    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 150%;
    /* or 30px */
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.15em;

    color: #ffbd21;
  }
}
</style>
