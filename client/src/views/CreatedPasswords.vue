<template>
  <div class="add-account">
    <div class="header">
      <img src="@/assets/logga.png" alt="login" />
      <h4>LCKD</h4>
    </div>
    <div class="input-wrapper" v-if="accounts">
      <h4 class="label"> Stored passwords</h4>
      <div class="display-accounts">
        <input v-for="(account, index) in accounts" :key=index
        type="text" class="input-field" v-model="account.site" @click="showAccount(account.password)" />
      </div>
    </div>
      <h2 class="display-accounts" v-else>No accounts added</h2>
        <input type="text" class="input-field" v-model="selectedAccount" />
        <button class="button" @click="addAccount">New LCKD</button>
  </div>
</template>

<script>
export default {

data() {
  return {
    selectedAccount:""
  }
},
computed:{
        accounts() {
            return this.$store.state.accounts;
        }
},
methods: {
        addAccount() {
            this.$router.push('/newpassword')
        },

        showAccount(account) {
            this.selectedAccount = account;
        }
    },
mounted() {
        this.$store.dispatch('getAccounts');
} 
};
</script>

<style lang="scss" scoped>
.add-account {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
}

.header {
    // display: flex;
    // align-self: flex-start;
    // align-items: center;
    // margin-left: 1.8rem;
    // margin-bottom: 1rem;
    margin-top: 1.1rem;
}

.header h4 {
    margin-left: 0.5rem;
}

.title {
    margin-top: auto;
    text-transform: uppercase;
    font-size: 1.1em;
}

.input-wrapper {
    display: flex;
    flex-direction: column;
}

.first {
    margin-top: auto;
}

.label {
    color: #000000;
    align-self: flex-start;
    background-color: #ffbd21;
    text-transform: uppercase;
    padding: 0.2rem;
    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 0.9em;
    line-height: 19px;
    border-radius: 8px 8px 0px 0px;
}

.input-field {
    min-width: 250px;
    border: 1px solid #ffbd21;
    border-radius: 0px 4px 4px 4px;
    background-color: transparent;
    padding: 1rem;
    color: #ffbd21;
    margin-bottom: 2rem;
    font-size: 1.3em;
}

.button {
    min-width: 250px;
    padding: 0.8rem;
    background-color: #FFFFFF;
    border-radius: 8px;
    font-family: Open Sans;
    font-weight: bold;
    font-size: 1.3em;
    margin-top: auto;
    margin-bottom: 1.5rem;
    text-transform: uppercase;
}</style>
