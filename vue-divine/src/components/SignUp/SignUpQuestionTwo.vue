<template>
        <div id="content">
            <h1>Questions 2</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>

            <button @click="signUpNext">Next</button>
        </div>
</template>

<script>
    import { eventBus } from '../../main';

    export default {
        data: function () {
            return {

            }
        },
        methods: {
            signUpNext: function(){
                eventBus.$emit('switchToQuestionThree');
            }
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
