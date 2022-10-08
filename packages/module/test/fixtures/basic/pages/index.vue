<template>
  <div>
    <bar></bar>
    <foo></foo>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  asyncData({ $plugins }) {
    const serverValue = $plugins.$serverTest();
    if (serverValue !== "success") throw new Error("Server Plugin Returned Incorrect Value");
  },
  mounted() {
    const clientValue = this.$clientTest();
    if (clientValue !== "success") throw new Error("Client Plugin Returned Incorrect Value");
  },
});
</script>
