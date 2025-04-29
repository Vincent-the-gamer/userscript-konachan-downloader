import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import monkey, { cdn } from 'vite-plugin-monkey';

export default defineConfig({
  plugins: [
    vue(),
    monkey({
      entry: 'src/main.ts',
      userscript: {
        name: "konachan-downloader",
        description: "Konachan.com图片按当前页面批量打包下载, 默认下载大图",
        namespace: 'https://github.com/Vincent-the-gamer/userscript-konachan-downloader',
        match: ['https://konachan.com/**'],
        author: "Vincent-the-gamer",
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
