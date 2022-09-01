---
title: FAQ
description: "Automatic Type Generator For Nuxt 2"
position: 8
category: "Help"
---

## Why aren't I getting any type suggestions from vscode ?

Insure that you,

1. have followed the [setup](/setup) steps.
2. are running the nuxt `dev` server
3. tried [restarting the Vue server](#how-can-i-restart-the-vue-server-in-vscode)

## How can I restart the Vue Server in vscode ?

Press `CTRL` + `SHIFT` + `P` and type `Volar: Restart Vue server`

## I am experiencing issues with the type suggestions provided by my IDE

If kudra is not throwing any errors & it's generated files don't contain errors, your issues may be caused
by the volar extension. If this is the case, try changing Volar's version to a previous version to see if the issue persists.

## Does this module work for Nuxt 3 / bridge ?

No, Nuxt 3 provides this modules functionality out of the box.

## Why not just use Nuxt bridge ?

Nuxt bridge is an excellent solution if your planning to migrate your project to Vue 3 & Nuxt 3. However, if you plan
on sticking with nuxt 2 + typescript, kudra can help by automating type generation similar to nuxt-bridge.
