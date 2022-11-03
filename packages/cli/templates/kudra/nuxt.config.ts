import { defineNuxtConfig } from "nuxt-kudra";
<%_ if (ui === 'vuetify') { _%>import colors from 'vuetify/es5/util/colors' <%_ } _%>


export default defineNuxtConfig({
  <%_ if (mode === 'spa') { _%>	
  ssr: false,
  <%_ } _%>
  <%_ if (target === 'static') { _%>	
  target: '<%= target %>',
  <%_ } _%>
  head: {
    <%_ if (ui === 'vuetify') { _%>
    titleTemplate: '%s - <%= name %>',
    <%_ } _%>
    title: "<%= name %>",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  components: true,
  buildModules: [
    'nuxt-kudra',
    '@nuxt/typescript-build',
    <%_ if (ui === 'vuetify') { _%>
    '@nuxtjs/vuetify',	
    <%_ } _%>
  ],
  modules: [
    <%_ if (axios) { _%>
    '@nuxtjs/axios',	
    <%_ } _%>
    <%_ if (content) { _%>
    '@nuxt/content',	
    <%_ } _%>
  ],
  <%_ if (axios) { _%>
  axios: {
    baseURL: '/'
  },
  <%_ } _%>
  <%_ if (content) { _%>
  content: {},
  <%_ } _%>
  <%_ if (ui === 'vuetify') { _%>
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  kudra: {
    experimentalOptions: {
      vuetify: {
        disable: false,
      },
    },
  },
  <%_ } _%>
});
