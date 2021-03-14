import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue';
import glslify from 'rollup-plugin-glslify';

export default {
  plugins: defineConfig([vue(), glslify()])
};
