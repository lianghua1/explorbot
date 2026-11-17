import { createOpenAICompatible } from '@ai-sdk/openai-compatible';

const baseURL = process.env.WARER_LLM_BASE_URL || 'http://127.0.0.1:4000/v1';
const apiKey = process.env.WARER_LLM_API_KEY || '';

const gateway = createOpenAICompatible({
  name: 'warer-gateway',
  apiKey,
  baseURL,
  supportsStructuredOutputs: true,
});

export default {
  web: {
    url: 'https://warer.online',
  },

  playwright: {
    browser: 'chromium',
    url: 'https://warer.online',
    show: false,
    headless: true,
    timeout: 30000,
    waitForNavigation: 'networkidle',
    waitForTimeout: 5000,
    ignoreHTTPSErrors: false,
    userAgent:
      'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
    viewport: { width: 1440, height: 900 },
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage', '--disable-gpu'],
  },

  ai: {
    model: gateway.chatModel('go-deepseek-v4.1-flash'),
    visionModel: gateway.chatModel('go-deepseek-v4-flash-vision-exp'),
    agenticModel: gateway.chatModel('go-deepseek-v4-pro'),
  },
};
