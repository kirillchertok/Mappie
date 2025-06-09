import { defineConfig, loadEnv } from 'vite';

import baseConfig from './vite.base.config';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), '');

    return {
        ...baseConfig,
        server: {
            port: parseInt(env.VITE_PORT || '5173'),
            open: true,
            strictPort: true,
        },
    };
});
