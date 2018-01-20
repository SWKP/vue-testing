<template>
  <div>
    <!--<app-home></app-home>-->
    <component :is="currentView"></component>
  </div>
</template>

<script>
    import { eventBus } from './main.js';
    import Home from './components/Home';
    import SignUp from './components/SignUp';

    export default {
        name: 'app',
        components: {
            appHome: Home,
            appSignUp: SignUp
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

<style>
/*Browser CSS resets*/
    html, body {
        margin:0;
        padding:0;
        background-color: #313131;
    }
    h1,h2,h3,h4 {
        padding: 0px;
        margin: 0px;
    }

</style>
