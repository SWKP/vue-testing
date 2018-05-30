<template>
  <div>
        <router-view></router-view>

    <!--<app-introPage></app-introPage>-->
    <!--<component :is="currentView"></component>-->
  </div>
</template>

<script>
    import { eventBus } from './main.js';
    import Home from './components/Home';
    import SignUp from './components/SignUp';
    import IntroPage from './components/IntroPage';


    export default {
        name: 'app',
        components: {
            appHome: Home,
            appSignUp: SignUp,
            appIntroPage: IntroPage
        },
        data: function () {
            return {
                currentView: 'app-home'
            }
        },
        created(){
            eventBus.$on('signUpComponentSwap', () => {
                this.currentView = 'app-signUp';
            });
            eventBus.$on('resetComponents', () => {
                this.currentView = 'app-home';
            });
        }

    }
</script>

<style lang="scss">
//IMPORT MAIN GLOBAL SCSS FILE!
@import 'assets/sass/main.scss';

</style>
