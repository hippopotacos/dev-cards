<script setup>
  const ctx = useRuntimeConfig();
  const { data } = await useFetch("/blogs", {
    baseURL: ctx.baseURL,
    headers: {
      "X-MICROCMS-API-KEY": ctx.apiKey,
    },
  });
</script>

<template>
  <div>
    <header>
      <h1>dev-toolbox</h1>
    </header>
    <main>
      <ul>
        <li v-for="article in data.contents" :key="article.id">
         <nuxt-link :to="`/${article.id}`">{{ article.title }}</nuxt-link>
        </li>
      </ul>
    </main>
    <footer>
      <p><small>©︎ 2022 Kazunori Matsunaga</small></p>
    </footer>
  </div>
</template>