// @ts-check
import { defineConfig } from "astro/config";
import Icons from "unplugin-icons/vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
	site: "https://netherlandsneurogeneticsdatabase.github.io/",
	base: "/HoltmanLabWebsiteNew",

	output: "static",

	
	vite: {
		plugins: [
			tailwindcss(),
			Icons({
				compiler: "astro",
			}),
		],
	},
});