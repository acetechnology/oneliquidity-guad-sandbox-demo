<template>
  <router-link
    class="user-link"
    :to="{ name: 'giftcard-show', params: { id: data.id } }"
  >
    <div class="product">
      <div class="product-image">
        <img src="/brand.png" />
      </div>
      <div class="product-info">
        <h3>{{ data.name }}</h3>
        <p>{{ data.country.name }}</p>
        <p>Senders Fee: {{ data.currenyCode }} {{ data.senderFee }}</p>
        <BaseButton buttonClass="btn -fill-gradient">View GUAD</BaseButton>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
.product {
  display: inline-flex;
  width: 45%;
  flex-flow: wrap;
  padding: 1rem;
}
h3,
p {
  margin-bottom: 1px;
  margin-top: 1px;
}
img {
  width: 70%;
  margin: 40px;
}

.product-image {
  width: 80%;
}

.product-image,
.product-info {
  margin-top: 10px;
  width: 50%;
}

.shimmer {
  color: grey;
  display: inline-block;
  -webkit-mask: linear-gradient(-60deg, #000 30%, #0005, #000 70%) right/300%
    100%;
  background-repeat: no-repeat;
  animation: shimmer 2.5s infinite;
  font-size: 50px;
  max-width: 200px;
}

@keyframes shimmer {
  100% {
    -webkit-mask-position: left;
  }
}
</style>
