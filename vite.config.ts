import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import monkey, { cdn } from 'vite-plugin-monkey';
import { name, version, description, author } from "./package.json"

export default defineConfig({
  plugins: [
    vue(),
    monkey({
      entry: 'src/main.ts',
      userscript: {
        name,
        version,
        description,
        author,
        icon: "data:image/png;base64,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",
        namespace: 'https://github.com/Vincent-the-gamer/userscript-konachan-downloader',
        match: ['https://konachan.com/**'],
      },
      build: {
        externalGlobals: {
          vue: cdn.jsdelivr('Vue', 'dist/vue.global.prod.js'),
        },
      },
    }),
  ],
  server: {
    port: 8080
  }
});
