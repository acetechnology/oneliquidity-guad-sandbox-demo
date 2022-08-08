import axios from "axios";

const apiClient = axios.create({
  baseURL: process.env.VUE_APP_ONEL_BASE_URL,
  withCredentials: false, // This is the default
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    authorization: process.env.VUE_APP_ONEL_BEARER_TOKEN,
  },
  timeout: 10000,
});

export default {
  getGiftCards() {
    return apiClient.get(`/guad/v1/giftcards/products`);
  },
  getAirtime() {
    return apiClient.get(`/guad/v1/airtime/operators`);
  },
  getUtilsBillers() {
    return apiClient.get(`/guad/v1/utilities/billers`);
  },
  fetchGiftcardProduct(id) {
    return apiClient.get(`/guad/v1/giftcards/products/` + id);
  },
  fetchOperator(id) {
    return apiClient.get(`/guad/v1/airtime/operators/` + id);
  },
  fetchAirtimeTX() {
    return apiClient.get(`/guad/v1/airtime/transactions/`);
  },
  postGiftcardOrder(body) {
    return apiClient.post(`/guad/v1/giftcards/orders`, body);
  },
  fetchGiftcardOrders() {
    return apiClient.get(`/guad/v1/giftcards/orders`);
  },
};
