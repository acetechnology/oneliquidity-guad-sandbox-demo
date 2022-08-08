<template>
  <div>
    <BaseIcon style="pointer: cursor" @click="$router.go(-1)" name="skip-back">
      <address style="margin-right: 5px">GO BACK</address>
    </BaseIcon>
    <div class="card-header">
      <span class="eyebrow">Country - {{ utility.countryName }}</span>
      <h1 class="title">{{ utility.name }}</h1>
    </div>
    <BaseIcon name="credit-card">
      <h2 style="margin-right: 5px; margin-top: 0px; margin-bottom: 0px">
        Type: {{ utility.type.replace(/_/g, " ") }}
      </h2>
      <address>
        {{ utility.serviceType }}
      </address>
    </BaseIcon>
    <p>MAX TX Amount - {{ utility.maxTransactionAmount }}</p>
    <p>MIN TX Amount - {{ utility.minTransactionAmount }}</p>
    <p>All - {{ utility.fx }}</p>
  </div>
</template>
<script>
export default {
  props: {
    utility: {
      type: Object,
      required: true,
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
