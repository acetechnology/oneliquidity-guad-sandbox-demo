<template>
  <div>
    <BaseIcon style="pointer: cursor" @click="$router.go(-1)" name="skip-back">
      <address style="margin-right: 5px">GO BACK</address>
    </BaseIcon>
    <div class="card-header">
      <span class="eyebrow"
        >Country - {{ airtimeOperator.operator.country.name }}</span
      >
      <h1 class="title">{{ airtimeOperator.operator.name }}</h1>
    </div>
    <BaseIcon name="credit-card">
      <h2 style="margin-right: 5px; margin-top: 0px; margin-bottom: 0px">
        {{ airtimeOperator.operator.senderFee }}
      </h2>
      Most Popular
      <address>
        {{ airtimeOperator.operator.mostPopularAmount }}
      </address>
    </BaseIcon>

    <p>All - {{ airtimeOperator.operator.fixedAmounts }}</p>

    <BaseButton
      style="margin: 5px; width: 50%"
      type="submit"
      buttonClass="btn -fill-gradient"
      @click="getAirtimeTx"
      >TopUp Airtime</BaseButton
    >
    <BaseButton
      style="margin: 5px; width: 50%"
      type="submit"
      buttonClass="btn -fill-gradient"
      @click="getAirtimeTx"
      >Fetch Transactions</BaseButton
    >
    <br />
    <div v-if="tx.length">
      {{ tx }}
    </div>
    <div v-else>No Transactions</div>

    <div v-show="showOrder">
      <form @submit.prevent="postOrder">
        <h3>Post New Gift Card Order</h3>
        <BaseInput
          label="Product ID"
          v-model="order.productId"
          disabled
          type="text"
          placeholder="Product ID"
          class="field"
          :class="{ error: v$.order.productId.$error }"
          @blur="v$.order.productId.$touch()"
        />

        <template v-if="v$.order.productId.$error">
          <p v-if="!v$.order.productId.required" class="errorMessage">
            Product ID is required.
          </p>
        </template>

        <BaseInput
          label="Quantity"
          v-model.number="order.quantity"
          type="number"
          :min="1"
          placeholder="Quantity"
          class="field"
          :class="{ error: v$.order.quantity.$error }"
          @blur="v$.order.quantity.$touch()"
        />

        <template v-if="v$.order.quantity.$error">
          <p v-if="!v$.order.quantity.required" class="errorMessage">
            Quantity is required.
          </p>
        </template>

        <BaseInput
          label="Unit Price"
          v-model.number="order.unitPrice"
          type="number"
          placeholder="Unit Price"
          class="field"
          :class="{ error: v$.order.unitPrice.$error }"
          @blur="v$.order.unitPrice.$touch()"
        />

        <template v-if="v$.order.unitPrice.$error">
          <p v-if="!v$.order.unitPrice.required" class="errorMessage">
            Unit Price is required.
          </p>
        </template>

        <BaseInput
          label="senderName"
          v-model="order.senderName"
          type="text"
          placeholder="Sender Name"
          class="field"
          :class="{ error: v$.order.senderName.$error }"
          @blur="v$.order.senderName.$touch()"
        />

        <template v-if="v$.order.senderName.$error">
          <p v-if="!v$.order.senderName.required" class="errorMessage">
            Sender Name is required.
          </p>
        </template>

        <BaseInput
          label="Recipient Email"
          v-model="order.recipientEmail"
          type="text"
          placeholder="Recipient Email"
          class="field"
          :class="{ error: v$.order.recipientEmail.$error }"
          @blur="v$.order.recipientEmail.$touch()"
        />

        <template v-if="v$.order.recipientEmail.$error">
          <p v-if="!v$.order.recipientEmail.required" class="errorMessage">
            Recipient Email is required.
          </p>
        </template>

        <BaseInput
          label="Country Code"
          v-model="order.recipientPhoneDetails.countryCode"
          type="text"
          placeholder="Country Code"
          class="field"
          :class="{ error: v$.order.recipientPhoneDetails.countryCode.$error }"
          @blur="v$.order.recipientPhoneDetails.countryCode.$touch()"
        />

        <template v-if="v$.order.recipientPhoneDetails.countryCode.$error">
          <p
            v-if="!v$.order.recipientPhoneDetails.countryCode.required"
            class="errorMessage"
          >
            Country Code is required.
          </p>
        </template>
        <BaseInput
          label="Phone Number"
          v-model.number="order.recipientPhoneDetails.phoneNumber"
          type="text"
          placeholder="Phone Number"
          class="field"
          :class="{ error: v$.order.recipientPhoneDetails.phoneNumber.$error }"
          @blur="v$.order.recipientPhoneDetails.phoneNumber.$touch()"
        />

        <template v-if="v$.order.recipientPhoneDetails.phoneNumber.$error">
          <p
            v-if="!v$.order.recipientPhoneDetails.phoneNumber.required"
            class="errorMessage"
          >
            Phone Numbber is required.
          </p>
        </template>

        <BaseButton
          type="submit"
          buttonClass="-fill-gradient"
          :disabled="v$.$anyError"
          >Submit</BaseButton
        >
        <p v-if="v$.$anyError" class="errorMessage">
          Please fill out the required field(s).
        </p>
      </form>
    </div>
  </div>
</template>
<script>
import NProgress from "nprogress";
export default {
  data() {
    return {
      tx: [],
    };
  },
  props: {
    airtimeOperator: {
      type: Object,
      required: true,
    },
  },
  methods: {
    getAirtimeTx() {
      NProgress.start();
      this.$store
        .dispatch("airtime/fetchTX")
        .then((res) => {
          //you can do it from the store or here
          console.log(res);
          this.tx = res.data.data;
        })
        .catch(() => {
          NProgress.done();
        });
    },
  },
};
</script>
<style scoped>
.location {
  margin-bottom: 0;
}
.location > .icon {
  margin-left: 10px;
}
.card-header > .title {
  margin: 0;
}
.list-group {
  margin: 0;
  padding: 0;
  list-style: none;
}
.list-group > .list-item {
  padding: 1em 0;
  border-bottom: solid 1px #e5e5e5;
}
.action-buttons {
  display: inline-flex;
}
</style>
