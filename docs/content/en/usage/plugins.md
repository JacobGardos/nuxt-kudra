---
title: Plugins
description: "Generate Plugin Types Nuxt 2"
position: 4
category: Usage
---

<alert type="warning">

In order for kudra to detect your plugins, you must add your plugin to the `plugins` array inside
your `nuxt config` & have the dev server running.

</alert>

<gif src="./demo/plugins.gif" id="demo"></gif>

When you register a plugin with nuxt using `definePlugin`, kudra will automatically generate the appropriate
types for your plugin.

## 1. Define your plugin

In order to get type support for your nuxt plugins, it is recommended that you use the globally available
`definePlugin` function provided by kudra. `definePlugin` Accepts a plugin function that takes context as a single argument.

```ts [plugins/bar.ts]
export default definePlugin((nuxtContext) => {
  // Perform plugins stuff here
});
```

Your can also use an async function

```ts [plugins/bar.ts]
export default definePlugin(async (nuxtContext) => {
  // Perform async plugins stuff here
});
```

### Injection

In a typical nuxt 2 plugin you would use the inject argument passed to the plugin function to inject global key values across the app.
However this makes it difficult to generate types for globally injected key/values.

Rather than using the inject function, you can return an object from the plugin function that contains a key called `provide`. The keys of `provide` will be injected globally, affixed with a $, followed by their values.

```ts [plugins/bar.ts]
export default definePlugin((nuxtContext) => {
  // Perform async plugins stuff here
  return {
    provide: {
      // Will be injected as $sayHi, can also be async
      sayHi: (name: string): string => {
        return `Hi ${name}`;
      },
      // ... other injected keys
    },
  };
});
```

## 2. Register your plugin

The last step is to register your plugin in the nuxt config

```ts [nuxt.config.ts]
import { defineNuxtConfig } from "nuxt-kudra";

export default defineNuxtConfig({
  // ... config
  plugins: ["~/plugins/bar.ts"],
});
```

## 3. Use your plugin

Kudra will generate the appropriates types for your plugin, depending on it's mode which you define using the [Name Convention](https://nuxtjs.org/docs/directory-structure/plugins/#name-conventional-plugin) or [Object Syntax](https://nuxtjs.org/docs/directory-structure/plugins/#object-syntax)

### Client Mode

if you defined your plugin to be available on the client, you can access it via the `this` keyword in defineComponent, or in the template.

Your IDE should provide you with type suggestions, similar to the [gif above](plugins#demo).

```vue [pages/bar.vue]
<template>
  <div>
    {{ $sayHi("Jacob") }}
  </div>
</template>

<script lang="ts">
export default defineComponent({
  mounted() {
    // msg should be typed as string
    const msg = this.$sayHi("Kudra");
  },
});
</script>
```

### Server Mode

if you defined your plugin to be available on the client, you can access it from the `nuxtContext` under the `$plugins` key.

Your IDE should provide you with type suggestions, similar to the [gif above](plugins#demo)

```vue [pages/bar.vue]
<template>
  <div>
    {{ $sayHi("Jacob") }}
  </div>
</template>

<script lang="ts">
export default defineComponent({
  asyncData({ $plugins }) {
    // msg should be typed as string
    const msgServer = $plugins.$sayHi("Elon");
  },
  mounted() {
    // msg should be typed as string
    const msgClient = this.$sayHi("Kudra");
  },
});
</script>
```

#### Change the $plugins key

You can change the name of the $plugins key in the kudra options. Use with caution.

```ts [nuxt.config.ts]
import { defineNuxtConfig } from "nuxt-kudra";

export default defineNuxtConfig({
  kudra: {
    pluginLoader: {
      injectionKey: "kudra",
    },
  },
});
```

```vue [pages/bar.vue]
<script lang="ts">
export default defineComponent({
  asyncData({ $kudra }) {
    const msgServer = $kudra.$sayHi("Elon");
  },
});
</script>
```
