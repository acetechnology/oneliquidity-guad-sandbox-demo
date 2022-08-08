import * as giftcard from "@/store/modules/giftcard.js";
import * as airtime from "@/store/modules/airtime.js";
import * as utility from "@/store/modules/utility.js";
import * as notification from "@/store/modules/notification.js";

import { createStore } from "vuex";

export default createStore({
  modules: {
    giftcard,
    utility,
    airtime,
    notification,
  },
  state: {
    types: ["source", "destination"],
  },
});
