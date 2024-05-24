import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import biomePlugin from "vite-plugin-biome";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		biomePlugin({
			mode: "check",
			files: ".",
			applyFixes: true,
		}),
	],
});
