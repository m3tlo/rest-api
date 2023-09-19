import Vue from 'vue';
import Vuelidate from 'vuelidate';
import App from './App.vue';
import router from './router';
import store from './store';
import messagePlugin from './utils/message.plugin';
import dateFilter from './filters/date.filter';
import currencyFilter from './filters/currency.filter';
import MyLoader from './components/app/MyLoader';
import './registerServiceWorker';
import 'materialize-css/dist/js/materialize.min';
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'


Vue.config.productionTip = false;

Vue
.use(messagePlugin)
.use(Vuelidate);


Vue.filter('date', dateFilter)
Vue.filter('currency', currencyFilter);
Vue.component('MyLoader', MyLoader)


firebase.initializeApp({
  apiKey: 'AIzaSyCCXZvAnRvX0DumereSdyW8yMg7hUvp42I',
  authDomain: 'vue-crm-83209.firebaseapp.com',
  projectId: 'vue-crm-83209',
  storageBucket: 'vue-crm-83209.appspot.com',
  messagingSenderId: '926858417618',
  appId: '1:926858417618:web:b9d7d6f1eae3612f24a40b',
  measurementId: 'G-3J8GQVZL20',
});

let app

firebase.auth().onAuthStateChanged(() => {
  if(!app) {
  app = new Vue({
    router,
    store,
    render: (h) => h(App),
  }).$mount('#app');
  }
})



