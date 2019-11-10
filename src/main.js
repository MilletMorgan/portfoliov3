import './assets/css/style.css';
import './assets/css/sidebar.css';
import './assets/css/balisestyle.css';
import './assets/css/bootstrap.min.css';
import './assets/css/animate.css';
import Vue from 'vue';
import App from './App.vue';
import router from './router'

Vue.config.productionTip = false;

new Vue({
    router,
    render: (h) => {
        return h(App);
    },
}).$mount('#app');
