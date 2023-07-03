<template>
  <div>
    <SeoKit />
    <NuxtPage />
  </div>
</template>

<script lang="ts" setup>
useHead({
  script: [
    {
      src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9604089991570546',
      async: true,
      crossorigin: 'anonymous'
    }
  ]
})
</script>