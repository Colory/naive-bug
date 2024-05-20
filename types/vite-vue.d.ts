/// <reference types="vite/client" />
// 方便使用所有组件的信息
// 类型信息完整
/// <reference types="naive-ui/volar" />

declare module "*.vue" {
  import { DefineComponent } from "vue";

  const component: DefineComponent<{}, {}, any>;
  export default component;
}
