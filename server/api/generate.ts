import { GenerateImagePayload } from "~~/types/interface";

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const { prompt } = body;
    const size = "512x512";
    const responseFormat = "url";
    const model = "image-alpha-001";
    const apiKey = `${process.env.OPENAI_API_KEY}`;

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
