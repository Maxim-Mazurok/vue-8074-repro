import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vuetify from "vite-plugin-vuetify";
import vueJsx from "@vitejs/plugin-vue-jsx";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vuetify({}), vueJsx()],
  test: {
    setupFiles: ["jest-extended/all", "src/setupTests.ts"],
    environment: "jsdom",
    transformMode: {
      web: [/\.[jt]sx$/],
    },
    globals: true,
    deps: {
      inline: ["vuetify"], // Resolves `TypeError: Unknown file extension ".css" for /home/maxim/BorderWiseWeb/Frontend/vue-elements/node_modules/vuetify/lib/components/VCode/VCode.css`
    },
  },
});
