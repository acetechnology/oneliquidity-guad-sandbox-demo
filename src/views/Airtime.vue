<template>
  <div>
    <BaseIcon style="pointer: cursor" @click="$router.go(-1)" name="skip-back">
      <address style="margin-right: 5px">GO BACK</address>
    </BaseIcon>
    <h1>GUAD - AIRTIME OPERATORS</h1>
    <Shimmer v-if="!Object.keys(airtime.airtimeOperators).length" />
    <Operator
      v-else
      v-for="operator in airtime.airtimeOperators.operators"
      :key="operator.operatorId"
      :data="operator"
    />
  </div>
</template>

<script>
import { mapState } from "vuex";
import store from "@/store/store";
import Operator from "@/components/Operator.vue";
import Shimmer from "@/components/Shimmer.vue";

function getAirtime() {
  store.dispatch("airtime/getAirtime", {});
}

export default {
  beforeRouteEnter() {
    getAirtime();
  },
  beforeRouteUpdate() {
    getAirtime();
  },
  components: {
    Operator,
    Shimmer,
  },
  computed: {
    ...mapState(["airtime"]),
  },
};
</script>
