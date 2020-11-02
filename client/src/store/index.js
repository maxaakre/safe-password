import Vue from "vue";
import Vuex from "vuex";
// import axios from "axios";
import * as API from "@/api";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cookieWindow: false,
    items:[],
    isOpen: false,
    showModal: false,
    accounts: [],
    dataEmail: [],
    auth: {
      loggedIn: false,
      error: false,
      token: null,
      user: {
        role: "user",
      },
    },
 
  },
  mutations: {
    newPassword(state,password){
      state.accounts= password
    },
    toggleCookie(state, toggle){
      state.cookieWindow = toggle
    },
    saveEmail(state, credentials){
      console.log(credentials)
      state.dataEmail = credentials
    },

    removeUser(state, userId){
      state.auth.user = state.auth.user.filter(
        user => user._id != userId
      )
    },
    toggleLogin(state) {
      state.showModal = !state.showModal;
    },
    TOGGLE_SIDE_MENU(state) {
      state.isOpen = !state.isOpen;
    },
    auth(state, body) {
      state.auth.user = body.user;
      state.auth.loggedIn = true;

      API.setAuthHeader(body.token);

      const user = body.user;
      const token = body.token;

      // Set session
      sessionStorage.setItem("users", JSON.stringify({ user, token }));
    },
    login(state) {
      state.auth.loggedIn = true;
      state.auth.error = false;
    },
    failLogin(state) {
      state.auth.login = false;
      state.auth.error = true;
      API.clearAuthHeader();
    },
    logout(state) {
      state.auth.loggedIn = false;
      state.auth.error = false;
      API.clearAuthHeader();
      sessionStorage.removeItem("users");
    },
    // setEventData(state, event) {
    //   const eventExists = state.eventList.some((item) => item.id === event.id);
    //   if (eventExists) {
    //     state.eventList = state.eventList.filter((e) => e.id !== event.id);
    //   } else {
    //     state.eventList.push(event);
    //     localStorage.setItem("attended", JSON.stringify(state.eventList));
    //   }
    // },
 
    addPassword(state, product) {
      state.productItems.push(product);
      state.productItems = state.items.sort((a, b) => a.title > b.title);
    },
    setProducts(state, products) {
      state.productItems = products;
    },
  
  },
  actions: {
   
    userRemove(ctx){
      console.log("DELETE error", ctx.state.dataEmail)
      API.remove(ctx.state.dataEmail)
      .then(response => {
        console.log(response)
        ctx.commit('removeUser', ctx.dataEmail)
      })
      .catch(console.log)
    },
    getAccounts({commit, newPassword}) {
      API.dipslayAccounts(newPassword)
      .then((password)=>{
        commit('newPassword', password)
      })
      .catch(console.log)
    },
    // readProducts({ commit }) {
    //   API.fetchPassword()
    //     .then((products) => {
    //       commit("setProducts", products);
    //     })
    //     .catch(console.log);
    // },

    register({ commit }, newUser) {
      API.register(newUser)
        .then((user) => {
          commit("auth", user);
          commit("login");
          alert("you are registred");
        })
        .catch(console.log);
    },
    login({ commit }, credentials) {
      API.login(credentials)
        .then((tokenData) => {
          commit("auth", tokenData);
        })
        .catch((error) => {
          console.log(error);
          commit("failLogin");
        });
    },
    logout({ commit }) {
      commit("logout");
    },
    createPassword(ctx) {
      API.createPassword(ctx.state.dataEmail)
        .then((product) => {
          ctx.commit("addPassword", product);
          alert("Your password is added go to home");
        })
        .catch(console.log);
    },
  },
 
});
