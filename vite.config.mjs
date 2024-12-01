import {defineConfig} from "vite";

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: "./index.html",
                about: "./about.html",
                howitworks: './howitworks.html',
                stats: './stats.html',
            }
        }
    },
    base: "/"
})