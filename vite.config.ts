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
                    outputDir: './dist/typings',
                    copyDtsFiles: true,
                    // staticImport: true,
                    insertTypesEntry: false,
                },
            ),
        ],
        build: {
            target: 'es2019',
            outDir: 'dist',
            emptyOutDir: true,
            chunkSizeWarningLimit: 500,
            lib: {
                entry: path.resolve(__dirname, 'main.ts'),
                name: 'boyyang_tools',
                formats: ['es', 'umd', 'cjs'],
                fileName: (format) => `boyyang.${format}.js`,
            },
        },
    }
})


