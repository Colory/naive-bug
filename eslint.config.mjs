/* eslint-disable prettier/prettier */
import pluginVue from "eslint-plugin-vue";
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import configPrettier from "eslint-config-prettier";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import vueParser from "vue-eslint-parser";

export default tseslint.config(
  {
    ignores: ["{dist,public,node_modules}/**/*", "eslint.config.js"],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs["flat/strongly-recommended"],
  {
    files: ["src/**/*.vue"],
    rules: {
      // 禁用 for in 迭代 容易导致错误
      // 可用其他方式替代 需要 index 的场景 可以使用 for (let index of range(0, arr.length)) {}
      "no-restricted-syntax": ["error", "ForInStatement"],
      "vue/multi-word-component-names": "off",
      // 关闭默认值
      "vue/require-default-prop": "off",
      // 关闭对横线属性的转换 如果出现参数传递错误建议查看命名规则是否问题
      "vue/attribute-hyphenation": ["error", "never"],
      "vue/v-on-event-hyphenation": ["error", "never", { autofix: true }],
      // 冲突 auto import 等后续修复
      "no-undef": "off",
    },
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: {
          ts: tseslint.parser,
          tsx: tseslint.parser,
        },
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
      ecmaVersion: "latest",
    },
  },
  configPrettier,
  eslintPluginPrettierRecommended,
  {
    rules: {
      "prettier/prettier": [
        "error",
        {
          endOfLine: "auto",
        },
      ],
      "@typescript-eslint/no-empty-interface": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/ban-ts-comment": "off",
      "@typescript-eslint/no-non-null-assertion": "off",
      "@typescript-eslint/no-empty-function": "warn",
      // ban {} 类型
      "@typescript-eslint/ban-types": "off",
      // 忽略 下划线开头的
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          destructuredArrayIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
    },
  }
);
