<template>
  <div class="shimmer">
    <p>Loading...</p>
  </div>
</template>

<style>
.shimmer {
  color: grey;
  -webkit-mask: linear-gradient(-60deg, #000 30%, #0005, #000 70%) right/300%
    100%;
  background-repeat: no-repeat;
  animation: shimmer 2.5s infinite;
}

@keyframes shimmer {
  100% {
    -webkit-mask-position: left;
  }
}
</style>
