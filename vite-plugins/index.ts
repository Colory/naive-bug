import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import {
  VueUseComponentsResolver,
  NaiveUiResolver,
} from "unplugin-vue-components/resolvers";

import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

export default (mode?: string) => [
  AutoImport({
    imports: [
      "vue",
      {
        "naive-ui": [
          "useDialog",
          "useMessage",
          "useNotification",
          "useLoadingBar",
        ],
      },
    ],
    dts: "./types/auto-imports.d.ts",
    resolvers: [ NaiveUiResolver()],
  }),
  // 按需加载
  Components({
    dts: false,
    types: [{ from: "naive-ui", names: [] }],
    resolvers: [ NaiveUiResolver()],
  }),
  // 允许使用实验性的 defineModel 方法
  vue({ script: { defineModel: true }, isProduction: mode !== "development" }),
  vueJsx(),
];
