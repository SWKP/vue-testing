import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App';

/*Components*/
import Home from './components/Home';
import SignUp from './components/SignUp';
import IntroPage from './components/IntroPage';
import PersonalHome from './components/PersonalHome';



/*Smooth Picker*/
import 'vue-smooth-picker/dist/css/style.css';
import SmoothPicker from 'vue-smooth-picker';
Vue.use(SmoothPicker);

/*Other*/
import 'vue-awesome/icons';
import Icon from 'vue-awesome/components/Icon.vue'
Vue.component('icon', Icon);


Vue.use(VueResource);

Vue.use(VueRouter);



const routes = [
    {
        path: '/signup',
        component: SignUp
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/',
        component: IntroPage
    },
    {
        path: '/personalHome',
        component: PersonalHome
    }
];

const router = new VueRouter({
    routes,
    mode: 'history'
});

export const eventBus = new Vue();


new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
