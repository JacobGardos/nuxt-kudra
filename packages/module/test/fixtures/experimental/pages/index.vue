<template>
  <div>
    <v-btn>Click Me !</v-btn>
    {{ successMessage }}
  </div>
</template>

<script lang="ts">
export default defineComponent({
  asyncData() {
    const successMessage = "successMessage";

    return {
      successMessage,
    };
  },
});
</script>
