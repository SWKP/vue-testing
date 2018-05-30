<template>
    <div class="wrapper">
        <transition name="fade">
        <component :is="currentView"></component>
        <app-progressBar class="progressBar" size="big" :val="progressBar"></app-progressBar>
        </transition>
    </div>
</template>

<script>
    import { eventBus } from './../main';
    import SignUpJoin from './SignUp/SignUpJoin';
    import SignUpQuestionOne from './SignUp/SignUpQuestionOne';
    import SignUpQuestionTwo from './SignUp/SignUpQuestionTwo';
    import SignUpQuestionThree from './SignUp/SignUpQuestionThree';
    import ProgressBar from 'vue-simple-progress';

    export default {
        components: {
            appSignUpJoin: SignUpJoin,
            appSignUpQuestionOne: SignUpQuestionOne,
            appSignUpQuestionTwo: SignUpQuestionTwo,
            appSignUpQuestionThree: SignUpQuestionThree,
            appProgressBar: ProgressBar
        },
        data: function () {
            return {
                currentView: 'appSignUpJoin',
                progressBar: 0
            }
        },
        /* Event bus listeners below */
        created(){
            eventBus.$on('switchToQuestionOne', () => {
                this.currentView = 'appSignUpQuestionOne';
            });
            eventBus.$on('switchToQuestionTwo', () => {
                this.currentView = 'appSignUpQuestionTwo';
            });
            eventBus.$on('switchToQuestionThree', () => {
                this.currentView = 'appSignUpQuestionThree';
            });
            eventBus.$on('increaseProgressBar', () => {
                this.progressBar+= 33.333;
                if(this.progressBar > 100){
                    this.progressBar = 100;
                }
            });
            eventBus.$on('decreaseProgressBar', () => {
                this.progressBar-= 33.333;
                if(this.progressBar < 0){
                    this.progressBar = 0;
                }
            });
            eventBus.$on('switchSignUpComponent', (data) => {
                this.currentView = data;
            });


        },
        methods: {

        }

    }
</script>

<style scoped>

.wrapper {
    margin-top: 10%;
    position:relative;
}

#content{

    position: absolute;
    left: 0;
    right: 0;
    margin: auto;

    max-width: 600px;
    text-align: center;
    background: #e6e6e6!important;
    margin-bottom: -25px!important;
    box-shadow: var(--shadow-dark);
}

.vue-simple-progress {
}

.progressBar {
    max-width: 600px;
}

.fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: .25s;
}

.fade-enter-active {
  transition-delay: .25s;
}

.fade-enter, .fade-leave-active {
  opacity: 0
}


</style>
