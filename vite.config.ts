import { join } from "path";
import { UserConfig, UserConfigExport, defineConfig, loadEnv } from "vite";
import plugins from "./vite-plugins";

const PACKAGE_ROOT = __dirname;

export default ({ mode }: UserConfig): UserConfigExport =>
  defineConfig({
    plugins: [...plugins(mode)],
    resolve: {
      alias: [{ find: /^@\//, replacement: join(PACKAGE_ROOT, "src") + "/" }],
    },
    css: { devSourcemap: true },
    server: {
      proxy: {
        "/api": {
          target: loadEnv(mode, ".").VITE_DEV_PROXY,
          rewrite: (path) => path.replace(/^\/api/, ""),
          changeOrigin: true,
        },
      },
    },
    /**
     * 打包相关
     */
    build: {
      chunkSizeWarningLimit: 5000,
      cssCodeSplit: true,
    },
  });
