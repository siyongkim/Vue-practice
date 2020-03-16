import Vue from 'vue'
//import App from './App.vue'
import App2 from './App2.vue'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

// new Vue({
//   vuetify,
//   render: h => h(App)
// }).$mount('#app')

new Vue({
  vuetify,
  render: h => h(App2)
}).$mount('#Header')
