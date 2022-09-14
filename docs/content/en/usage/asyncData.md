---
title: AsyncData
description: "Generate AsyncData Types Nuxt 2"
position: 5
category: Usage
---

<gif src="./demo/asyncData.gif" id="demo"></gif>

Kudra will generate a type that allows you to have access to the return value of asyncData, inside of your page.

It will also [remove access](https://nuxtjs.org/docs/features/data-fetching/#async-data) to the `this` keyword inside of asyncData.

<alert type="warning">

It's important to keep in mind that despite the fact that asyncData is available when defining your components _via IDE suggestions_, you must remember that [components do not have an asyncData method.](https://nuxtjs.org/docs/features/data-fetching/#async-data-in-components)

</alert>
