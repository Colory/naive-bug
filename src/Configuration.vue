<template>
  <n-config-provider
    :theme="darkTheme"
    :locale="zhCN"
    abstract
    :dateLocale="dateZhCN"
    :themeOverrides="themeOverrides"
  >
    <n-global-style />
    <n-message-provider>
      <n-dialog-provider>
          <message-locator />
      </n-dialog-provider>
    </n-message-provider>
  </n-config-provider>
</template>
<script setup lang="tsx">
import { darkTheme, zhCN, dateZhCN, GlobalThemeOverrides } from "naive-ui";
import MessageLocator from "./MessageLocator.vue";


// 覆写主题样式
const themeOverrides: GlobalThemeOverrides = {
 
};

</script>
<style lang="less">
:root {
}

html,
body,
#root {
  margin: 0;
  padding: 0;
  border: none;

}
</style>
