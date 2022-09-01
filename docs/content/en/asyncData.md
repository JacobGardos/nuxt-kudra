---
title: AsyncData
description: "Generate AsyncData Types Nuxt 2"
position: 5
category: Experimental
---

<alert type="warning">

This is an experimental feature. Use with caution

</alert>

<gif src="/demo/asyncData.gif" id="demo"></gif>

The current `@nuxt/types` implementation does not respect the following rules of asyncData

- The asyncData method `merges` its return value into your components local state.
- asyncData does not have access to `this`

```vue [Incorrect Example]
<template>
  <div>Incorrect asyncData types via @nuxt/types</div>
</template>

<script lang="ts">
export default defineComponent({
  asyncData() {
    this.$data; // Should not have access to `this`

    return {
      msg: "Hello World",
    };
  },
  mounted() {
    this.msg; // Does not merge return data
  },
});
</script>
```

## Kudra AsyncData

kudra will generate a type that addresses the issues stated above. Due to the experimental nature of the generated type, you must explicitly enable it in the kudra options.

```ts [nuxt.config.ts]
import { defineNuxtConfig } from "nuxt-kudra";

export default defineNuxtConfig({
  kudra: {
    experimentalOptions: {
      asyncData: {
        disable: false, // Enabled
      },
    },
  },
});
```

## Usage

After enabling the feature your asyncData methods will no longer have access to `this`, as intended.

Moreover, the return type of asyncData will now be available on the component instance via the `this` keyword, and inside the template.

You should be able to get type suggestions for the return value of asyncData similar to the [gif above](#demo)

```vue
<template>
  <div>Should have type string {{ msg }}</div>
</template>

<script lang="ts">
export default defineComponent({
  asyncData() {
    this.$data; // IDE should show an error here

    return {
      msg: "Hello World",
    };
  },
  mounted() {
    this.msg; // Should have type string
  },
});
</script>
```
