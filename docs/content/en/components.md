---
title: Components
description: "Generate Global Component Types Nuxt 2"
position: 3
category: Usage
---

<alert type="warning">

In order for kudra to detect your global components, you must enable `components` in your `nuxt config`
& have the dev server running.

</alert>

<gif src="./demo/components.gif" id="demo"></gif>

Kudra will automatically generate type definitions for your global nuxt components. This will allow
your IDE to provide you with type information about your components & their props / slots.

## Define your components

#### 1. Via defineComponent (recommended)

In order to get the best type support for your components, it is recommended that you use the
globally available `defineComponent` function provided by kudra. This will allow kudra & volar
to provide the most accurate type suggestions for your components.

```vue [components/foo.vue]
<template>
  <div>Foo</div>
</template>

<script lang="ts">
export default defineComponent({}); // Globally Provided By Kudra
</script>
```

#### 2. Via Component Options (experimental)

If you prefer to simply define your components using just the options object,
you must enable `experimentalImplicitWrapComponentOptionsWithDefineComponent` in your tsconfig.

```json [tsconfig.json]
{
  "vueCompilerOptions": {
    "target": 2.7,
    "experimentalImplicitWrapComponentOptionsWithDefineComponent": true
  }
}
```

```vue [components/foo.vue]
<template>
  <div>Foo</div>
</template>

<script lang="ts">
export default {};
</script>
```

## Defining component props

You can continue to define props in the typical vue 2 way. However if you want stricter prop types,
you can use `PropType` globally provided by kudra.

```vue [components/foo.vue]
<template>
  <div>Foo</div>
</template>

<script lang="ts">
export default defineComponent({
  props: {
    color: {
      type: String as PropType<"red" | "blue">,
      required: true,
    },
  },
});
</script>
```

## Using your components

After defining your components you should be able to get type suggestions for your global components & their props, similar to the [gif above](#demo).

You will also receive suggestions for the lazy versions of your global components. This can be toggled off in the
kudra componentLoader options.

If your components don't appear, try restarting the volar server inside
vscode, while also insuring that the dev server is running.

```vue [pages/index.vue]
<template>
  <div>
    <Foo color="red" />
    <LazyFoo color="blue" />
  </div>
</template>

<script lang="ts">
export default defineComponent({});
</script>
```
