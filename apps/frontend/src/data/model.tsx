/**
 * message types:
 * 
 * 1: 
 * messages=[
    {
      "role": "user",
      "content": "What is the meaning of life?"
    }
  ]
 * 
 * 2:
 * messages=[
    {
      "role": "user",
      "content": [
        {
          "type": "text",
          "text": "What is in this image?"
        },
    }
   ]
 */

export interface IModelType {
  modelName: string;
  model: string;
  messageType: number;
}

export const modelTypes: { [key: string]: IModelType } = {
  "NVIDIA: Llama 3.1 Nemotron Nano 8B v1 (free)": {
    modelName: "NVIDIA: Llama 3.1 Nemotron Nano 8B v1 (free)",
    model: "nvidia/llama-3.1-nemotron-nano-8b-v1:free",
    messageType: 1,
  },
  "NVIDIA: Llama 3.3 Nemotron Super 49B v1 (free)": {
    modelName: "NVIDIA: Llama 3.3 Nemotron Super 49B v1 (free)",
    model: "nvidia/llama-3.3-nemotron-super-49b-v1:free",
    messageType: 1,
  },
  "NVIDIA: Llama 3.1 Nemotron Ultra 253B v1 (free)": {
    modelName: "NVIDIA: Llama 3.1 Nemotron Ultra 253B v1 (free)",
    model: "nvidia/llama-3.1-nemotron-ultra-253b-v1:free",
    messageType: 1,
  },
  "Meta: Llama 4 Maverick (free)": {
    modelName: "Meta: Llama 4 Maverick (free)",
    model: "meta-llama/llama-4-maverick:free",
    messageType: 2,
  },
  "Meta: Llama 4 Scout (free)": {
    modelName: "Meta: Llama 4 Scout (free)",
    model: "meta-llama/llama-4-scout:free",
    messageType: 2,
  },
  "Quasar Alpha": {
    modelName: "Quasar Alpha",
    model: "openrouter/quasar-alpha",
    messageType: 2,
  },
  "DeepSeek: DeepSeek V3 Base (free)": {
    modelName: "DeepSeek: DeepSeek V3 Base (free)",
    model: "deepseek/deepseek-v3-base:free",
    messageType: 1,
  },
  "AllenAI: Molmo 7B D (free)": {
    modelName: "AllenAI: Molmo 7B D (free)",
    model: "allenai/molmo-7b-d:free",
    messageType: 2,
  },
  "Bytedance: UI-TARS 72B (free)": {
    modelName: "Bytedance: UI-TARS 72B (free)",
    model: "bytedance-research/ui-tars-72b:free",
    messageType: 2,
  },
  "Qwen: Qwen2.5 VL 3B Instruct (free)": {
    modelName: "Qwen: Qwen2.5 VL 3B Instruct (free)",
    model: "qwen/qwen2.5-vl-3b-instruct:free",
    messageType: 2,
  },
  "Google: Gemini 2.5 Pro Experimental (free)": {
    modelName: "Google: Gemini 2.5 Pro Experimental (free)",
    model: "google/gemini-2.5-pro-exp-03-25:free",
    messageType: 2,
  },
  "Qwen: Qwen2.5 VL 32B Instruct (free)": {
    modelName: "Qwen: Qwen2.5 VL 32B Instruct (free)",
    model: "qwen/qwen2.5-vl-32b-instruct:free",
    messageType: 2,
  },
  "DeepSeek: DeepSeek V3 0324 (free)": {
    modelName: "DeepSeek: DeepSeek V3 0324 (free)",
    model: "deepseek/deepseek-chat-v3-0324:free",
    messageType: 1,
  },
  "Mistral: Mistral Small 3.1 24B (free)": {
    modelName: "Mistral: Mistral Small 3.1 24B (free)",
    model: "mistralai/mistral-small-3.1-24b-instruct:free",
    messageType: 2,
  },
  "OlympicCoder 7B (free)": {
    modelName: "OlympicCoder 7B (free)",
    model: "open-r1/olympiccoder-7b:free",
    messageType: 1,
  },
  "OlympicCoder 32B (free)": {
    modelName: "OlympicCoder 32B (free)",
    model: "open-r1/olympiccoder-32b:free",
    messageType: 1,
  },
  "Google: Gemma 3 1B (free)": {
    modelName: "Google: Gemma 3 1B (free)",
    model: "google/gemma-3-1b-it:free",
    messageType: 2,
  },
  "google/gemma-3-1b-it:free": {
    modelName: "google/gemma-3-1b-it:free",
    model: "google/gemma-3-4b-it:free",
    messageType: 2,
  },
  "Google: Gemma 3 12B (free)": {
    modelName: "Google: Gemma 3 12B (free)",
    model: "google/gemma-3-12b-it:free",
    messageType: 2,
  },
  "Reka: Flash 3 (free)": {
    modelName: "Reka: Flash 3 (free)",
    model: "rekaai/reka-flash-3:free",
    messageType: 1,
  },
  "Google: Gemma 3 27B (free)": {
    modelName: "Google: Gemma 3 27B (free)",
    model: "google/gemma-3-27b-it:free",
    messageType: 2,
  },
  "DeepSeek: DeepSeek R1 Zero (free)": {
    modelName: "DeepSeek: DeepSeek R1 Zero (free)",
    model: "deepseek/deepseek-r1-zero:free",
    messageType: 1,
  },
  "Qwen: QwQ 32B (free)": {
    modelName: "Qwen: QwQ 32B (free)",
    model: "qwen/qwq-32b:free",
    messageType: 1,
  },
  "Moonshot AI: Moonlight 16B A3B Instruct (free)": {
    modelName: "Moonshot AI: Moonlight 16B A3B Instruct (free)",
    model: "moonshotai/moonlight-16b-a3b-instruct:free",
    messageType: 1,
  },
  "Nous: DeepHermes 3 Llama 3 8B Preview (free)": {
    modelName: "Nous: DeepHermes 3 Llama 3 8B Preview (free)",
    model: "nousresearch/deephermes-3-llama-3-8b-preview:free",
    messageType: 1,
  },
  "Dolphin3.0 R1 Mistral 24B (free)": {
    modelName: "Dolphin3.0 R1 Mistral 24B (free)",
    model: "cognitivecomputations/dolphin3.0-r1-mistral-24b:free",
    messageType: 1,
  },
  "Dolphin3.0 Mistral 24B (free)": {
    modelName: "Dolphin3.0 Mistral 24B (free)",
    model: "cognitivecomputations/dolphin3.0-mistral-24b:free",
    messageType: 1,
  },
  "Qwen: Qwen2.5 VL 72B Instruct (free)": {
    modelName: "Qwen: Qwen2.5 VL 72B Instruct (free)",
    model: "qwen/qwen2.5-vl-72b-instruct:free",
    messageType: 2,
  },
  "Mistral: Mistral Small 3 (free)": {
    modelName: "Mistral: Mistral Small 3 (free)",
    model: "mistralai/mistral-small-24b-instruct-2501:free",
    messageType: 1,
  },
  "DeepSeek: R1 Distill Qwen 32B (free)": {
    modelName: "DeepSeek: R1 Distill Qwen 32B (free)",
    model: "deepseek/deepseek-r1-distill-qwen-32b:free",
    messageType: 1,
  },
  "DeepSeek: R1 Distill Qwen 14B (free)": {
    modelName: "DeepSeek: R1 Distill Qwen 14B (free)",
    model: "deepseek/deepseek-r1-distill-qwen-14b:free",
    messageType: 1,
  },
  "DeepSeek: R1 Distill Llama 70B (free)": {
    modelName: "DeepSeek: R1 Distill Llama 70B (free)",
    model: "deepseek/deepseek-r1-distill-llama-70b:free",
    messageType: 1,
  },
  "Google: Gemini 2.0 Flash Thinking Experimental 01-21 (free)": {
    modelName: "Google: Gemini 2.0 Flash Thinking Experimental 01-21 (free)",
    model: "google/gemini-2.0-flash-thinking-exp:free",
    messageType: 2,
  },
  "DeepSeek: R1 (free)": {
    modelName: "DeepSeek: R1 (free)",
    model: "deepseek/deepseek-r1:free",
    messageType: 1,
  },
  "Rogue Rose 103B v0.2 (free)": {
    modelName: "Rogue Rose 103B v0.2 (free)",
    model: "sophosympatheia/rogue-rose-103b-v0.2:free",
    messageType: 1,
  },
  "DeepSeek: DeepSeek V3 (free)": {
    modelName: "DeepSeek: DeepSeek V3 (free)",
    model: "deepseek/deepseek-chat:free",
    messageType: 1,
  },
  "Google: Gemini 2.0 Flash Thinking Experimental (free)": {
    modelName: "Google: Gemini 2.0 Flash Thinking Experimental (free)",
    model: "google/gemini-2.0-flash-thinking-exp-1219:free",
    messageType: 2,
  },
  "Google: Gemini 2.0 Flash Experimental (free)": {
    modelName: "Google: Gemini 2.0 Flash Experimental (free)",
    model: "google/gemini-2.0-flash-exp:free",
    messageType: 2,
  },
  "Meta: Llama 3.3 70B Instruct (free)": {
    modelName: "Meta: Llama 3.3 70B Instruct (free)",
    model: "meta-llama/llama-3.3-70b-instruct:free",
    messageType: 1,
  },
  "Qwen: QwQ 32B Preview (free)": {
    modelName: "Qwen: QwQ 32B Preview (free)",
    model: "qwen/qwq-32b-preview:free",
    messageType: 1,
  },
  "Google: LearnLM 1.5 Pro Experimental (free)": {
    modelName: "Google: LearnLM 1.5 Pro Experimental (free)",
    model: "google/learnlm-1.5-pro-experimental:free",
    messageType: 2,
  },
  "Qwen2.5 Coder 32B Instruct (free)": {
    modelName: "Qwen2.5 Coder 32B Instruct (free)",
    model: "qwen/qwen-2.5-coder-32b-instruct:free",
    messageType: 1,
  },
  "Qwen2.5 7B Instruct (free)": {
    modelName: "Qwen2.5 7B Instruct (free)",
    model: "qwen/qwen-2.5-7b-instruct:free",
    messageType: 1,
  },
  "NVIDIA: Llama 3.1 Nemotron 70B Instruct (free)": {
    modelName: "NVIDIA: Llama 3.1 Nemotron 70B Instruct (free)",
    model: "nvidia/llama-3.1-nemotron-70b-instruct:free",
    messageType: 1,
  },
  "Meta: Llama 3.2 3B Instruct (free)": {
    modelName: "Meta: Llama 3.2 3B Instruct (free)",
    model: "meta-llama/llama-3.2-3b-instruct:free",
    messageType: 1,
  },
  "Meta: Llama 3.2 1B Instruct (free)": {
    modelName: "Meta: Llama 3.2 1B Instruct (free)",
    model: "meta-llama/llama-3.2-1b-instruct:free",
    messageType: 1,
  },
  "Meta: Llama 3.2 11B Vision Instruct (free)": {
    modelName: "Meta: Llama 3.2 11B Vision Instruct (free)",
    model: "meta-llama/llama-3.2-11b-vision-instruct:free",
    messageType: 1,
  },
  "Qwen2.5 72B Instruct (free)": {
    modelName: "Qwen2.5 72B Instruct (free)",
    model: "qwen/qwen-2.5-72b-instruct:free",
    messageType: 1,
  },
  "Qwen: Qwen2.5-VL 7B Instruct (free)": {
    modelName: "Qwen: Qwen2.5-VL 7B Instruct (free)",
    model: "qwen/qwen-2.5-vl-7b-instruct:free",
    messageType: 2,
  },
  "Google: Gemini 1.5 Flash 8B Experimental": {
    modelName: "Google: Gemini 1.5 Flash 8B Experimental",
    model: "google/gemini-flash-1.5-8b-exp",
    messageType: 2,
  },
  "Meta: Llama 3.1 8B Instruct (free)": {
    modelName: "Meta: Llama 3.1 8B Instruct (free)",
    model: "meta-llama/llama-3.1-8b-instruct:free",
    messageType: 1,
  },
  "Mistral: Mistral Nemo (free)": {
    modelName: "Mistral: Mistral Nemo (free)",
    model: "mistralai/mistral-nemo:free",
    messageType: 1,
  },
  "Google: Gemma 2 9B (free)": {
    modelName: "Google: Gemma 2 9B (free)",
    model: "google/gemma-2-9b-it:free",
    messageType: 1,
  },
  "Mistral: Mistral 7B Instruct (free)": {
    modelName: "Mistral: Mistral 7B Instruct (free)",
    model: "mistralai/mistral-7b-instruct:free",
    messageType: 1,
  },
  "Hugging Face: Zephyr 7B (free)": {
    modelName: "Hugging Face: Zephyr 7B (free)",
    model: "huggingfaceh4/zephyr-7b-beta:free",
    messageType: 1,
  },
};

export const modelNames: Array<string> = Object.keys(modelTypes).sort(
  (a: string, b: string) => a.localeCompare(b)
);
