import {defineConfig, UserConfig, ConfigEnv} from 'vite'
import dts from 'vite-plugin-dts'

const path = require('path')
export default defineConfig(({mode, command}: ConfigEnv): UserConfig => {
    const root = process.cwd()
    return {
        base: './',
        resolve: {
            alias: {
                '@': '/src',
            },
        },
        plugins: [
            dts(
                {
                    copyDtsFiles: true,
                    insertTypesEntry: true,
                },
            )],
        build: {
            target: 'es2019',
            outDir: 'dist',
            emptyOutDir: true,
            chunkSizeWarningLimit: 2000,
            lib: {
                entry: path.resolve(__dirname, 'main.ts'),
                name: 'boyyang_tools',
                formats: ['es', 'umd'],
                fileName: (format) => `boyyang.${format}.js`,
            },
        },
    }
})


