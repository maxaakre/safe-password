import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import * as API from "@/api";

// const API = "api/meets";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    eventList: [],

    items: [],
    isOpen: false,
    showModal: false,
    productItems: [],
    loding: false,
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
    toggleLogin(state) {
      state.showModal = !state.showModal;
    },
    displayMeets(state, items) {
      state.items = items;
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
    setEventData(state, event) {
      const eventExists = state.eventList.some((item) => item.id === event.id);
      if (eventExists) {
        state.eventList = state.eventList.filter((e) => e.id !== event.id);
      } else {
        state.eventList.push(event);
        localStorage.setItem("attended", JSON.stringify(state.eventList));
      }
    },
    setEventArray(state, events) {
      state.eventList = events;
    },
    setEventReview(state, eventReview) {
      state.eventReviews.push(eventReview);
      localStorage.setItem("reviews", JSON.stringify(state.eventReviews));
    },
    setReviewsArray(state, reviews) {
      state.eventReviews = reviews;
    },
    addPassword(state, product) {
      state.productItems.push(product);
      state.productItems = state.items.sort((a, b) => a.title > b.title);
    },
    setProducts(state, products) {
      state.productItems = products;
    },
    removeProduct(state, productId) {
      state.productItems = state.productItems.filter(
        (product) => product._id != productId
      );
    },
  },
  actions: {
    async getMeetList(context) {
      let resp = await axios.get(API);
      context.commit("displayMeets", resp.data.meet);
      console.log(resp);
    },
    readProducts({ commit }) {
      API.fetchPassword()
        .then((products) => {
          commit("setProducts", products);
        })
        .catch(console.log);
    },

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
    createPassword({ commit }, newProduct) {
      API.createPassword(newProduct)
        .then((product) => {
          commit("addPassword", product);
          alert("Your password is added go to home");
        })
        .catch(console.log);
    },
  },
  getters: {
    showCurrentReview: (state) => (id) => {
      return state.eventReviews.filter((review) => review.id == id);
    },
  },
});
