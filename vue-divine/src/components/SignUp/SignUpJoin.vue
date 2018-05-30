<template>
        <div id="content">
            <h1>Join Dear Divine today.</h1>
            <p></p>
            <input placeholder="Full Name">
            <br>
            <input placeholder="Email">
            <br>
            <input placeholder="Password">
            <br>
            <a href="/"><button class="btn btn--purple btn--animated" @click="signUpBack">Back</button></a>
            <button class="btn btn--purple btn--animated" @click="signUpNext">Next</button>
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
                console.log('Emitting');
                eventBus.$emit('switchToQuestionOne');
                eventBus.$emit('increaseProgressBar');
            },
            signUpBack: function(){
                eventBus.$emit('decreaseProgressBar');
                eventBus.$emit('resetComponents');
            }
        }
    }
</script>

<style scoped>

    #content{
        border-radius: 5px;
        width: 600px;
        text-align: center;
        margin: 0px auto 10%;
        padding:55px;
    }
    
    h1{
        margin: 10px;
        font-size: 40px;
        color: #8b40d8;
    }
    p{
        text-align: left;
        margin: 25px 15px;
    }

    /*SHARED STYLES*/
    input{
        margin: 5px 0px;
        padding: 10px;
        width: 200px;
        border-radius: 100px;
        border: none;
        line-height: 3rem;
        width: 60%!important;
        font-size: 1.4rem;
        background-color: #9a4de8;
        color: #fff!important;
        transition: all .4s;
    }
    ::placeholder {
            color:white;
        }

    :focus {
        background-color: #bc85f5;
        outline: none;
    }

    button{
        margin: 25px 0px;
        padding: 10px;
        width: 150px;
    }




</style>
