<script setup>
  // 日付フォーマット変更
  import dayjs from 'dayjs'
  import utc from 'dayjs/plugin/utc'
  import timezone from 'dayjs/plugin/timezone'

  dayjs.extend(utc)
  dayjs.extend(timezone)

  // 投稿データの取得
  const ctx = useRuntimeConfig()
  const route = useRoute()
  const slug = route.params.slug

  const { data: article } = await useFetch(`/blogs/${slug}`, {
    baseURL: ctx.baseURL,
    headers: {
      "X-MICROCMS-API-KEY": ctx.apiKey,
    },
  })

  // head要素の変更
  useHead({
    titleTemplate: `${article.value.title} | dev-cards.net`,
    viewport: 'width=device-width, initial-scale=1',
    charset: 'utf-8',
    meta: [
      { name: 'description', content: 'WEBデザインまとめブログ。便利なツール、忘れてしまいがちなコードのまとめ。' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'dev-cards.net' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: `https://www.dev-cards.net/${article.id}` },
      { hid: 'og:title', property: 'og:title', content: `${article.value.title} | dev-cards.net` },
      { hid: 'og:description', property: 'og:description', content: 'WEBデザインまとめブログ。便利なツール、忘れてしまいがちなコードのまとめ。' },
      { hid: 'og:image', property: 'og:image', content: 'https://www.dev-cards.net/assets/images/ogimage.png' },
      { name: 'twitter:card', content: 'summary_large_image' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/images/favicon.png' },
      { rel: 'icon', type: 'image/svg+xml', href: '/images/favicon.svg' },
      { rel: 'apple-touch-icon', href: '/images/apple-touch-icon.png' },
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
    <LazyHeader />
    <main class="main">
      <article class="article">
        <h1 class="article__title">{{ article.title }}</h1>
        <p class="article__date">
          <span>最終更新日：</span>
          <time>{{ dayjs.utc(article.updatedAt).tz('Asia/Tokyo').format('YYYY/MM/DD') }}</time>
        </p>
        <div class="post" v-html="article.content" />
      </article>
    </main>
    <LazyFooter />
  </div>
</template>

<style lang="scss" scoped>
  @import "~/assets/scss/global.scss";

  .main {
    padding: 4rem 2.4rem;
    border-radius: 4px;
    background-color: $white;
  }

  .article__title {
    font-size: 2.8rem;
  }

  .article__date {
    opacity: .7;
    margin-top: 0.8rem;
    font-size: 1.2rem;
    text-align: right;
  }
</style>