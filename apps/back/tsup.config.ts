import { defineConfig, type Options } from 'tsup';

export default defineConfig((options: Options) => ({
  entryPoints: ['src/server.ts'],
  format: ['esm'],
  clean: true,
  dts: true,
  ...options
}));
