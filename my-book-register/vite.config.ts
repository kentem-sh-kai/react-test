/// <reference types="vitest" />
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // `describe`や`it`をimportなしで使えるようにする
    environment: 'jsdom', // テストの実行環境としてjsdomを指定
    setupFiles: './src/setup.ts', // 各テストの前に実行するセットアップファイルを指定
  },
});
