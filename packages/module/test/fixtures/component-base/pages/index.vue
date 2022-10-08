<template>
  <div>Hello World</div>
</template>

<script lang="ts">
export default defineComponent({
  layout: "layout-3",
  middleware: ["example1", "example2", "example3"],
});
</script>
