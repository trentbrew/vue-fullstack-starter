import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'
import VueFullPage from 'vue-fullpage.js'

var firebaseConfig = {

};

//initialize firebase
firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false

Vue.use(VueFullPage);

//scroll directive, just in case
Vue.directive('scroll', {
  inserted: function (el, binding) {
    let f = function (evt) {
      if (binding.value(evt, el)) {
        window.removeEventListener('scroll', f)
      }
    }
    window.addEventListener('scroll', f)
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
