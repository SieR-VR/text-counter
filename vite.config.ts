import { defineConfig } from "vite";

export default defineConfig({
    base: '/text-counter/',
    build: {
        outDir: "dist",
        emptyOutDir: true,
    },
});