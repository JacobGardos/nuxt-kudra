<template>
  <div>
    <h1>Index Page</h1>
    {{ email }}
    {{ email2 }}
  </div>
</template>

<script lang="ts">
export default defineComponent({
  layout: "default",
  asyncData() {
    return {
      email: "jacobgardos@gmail.com",
      email2: "sodrag@outlook.com",
    };
  },
});
</script>
