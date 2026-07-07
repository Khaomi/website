import { execSync } from "node:child_process";
import tailwindcss from "@tailwindcss/vite";

let commitHash: string | undefined;
let isStaging = false;

try {
	commitHash = execSync("git rev-parse --short HEAD")
		.toString()
		.replaceAll("\r\n", "\n")
		.replaceAll("\n", "");
} catch (_) {}

try {
	execSync("git diff --quiet");
} catch (_) {
	isStaging = true;
}

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2025-07-15",
	devtools: { enabled: true },
	css: ["./app/assets/css/tailwind.css", "./app/assets/css/main.css"],

	vite: {
		plugins: [tailwindcss()],
	},

	runtimeConfig: {
		public: {
			baseUrl: "https://khaomi.dev/",
			repository: "https://github.com/Khaomi/website",
			commit: commitHash,
			isStaging,
		},
	},

	modules: ["@nuxtjs/color-mode", "shadcn-nuxt", "@vueuse/nuxt"],
});
