/// <reference types="vite/client" />
/// <reference types="vite-plugin-monkey/client" />
/// / <reference types="vite-plugin-monkey/global" />

declare module '*.vue' {
  import type { defineComponent } from 'vue'

  const Component: ReturnType<typeof defineComponent>
  export default Component
}
