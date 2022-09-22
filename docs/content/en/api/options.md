---
title: Options
description: "Kudra Options"
position: 7
category: "API"
---

You can pass different options using the `kudra` property in your `nuxt.config.ts`.

```ts [nuxt.config.ts]
import { defineNuxtConfig } from "nuxt-kudra"; // Optional

export default defineNuxtConfig({
  kudra: {
    // Kudra options here
  },
});
```

## `outputDir`

The directory where the declaration files will be generated. Should be an empty directory which **does not** contain important
files as the directory will be frequently deleted.

- Type: `string`

```ts [Default Options]
kudra: {
  outputDir: "./kudra",
}
```

## `pathSeparator`

Path separator to use when resolving paths in `.d.ts` files.

- Type: `string`

```ts [Default Options]
kudra: {
  pathSeparator: "/",
}
```

## `log`

Configures which messages kudra should log

- Type: `object`

```ts [Default Options]
kudra: {
  log: {
    loaderAdded: true,
  },
}
```

- **loaderAdded** - Log out which loaders have been added

## `disclaimerText`

Whether or not to stamp generated kudra files with a disclaimer comment

- Type: `boolean`

```ts [Default Options]
kudra: {
  disclaimerText: true,
}
```

## `componentLoader`

Options for generating global component types

- Type: `object`

```ts [Default Options]
kudra: {
  componentLoader: {
    disable: false,
    typeLazy: true,
    filename: "components",
  }
}
```

- **disable** - Whether or not to disable the component loader
- **typeLazy** - Whether or not to generate the types for the lazy version's of the global components
- **filename** - The name of the emitted .d.ts file

## `pluginLoader`

Options for generating global plugin types

- Type: `object`

```ts [Default Options]
kudra: {
  pluginLoader: {
    disable: false,
    filename: "plugins",
    injectionKey: "plugins",
  }
}
```

- **disable** - Whether or not to generate global plugin types
- **filename** - The name of the emitted .d.ts file
- **injectionKey** - The name of the key used to access plugins in ssr context

## `globalsLoader`

Options for globally generated types

- Type: `object`

```ts [Default Options]
kudra: {
  globalsLoader: {
    disable: false,
    filename: "globals",
    globalDefineComponent: true,
    globalDefinePlugin: true,
  }
}
```

- **disable** - Whether or not to disable the generation of all global types
- **filename** - The name of the emitted .d.ts file
- **globalDefineComponent** - Whether or not to make defineComponent available globally
- **globalDefinePlugin** - Whether or not to make definePlugin available globally

## `componentBase`

Options for component base option types

- Type: `object`

```ts [Default Options]
kudra: {
  componentBase: {
		disable: false,
		filename: "component-base",
		typedProperties: {
			asyncData: {
				disable: false,
			},
			layout: {
				disable: false,
				strict: true,
			},
			middleware: {
				disable: false,
				strict: true,
			},
	},
  }
}
```

- **disable** - Whether or not to disable the component base loader
- **filename** - The name of the emitted .d.ts file
- **typedProperties**
  - **asyncData**
    - **disable** - Whether or not to generate asyncData related types
  - **layout**
    - **disable** - Whether or not to generate types for layout names
    - **strict** - Enable strict layout names when defining components
  - **middleware**
    - **disable** - Whether or not to generate types for middleware
    - **strict** - Enable strict middleware names when defining components

## `experimentalOptions`

Options for loading experimental features.

- Type: `object`

```ts [Default Options]
kudra: {
  experimentalOptions: {
    directoryName: "experimental",
    vuetify: {
      directoryName: "vuetify",
      disable: true,
      filename: "lib",
      componentsFilename: "components",
    },
  }
}
```

- **directoryName** - The name of the experimental types directory
- **vuetify**
  - **directoryName** - The name of the experimental vuetify types directory
  - **disable** - Whether or not to generate experimental vuetify types
  - **componentsFilename** - The name of the components emitted .d.ts file
  - **filename** - The name of the emitted .d.ts file
