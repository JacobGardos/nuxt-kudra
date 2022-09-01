---
title: Vuetify
description: "Vuetify 2 Component Types For Nuxt 2"
position: 6
category: Experimental
---

<alert type="warning">

This is an experimental feature to be used ideally with Vuetify >= 2.6 . Use with caution

</alert>

<gif src="/demo/vuetify.gif" id="demo"></gif>

Vuetify is a popular UI framework amongst vue/nuxt developers. However vuetify 2 & it's corresponding nuxt module `@nuxtjs/vuetify` is missing type definitions for its components and their slots / props.

## Kudra Vuetify

Kudra can generate type definitions for vuetify components by enabling the experimental feature.

#### 1. Enable the experimental option

```ts [nuxt.config.ts]
import { defineNuxtConfig } from "nuxt-kudra";

export default defineNuxtConfig({
  kudra: {
    experimentalOptions: {
      vuetify: {
        disable: false, // Enabled
      },
    },
  },
});
```

#### 2. Install `@nuxtjs/vuetify`

<code-group>
  <code-block label="NPM" active>

```bash
npm i -D @nuxtjs/vuetify
```

  </code-block>
  <code-block label="Yarn" >

```bash
yarn add --dev @nuxtjs/vuetify
```

  </code-block>

</code-group>

#### 3. Add Vuetify to tsconfig

```json [tsconfig.json]
{
  "compilerOptions": {
    "jsx": "preserve",
    "types": ["@nuxt/types", "@types/node", "nuxt-kudra", "@nuxtjs/vuetify"]
  },
  "vueCompilerOptions": {
    "target": 2.7
  }
}
```

## Usage

After enabling the feature, your IDE should provide you with type suggestions, similar to the [gif above](#demo)
