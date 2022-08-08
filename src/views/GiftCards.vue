<template>
  <div>
    <BaseIcon style="pointer: cursor" @click="$router.go(-1)" name="skip-back">
      <address style="margin-right: 5px">GO BACK</address>
    </BaseIcon>
    <h1>GUAD - Giftcards</h1>
    <Shimmer v-if="!Object.keys(giftcard.gifts).length" />
    <Giftcard
      v-else
      v-for="giftcard in giftcard.gifts.products"
      :key="giftcard.id"
      :data="giftcard"
    />
  </div>
</template>

<script>
import { mapState } from "vuex";
import store from "@/store/store";
import Giftcard from "@/components/Giftcard.vue";
import Shimmer from "@/components/Shimmer.vue";
function getGiftCards() {
  store.dispatch("giftcard/getGiftCards", {});
}

export default {
  beforeRouteEnter() {
    getGiftCards();
  },
  beforeRouteUpdate() {
    getGiftCards();
  },
  components: {
    Giftcard,
    Shimmer,
  },
  computed: {
    ...mapState(["giftcard"]),
  },
};
</script>
