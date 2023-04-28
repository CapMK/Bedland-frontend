import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import svgrPlugin from 'vite-plugin-svgr';
import { checker } from 'vite-plugin-checker';

export default defineConfig({
  plugins: [
    react(),
    viteTsconfigPaths(),
    svgrPlugin(),
    checker({
      typescript: true,
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './setupTests.ts',
    coverage: {
      provider: 'istanbul',
      reporter: ['text', 'html'],
      exclude: ['./node_modules/', './setupTests.ts'],
    },
    mockReset: true,
  },
});
