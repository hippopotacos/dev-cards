<template>
  <header class="header">
    <p class="header__name">
      <a href="/" class="header__link">dev-cards.net</a>
    </p>
    <div class="header__description">
      <p class="header__text">便利なツール、忘れてしまいがちなコードのまとめ。</p>
      <p class="header__text">
        CodePenは<a href="https://codepen.io/mutneg/pens/public" target="blank" rel="noopenner noreferrer">こちら</a>から。
      </p>
    </div>
  </header>
</template>

<style lang="scss" scoped>
  @import "~/assets/scss/reset.scss";
  @import "~/assets/scss/mixin.scss";
  @import "~/assets/scss/global.scss";
  
  .header {
    margin: 0 auto 4.8rem;
  }

  .header__heading {
    @include hidden;
  }

  .header__name {
    font-weight: bold;
    font-size: 4.8rem;
  }

  .header__link {
    text-decoration: none;
    color: inherit;
  }

  @media (hover: hover) and (pointer: fine) {
    .header__link:hover {
      color: $tertiary;
      text-decoration: underline;
    }
  }

  .header__description {
    margin-top: 0.4rem;
  }

  .header__text {
    font-size: 1.4rem;
  }

  @media not all and (min-width: 768px) {
    .header__name {
      font-size: 3.6rem;
    }

    .header__text {
      font-size: 1.3rem;
    }
  }
</style>