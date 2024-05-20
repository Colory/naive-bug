<template>
  <div>
    <NDataTable :columns :data :pagination="pg" transform-origin="center" />
  </div>
</template>
<script setup lang="tsx">
import { NDataTable } from "naive-ui";

const columns = [
  { title: "name", key: "name" },
  { title: "title", key: "title" },
];

// 效果是分页查询出来的
// 数据是 每页10条分页的
const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => ({
  name: i,
  title: i,
}));

const pg = ref({
  // 不生效
  // 查询回来的结果总数是 60
  itemCount: 60,
  page: 1,
  pageSize: 10,
  pageSizes: [10, 20, 40, 100],
  // 默认展示跳转
  showQuickJumper: true,
  showSizePicker: true,
  // 跳转数量显示少点 避免某些窄场景下 显示不下
  pageSlot: 6,

  // 查看页面没有生效
  prefix: ({ itemCount }) => itemCount,
});
</script>
