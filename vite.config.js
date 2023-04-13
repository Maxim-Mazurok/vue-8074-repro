import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vuetify from "vite-plugin-vuetify";
import vueJsx from "@vitejs/plugin-vue-jsx";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vuetify({
      styles: { configFile: "src/settings.scss" },
    }),
    vueJsx(),
  ],
  build: {
    sourcemap: true,
    rollupOptions: {
      input: {
        "vue-elements": "src/main.ts",
        "report-issue": "src/report-issue.ts",
      },
      output: {
        dir: "../src/assets/vue-elements",
        entryFileNames: `[name].js`, // TODO: probably remove this when done with migration to Vue; this remove hash from filename to make file name static for gulp; see https://stackoverflow.com/a/69614729/4536543
        assetFileNames: `assets/[name].[ext]`, // TODO: probably remove this when done with migration to Vue; this remove hash from filename to make file name static for gulp; taken from https://github.com/vitejs/vite/issues/378#issuecomment-768816653
      },
    },
    emptyOutDir: true, // resolves this warning: `[build-dev-vue-watch] (!) outDir /home/maxim/BorderWiseWeb/Frontend/src/assets/vue-elements is not inside project root and will not be emptied.`
  },
  test: {
    setupFiles: ["jest-extended/all", "src/setupTests.ts"],
    environment: "jsdom",
    transformMode: {
      web: [/\.[jt]sx$/],
    },
    globals: true,
    clearMocks: true,
    deps: {
      inline: ["vuetify"], // Resolves `TypeError: Unknown file extension ".css" for /home/maxim/BorderWiseWeb/Frontend/vue-elements/node_modules/vuetify/lib/components/VCode/VCode.css`
    },
  },
});
