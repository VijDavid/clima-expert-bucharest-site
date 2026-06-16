import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
   plugins: [react()]
  },
  tanstackStart: {
    server: { entry: "server" },
  },
});
