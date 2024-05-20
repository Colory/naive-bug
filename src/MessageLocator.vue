<template>
  <BugDataTable />
</template>
<script setup lang="tsx">
import { useMessage, useDialog } from "naive-ui";
import BugDataTable from './BugDataTable.vue'

declare global {
  interface Window {
    $message: ReturnType<typeof useMessage>;
    $dialog: ReturnType<typeof useDialog>;
  }
}

window.$message = useMessage();
window.$dialog = useDialog();
</script>
