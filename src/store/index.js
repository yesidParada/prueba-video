import Vue from "vue";
import Vuex from "vuex";
import path from "../utils/params";

Vue.use(Vuex);

const api = path["path"];

export default new Vuex.Store({
  state: {
    data: [],
    detail: [],
    type: "",
    search: "",
    maxPagination: 0,
    enabledPopup: false,
    key: "&apikey=8bc0d04a"
  },
  mutations: {
    setData(state, response) {
      state.maxPagination = Math.round(parseInt(response.totalResults) / 10);
      state.data = response;
    },
    setSearch(state, value) {
      state.search = value;
    },
    setType(state, value) {
      state.type = value;
    },
    setEnabledPopup(state, close) {
      if (!close) {
        state.detail = [];
      }
      state.enabledPopup = close;
    },
    setDetail(state, response) {
      response.Genre = response.Genre.split(",");
      state.detail = response;
    }
  },
  actions: {
    getData: async function({ commit }, page = 1) {
      const response = await fetch(
        `${api}?s=${this.state.search}&type=${this.state.type}&page=${page}${this.state.key}`
      );
      const data = await response.json();
      commit("setData", data);
    },
    getId: async function({ commit }, id) {
      const response = await fetch(`${api}?i=${id}&plot=full${this.state.key}`);
      const data = await response.json();
      commit("setDetail", data);
      commit("setEnabledPopup", true);
    }
  },
  modules: {}
});
