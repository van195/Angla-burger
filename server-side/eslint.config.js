import { defineConfig } from "eslint/config";
import js from "@eslint/js";

export default defineConfig([
	// Apply recommended rules to JS files
	{
		extends: ["js/recommended"],
		files: ["**/*.js"],
		name: "your-project/recommended-rules",
		plugins: {
			js,
		},
	},

	// Apply recommended rules to JS files with an override
	{
		extends: ["js/recommended"],
		files: ["**/*.js"],
		name: "your-project/recommended-rules-with-override",
		plugins: {
			js,
		},
		rules: {
			"no-unused-vars": "warn",
		},
	},

	// Apply all rules to JS files
	{
		extends: ["js/all"],
		files: ["**/*.js"],
		name: "your-project/all-rules",
		plugins: {
			js,
		},
		rules: {
			"no-unused-vars": "warn",
		},
	},
]);