import { defineConfig } from 'vite';

import baseConfig from './vite.base.config';

export default defineConfig(() => {
    return {
        ...baseConfig,
        build: {
            minify: 'terser',
            rollupOptions: {
                output: {
                    manualChunks: id => {
                        if (id.includes('node_modules')) return 'vendor';
                    },
                },
            },
        },
    };
});
