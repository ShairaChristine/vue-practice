import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: "mdi"
  },
  theme: {
    themes: {
      light: {
        primary: `#00443e`,
        secondary: `#cddc39`,
        accent: `#8ac34f`,
        error: `#b71c1c`
      }
    }
  }
});
