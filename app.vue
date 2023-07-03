<template>
  <div class="w-screen h-screen flex items-center bg-base-200 flex-col pt-14">
    <h1 class="text-2xl font-bold">Text Length Counter</h1>
    <h2>Count your text length and words.</h2>
    <div class="container max-w-2xl space-y-2 mt-4">
      <div class="flex flex-col gap-1">
        <label for="textInput" class="font-medium">Enter your text:</label>
        <textarea v-model="textInput" id="textInput" rows="10"  class="textarea textarea-bordered"></textarea>
      </div>
      <p class="font-medium">Length: <span class="font-bold">{{ textInput.length }}</span></p>
      <p class="font-medium">Words: <span class="font-bold">{{ wordCount }}</span></p>
    </div>
  </div>
</template>

<script lang="ts" setup>
const textInput = ref('');

const wordCountRegex = new RegExp(/\w+/g);

const wordCount = computed(() => {
  const test = textInput.value.match(wordCountRegex);
  return test ? test.length : 0;
});
</script>