// Styles
import "material-design-icons-iconfont/dist/material-design-icons.css"; 
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader

import 'vuetify/styles'
import { aliases, md } from "vuetify/iconsets/md";
import { mdi } from "vuetify/iconsets/mdi";

// Translations provided by Vuetify
import { en, fr } from "vuetify/locale";
import DateFnsAdapter from "@date-io/date-fns";
import enUS from "date-fns/locale/en-US";
import frFr from "date-fns/locale/fr";
 
 


// Vuetify
import { createVuetify } from 'vuetify'



export default createVuetify({
  icons: {
    defaultSet: "md",
    aliases,
    sets: {
      md,
      mdi,
    },
  },
  locale: {
    locale: "fr",
    fallback: "en",
    messages: { fr, en },
  },
  date: {
    adapter: DateFnsAdapter,
    locale: {
      en: enUS,
      fr: frFr,
    },
  },
});
