<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1>Index Page</h1>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
export default defineComponent({
  layout: "custom",
  middleware: "globed",
  async asyncData() {
    return {
      email: "test@gmail.com",
    };
  },
});
</script>
