<script setup lang="ts">
import { GeneratedImage, ImageGenerationResponse } from "./types/interface";

const input: Ref<string> = ref("");
const images: Ref<GeneratedImage[]> = ref([]);
const submit = async () => {
  try {
    const response: ImageGenerationResponse = await $fetch("/api/generate", {
      method: "post",
      body: {
        prompt: input.value,
      },
    });
    images.value = response?.data;
  } catch (error) {
    console.error(error);
  }
};
</script>
<template>
  <div>
    <input
      type="text"
      placeholder="Write about the image you would like to generate"
      v-model="input" />
    <button type="submit" @click="submit">Generate</button>
    <div v-for="(img, index) in images" :key="index">
      <img :src="img.url" />
    </div>
  </div>
</template>
