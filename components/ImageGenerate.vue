<script setup lang="ts">
import { GeneratedImage, ImageGenerationResponse } from "../types/interface";

const input: Ref<string> = ref("");
const images: Ref<GeneratedImage[]> = ref([]);
const isLoading: Ref<boolean> = ref(false);
const inputEmpty: Ref<boolean> = ref(false);
const submit = async () => {
  if (input.value) {
    isLoading.value = true;
    try {
      const response: ImageGenerationResponse = await $fetch("/api/generate", {
        method: "post",
        body: {
          prompt: input.value,
        },
      });
      images.value = response?.data;
      isLoading.value = false;
    } catch (error) {
      console.error(error);
      isLoading.value = false;
    }
  } else {
    inputEmpty.value = true;
  }
};
</script>
<template>
  <div class="container mx-auto w-full h-screen">
    <p class="text-xl text-center leading-7 text-blue-50 mb-3 mt-12 italic">
      Type your prompts for example: "A flower in a jungle. An elephant eating
      banana leaves" etc.
    </p>
    <div class="flex flex-wrap justify-center items-start mb-3">
      <textarea
        type="text"
        placeholder="Type your prompt here"
        class="textarea textarea-primary w-full max-w-2xl mr-3 text-black border-none text-xl"
        :class="{ disabled: isLoading }"
        v-model.trim="input" />
    </div>
    <div class="text-center">
      <button
        class="btn bg-gradient-to-r from-fuchsia-500 to-cyan-500 border-none text-xl"
        :class="{ loading: isLoading }"
        @click="submit">
        Generate
      </button>
    </div>
    <div class="flex justify-center mt-12">
      <div
        v-if="isLoading"
        class="w-full h-full flex items-center justify-center">
        <div
          class="animate-pulse rounded-lg bg-gray-300 dark:bg-gray-700 h-64 w-96"></div>
      </div>
      <div
        v-else
        v-for="(img, index) in images"
        :key="index"
        class="border-solid border-2 border-pink-500 rounded-lg relative">
        <div class="card w-96 bg-base-100 shadow-xl rounded-lg">
          <figure>
            <img :src="img.url" class="rounded-lg" alt="generated-image" />
          </figure>
        </div>
      </div>
    </div>
  </div>
</template>
