import dotenv from "dotenv";

dotenv.config();

const baseUrl = process.env.FLUX_AI_API_BASE_URL
const model = process.env.FLUX_AI_MODEL

export default class FluxAiApi {
    static async getResponse(prompt) {
        const response = await fetch(baseUrl + '/v1/images/generate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                prompt: prompt,
                model: model,
                size: "9_16",
                lora: "flux-RealismLora",
                style: "digital",
                color: "no_color",
                lighting: "studio",
                composition: null
            })
        });

        return response.json();
    }
}