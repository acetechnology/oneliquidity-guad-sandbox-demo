import { createRouter, createWebHistory } from "vue-router";
import GiftCards from "../views/GiftCards.vue";
import Utilities from "../views/Utilities.vue";
import Airtime from "../views/Airtime.vue";
import Landing from "../views/Landing.vue";
import NProgress from "nprogress";
import NotFound from "../views/NotFound.vue";
import NetworkIssue from "../views/NetworkIssue.vue";
import store from "../store/store";
import GiftcardShow from "../views/GiftcardShow.vue";
import OperatorShow from "../views/OperatorShow.vue";
import UtilityShow from "../views/UtilityShow.vue";

const routes = [
  {
    path: "/",
    name: "Landing",
    component: Landing,
    props: true,
  },
  {
    path: "/giftcards",
    name: "giftcards",
    component: GiftCards,
    props: true,
  },
  {
    path: "/airtime",
    name: "airtime",
    component: Airtime,
    props: true,
  },
  {
    path: "/utilities",
    name: "utilities",
    component: Utilities,
    props: true,
  },
  {
    path: "/giftcards/products/:id",
    name: "giftcard-show",
    component: GiftcardShow,
    props: true,
    async beforeEnter(routeTo, routeFrom, next) {
      await store
        .dispatch("giftcard/fetchProduct", routeTo.params.id)
        .then((giftcard) => {
          routeTo.params.giftcard = giftcard;
          next();
        })
        .catch((error) => {
          if (error.response && error.response.status == 404) {
            next({ name: "404", params: { resource: "giftcard" } });
          } else {
            next({ name: "network-issue" });
          }
        });
    },
  },
  {
    path: "/airtime/operator/:id",
    name: "operator-show",
    component: OperatorShow,
    props: true,
    async beforeEnter(routeTo, routeFrom, next) {
      await store
        .dispatch("airtime/fetchOperator", routeTo.params.id)
        .then((airtimeOperator) => {
          routeTo.params.airtimeOperator = airtimeOperator;
          next();
        })
        .catch((error) => {
          if (error.response && error.response.status == 404) {
            next({ name: "404", params: { resource: "operator" } });
          } else {
            next({ name: "network-issue" });
          }
        });
    },
  },
  {
    path: "/utilities/:id",
    name: "utility-show",
    component: UtilityShow,
    props: true,
    async beforeEnter(routeTo, routeFrom, next) {
      await store
        .dispatch("utility/fetchUility", routeTo.params.id)
        .then((utility) => {
          if (utility) {
            routeTo.params.utility = utility;
            next();
          } else {
            next({ name: "utilities" });
          }
        })
        .catch((error) => {
          if (error.response && error.response.status == 404) {
            next({ name: "404", params: { resource: "operator" } });
          } else {
            next({ name: "network-issue" });
          }
        });
    },
  },
  {
    path: "/404",
    name: "404",
    component: NotFound,
    props: true,
  },
  {
    path: "/network-issue",
    name: "network-issue",
    component: NetworkIssue,
  },
  {
    path: "/:catchAll(.*)",
    redirect: { name: "404", params: { resource: "page" } },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
router.beforeEach((routeTo, routeFrom, next) => {
  NProgress.start();
  next();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
