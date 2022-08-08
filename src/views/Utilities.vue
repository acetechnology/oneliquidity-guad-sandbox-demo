<template>
  <div>
    <BaseIcon style="pointer: cursor" @click="$router.go(-1)" name="skip-back">
      <address style="margin-right: 5px">GO BACK</address>
    </BaseIcon>
    <h1>GUAD - Utility Billers</h1>
    <Shimmer v-if="!Object.keys(utility.utilBillers).length" />
    <Utility
      v-else
      v-for="biller in utility.utilBillers"
      :key="biller.id"
      :data="biller"
    />
  </div>
</template>

<script>
import { mapState } from "vuex";
import store from "@/store/store";
import Utility from "@/components/Utility.vue";
import Shimmer from "@/components/Shimmer.vue";

function getUtilsBillers() {
  store.dispatch("utility/getUtilsBillers", {});
}

export default {
  beforeRouteEnter() {
    getUtilsBillers();
  },
  beforeRouteUpdate() {
    getUtilsBillers();
  },
  components: {
    Utility,
    Shimmer,
  },
  computed: {
    ...mapState(["utility"]),
  },
};
</script>
