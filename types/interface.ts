export interface GeneratedImage {
  url: string;
}

export interface ImageGenerationResponse {
  created: Date;
  data: GeneratedImage[];
}

export interface GenerateImagePayload {
  prompt: string;
  size: string;
  response_format: string;
  model: string;
}
