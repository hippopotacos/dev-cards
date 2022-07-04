<script setup>
  // 日付フォーマット変更
  import dayjs from 'dayjs'
  import utc from 'dayjs/plugin/utc'
  import timezone from 'dayjs/plugin/timezone'

  dayjs.extend(utc)
  dayjs.extend(timezone)

  // 投稿データの取得
  const ctx = useRuntimeConfig()
  const { data } = await useFetch("/blogs", {
    baseURL: ctx.baseURL,
    headers: {
      "X-MICROCMS-API-KEY": ctx.apiKey,
    },
  })

   // head要素の変更
  useHead({
    title: 'dev-cards.net',
    viewport: 'width=device-width, initial-scale=1',
    charset: 'utf-8',
    meta: [
      { name: 'description', content: 'WEBデザインまとめブログ。便利なツール、忘れてしまいがちなコードのまとめ。' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'dev-cards.net' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'https://www.dev-cards.net' },
      { hid: 'og:title', property: 'og:title', content: 'dev-cards.net' },
      { hid: 'og:description', property: 'og:description', content: 'WEBデザインまとめブログ。便利なツール、忘れてしまいがちなコードのまとめ。' },
      { hid: 'og:image', property: 'og:image', content: 'https://www.dev-cards.net/assets/images/ogimage.png' },
      { name: 'twitter:card', content: 'summary_large_image' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/assets/images/favicon.png' },
      { rel: 'icon', type: 'image/svg+xml', href: '/assets/images/favicon.svg' },
      { rel: 'apple-touch-icon', href: '/assets/images/apple-touch-icon.png' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@500;700&display=swap' }
    ],
    htmlAttrs: {
      lang: 'ja'
    },
  })
</script>

<template>
  <div>
    <h1 class="hidden">WEBデザインまとめブログ</h1>
    <LazyHeader />
    <main class="main">
      <ul class="list">
        <li v-for="article in data.contents" :key="article.id">
          <nuxt-link :to="`/${article.id}`" class="list__link">
            <span class="list__date">{{ dayjs.utc(article.updatedAt).tz('Asia/Tokyo').format('YYYY/MM/DD') }}</span>
            <span class="list__title">{{ article.title }}</span>
          </nuxt-link>
        </li>
      </ul>
    </main>
    <LazyFooter />
  </div>
</template>

<style lang="scss" scoped>
  @import "~/assets/scss/reset.scss";
  @import "~/assets/scss/mixin.scss";
  @import "~/assets/scss/global.scss";

  .hidden {
    @include hidden;
  }

  .list {
    display: grid;
    grid-template-columns: repeat(4, minmax(auto, 1fr));
    grid-gap: 10px;
    padding: 0;
    list-style: none;
  }

  @media not all and (min-width: 580px) {
    .list {
      grid-template-columns: repeat(3, minmax(auto, 1fr));
    }
  }

  @media not all and (min-width: 420px) {
    .list {
      grid-template-columns: repeat(2, minmax(auto, 1fr));
    }
  }

  .list__link {
    display: block;
    padding: 1.2rem;
    height: 100%;
    min-height: 150px;
    border: 2px solid $primary;
    border-radius: 4px;
    font-weight: bold;
    text-decoration: none;
    color: inherit;
    background: $white;
  }

  .list__link:visited {
    color: $primary;
  }

  @media (hover: hover) and (pointer: fine) {
    .list__link:hover {
      border: 2px solid $white;
      color: $white;
      background: $tertiary;
    }
  }
  .list__date {
    display: block;
    font-size: 1.2rem;
  }

  .list__title {
    display: block;
    margin-top: 2rem;
    font-size: 1.6rem;
  }
</style>