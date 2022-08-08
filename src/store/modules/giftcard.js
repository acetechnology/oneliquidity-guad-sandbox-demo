import NetworkService from "@/services/NetworkService.js";

export const namespaced = true;

export const state = {
  gifts: {},
  giftcard: {},
};

export const mutations = {
  SET_GIFTCARDS(state, gifts) {
    state.gifts = gifts;
  },
  SET_GIFTCARD(state, giftcard) {
    state.giftcard = giftcard;
  },
};

export const actions = {
  getGiftCards({ commit }) {
    return NetworkService.getGiftCards().then((response) => {
      commit("SET_GIFTCARDS", response.data.data);
    });
  },
  fetchProduct({ commit }, id) {
    if (id == state.giftcard.id) {
      return state.giftcard;
    }
    return NetworkService.fetchGiftcardProduct(id).then((response) => {
      commit("SET_GIFTCARD", response.data.data);
      return response.data.data;
    });
  },
  fetchGiftcardOrders({ dispatch }) {
    return NetworkService.fetchGiftcardOrders()
      .then((response) => {
        console.log(response.data.data);
        return response.data.data;
      })
      .catch((error) => {
        console.log(error);
        const notification = {
          type: "error",
          message: "There was a problem fetching your orders: " + error.message,
        };
        dispatch("notification/add", notification, { root: true });
        throw error;
      });
  },
  postOrder({ dispatch }, body) {
    return NetworkService.postGiftcardOrder(body)
      .then((req) => {
        const notification = {
          type: "success",
          message: "Your order was sent successfully!",
        };
        dispatch("notification/add", notification, { root: true });
        return req;
      })
      .catch((error) => {
        console.log(error);
        const notification = {
          type: "error",
          message: "There was a problem sending your order: " + error.message,
        };
        dispatch("notification/add", notification, { root: true });
        throw error;
      });
  },
};
