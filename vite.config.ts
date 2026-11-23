/// <reference types="vitest/config" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

export default defineConfig({
    // titleProp and ref match the SVG components Create React App generated
    plugins: [react(), svgr({ svgrOptions: { titleProp: true, ref: true } })],
    test: {
        environment: "jsdom",
        setupFiles: "./src/setupTests.ts",
    },
});
