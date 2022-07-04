<template>
  <div class="container">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
  @import "~/assets/scss/reset.scss";
  @import "~/assets/scss/mixin.scss";
  @import "~/assets/scss/global.scss";
  
  .container {
    margin: 0 auto;
    padding: 4.8rem 2rem;
    width: 74rem;
    max-width: 100%;
  }
</style>