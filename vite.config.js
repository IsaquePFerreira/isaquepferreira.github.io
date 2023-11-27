import eslint from "vite-plugin-eslint";

export default {
    root: "src",
    build: {
        outDir: "../dist",
    },
    base: "/",
    plugin: [eslint()],
};
