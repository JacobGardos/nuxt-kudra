---
title: Setup
description: "Setup Automatic Type Generation In Nuxt 2"
position: 2
category: Guide
---

<alert type="warning">

This module is intended to be used with Nuxt 2 only. Nuxt 3 provides this modules functionality out of the box.

</alert>

## Installation

Add the following dependencies to your project

<code-group>
  <code-block label="NPM" active>

```bash
npm install nuxt-kudra
```

  </code-block>
  <code-block label="Yarn" >

```bash
yarn add nuxt-kudra
```

  </code-block>

</code-group>

<code-group>
  <code-block label="NPM" active>

```bash
npm install -D @nuxt/typescript-build @nuxt/types @vue/runtime-dom
```

  </code-block>
  <code-block label="Yarn" >

```bash
yarn add --dev @nuxt/typescript-build @nuxt/types @vue/runtime-dom
```

  </code-block>

</code-group>

Then, add `nuxt-kudra/module` to the `buildModules` section of `nuxt.config.ts`:

```js [nuxt.config.ts]
{
  buildModules: ["@nuxt/typescript-build", "nuxt-kudra/module"],
  kudra: {
    // Options
  },
  components: true, // Required if you want kudra to generate component types
}
```

## Ts Config

Insure the following fields are defined in your tsconfig

```json [tsconfig.json]
{
  "compilerOptions": {
    "jsx": "preserve",
    "types": ["@nuxt/types", "@types/node", "nuxt-kudra"]
  },
  "vueCompilerOptions": {
    "target": 2.7
  }
}
```

## Volar

Insure that you have downloaded [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) for vscode & have enabled [takeover mode](https://vuejs.org/guide/typescript/overview.html#volar-takeover-mode).

<img src="/setup/volar.png"   width="1280" height="640" alt=""/>

## Start The Server

You can now start the dev server and expect kudra to successfully generate your projects types in the outputFolder (_defaults to kudra_).

If vscode doesn't immediately pickup on your types, try restarting the vue server by pressing `CTRL+ SHIFT + P` and
running `Volar: Restart Vue Server`

```bash
npm run dev
```

## Nuxt Config (Optional)

If you prefer a cleaner type safe way to define your nuxt config, you can use the defineNuxtConfig function exported by kudra in your `nuxt.config.ts` file.

```ts [nuxt.config.ts]
import { defineNuxtConfig } from "nuxt-kudra";

export default defineNuxtConfig({
  components: true,
  buildModules: ["@nuxt/typescript-build", "nuxt-kudra/module"],
  kudra: {
    // options
  },
});
```
