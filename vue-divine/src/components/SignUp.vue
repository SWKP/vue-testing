<template>
    <div class="wrapper">
        <component :is="currentView"></component>
    </div>
</template>

<script>
    import { eventBus } from './../main';
    import SignUpJoin from './SignUp/SignUpJoin';
    import SignUpQuestionOne from './SignUp/SignUpQuestionOne';
    import SignUpQuestionTwo from './SignUp/SignUpQuestionTwo';
    import SignUpQuestionThree from './SignUp/SignUpQuestionThree';

    export default {
        components: {
            appSignUpJoin: SignUpJoin,
            appSignUpQuestionOne: SignUpQuestionOne,
            appSignUpQuestionTwo: SignUpQuestionTwo,
            appSignUpQuestionThree: SignUpQuestionThree
        },
        data: function () {
            return {
                currentView: 'appSignUpJoin'
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



        }
    }
</script>

<style scoped>

    #content{
        width: 600px;
        text-align: center;
        margin: 12% auto;
        padding:55px;
        background: #dad8d8;
    }
    input{
        margin: 5px 0px;
        padding: 10px;
        width: 200px;
    }
    button{
        margin: 5px 0px;
        padding: 10px;
        width: 150px;
    }
    h1{
        margin: 10px;
        font-size: 40px;
    }
    p{
        text-align: left;
        margin: 25px 15px;
    }

</style>
