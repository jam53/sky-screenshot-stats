const { defineConfig } = require('vite')
module.exports = defineConfig({
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