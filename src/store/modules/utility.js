import NetworkService from "@/services/NetworkService.js";

export const namespaced = true;

export const state = {
  utilBillers: [],
  utility: {},
};

export const mutations = {
  SET_UTILITIES(state, utilBillers) {
    state.utilBillers = utilBillers;
  },
  SET_UTILITY(state, utility) {
    state.utility = utility;
  },
};

export const actions = {
  getUtilsBillers({ commit }) {
    return NetworkService.getUtilsBillers().then((response) => {
      commit("SET_UTILITIES", response.data.data);
    });
  },
  fetchUility({ commit, getters, state }, id) {
    if (id == state.utility.id) {
      return state.utility;
    }

    var utility = getters.getUtilityById(id);

    if (utility) {
      commit("SET_UTILITY", utility);
      return utility;
    }
  },
};

export const getters = {
  getUtilityById: (state) => (id) => {
    let utility = state.utilBillers.find(
      (utility) => utility.id === parseInt(id)
    );
    return utility;
  },
};
