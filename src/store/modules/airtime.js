import NetworkService from "@/services/NetworkService.js";

export const namespaced = true;

export const state = {
  airtimeOperators: {},
  airtimeOperator: {},
  airtimeTX: [],
};

export const mutations = {
  SET_AIRTIME(state, airtimeOperators) {
    state.airtimeOperators = airtimeOperators;
  },
  SET_OPERATOR(state, airtimeOperator) {
    state.airtimeOperator = airtimeOperator;
  },
  SET_TX(state, airtimeTX) {
    state.airtimeTX = airtimeTX;
  },
};

export const actions = {
  getAirtime({ commit }) {
    return NetworkService.getAirtime().then((response) => {
      commit("SET_AIRTIME", response.data.data);
    });
  },
  fetchOperator({ commit }, id) {
    if (id == state.airtimeOperator.id) {
      return state.airtimeOperator;
    }
    return NetworkService.fetchOperator(id).then((response) => {
      commit("SET_OPERATOR", response.data.data);
      return response.data.data;
    });
  },
  fetchTX({ commit }) {
    return NetworkService.fetchAirtimeTX().then((response) => {
      commit("SET_TX", response.data.data);
      return response.data.data;
    });
  },
};
