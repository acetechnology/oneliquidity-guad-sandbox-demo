<template>
  <div>
    <h1>GUAD</h1>
    <BaseButton
      style="margin: 5px"
      type="submit"
      buttonClass="btn -fill-gradient"
      @click="$router.push({ name: 'giftcards' })"
      >Gift Cards</BaseButton
    >

    <BaseButton
      style="margin: 5px"
      type="submit"
      buttonClass="btn -fill-gradient"
      @click="$router.push({ name: 'airtime' })"
      >Airtime</BaseButton
    >

    <BaseButton
      style="margin: 5px"
      type="submit"
      buttonClass="btn -fill-gradient"
      @click="$router.push({ name: 'utilities' })"
      >Utilities</BaseButton
    >
  </div>
</template>
