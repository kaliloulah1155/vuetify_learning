// Styles
import "material-design-icons-iconfont/dist/material-design-icons.css"; 
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader

import 'vuetify/styles'
import { aliases, md } from "vuetify/iconsets/md";
import { mdi } from "vuetify/iconsets/mdi";

 


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
 
});
