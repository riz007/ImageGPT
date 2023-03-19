import { GenerateImagePayload } from "~~/types/interface";

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const { prompt } = body;
    const size = "512x512";
    const responseFormat = "url";
    const model = "image-alpha-001";
    const apiKey = `${useRuntimeConfig().openApiKey}`;

    const url = `https://api.openai.com/v1/images/generations`;
    const payload: GenerateImagePayload = {
      prompt,
      size,
      response_format: responseFormat,
      model,
    };
    const response: Response = await $fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify(payload),
    });
    if (response.status !== 200) {
      throw new Error(
        `Failed to generate image, status code: ${response.status}`
      );
    }
    return response;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(error.message as string);
      return {
        error: error.message,
      };
    }
  }
});
