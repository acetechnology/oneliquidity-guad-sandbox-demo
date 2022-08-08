<template>
  <router-link
    class="user-link"
    :to="{ name: 'utility-show', params: { id: data.id } }"
  >
    <div class="product">
      <div class="product-image">
        <img src="/brand.png" />
      </div>
      <div class="product-info">
        <h3>{{ data.name }}</h3>
        <p>Country: {{ data.countryName }}</p>
        <p>Type: {{ data.type.replace(/_/g, " ") }}</p>
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
</style>
