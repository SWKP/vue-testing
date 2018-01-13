<template>
    <div id="centralNavCore">
        <nav>
            <div>
                <h1 class="login">Please sign in.</h1>
                <div class="loginInputs">
                    <input v-model="login.username" placeholder="Username">
                    <input v-model="login.password" placeholder="Password">
                    <button class="loginButton" @click="loginSubmit">Login</button>
                    <button class="loginButton">Sign Up</button>
                    <p class="errorMessage">{{ wrongLogin }}</p>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
    import { eventBus } from '../../../main';

    export default {
        data: function () {
            return {
                login: [
                    { username: '' },
                    { password: '' },
                ],
                wrongLogin: ''
            }
        },
        methods: {
            loginSubmit: function(){
                var nameLength = this.login.username;

                if(this.login.username == null && this.login.password == null){
                    this.wrongLogin = 'Please enter a name & password to login';
                } else {
                    if(this.login.username == 'Karl' && this.login.password == 'Owns'){
                   /*emit to homeBody */
                   eventBus.$emit('loginToCentralNav');
                   } else {
                       this.login.username = '';
                       this.login.password = '';
                       this.wrongLogin = 'Wrong password. Hint: "Karl Owns."'
                   }
                }
            }
        }
    }
</script>

<style scoped>
    #centralNavCore{
        border: 2px solid black;
        min-height:150px;
    }
    .login{
        text-align:center;
        font-size: 35px;
        margin:15px;
    }
    .loginInputs{
        text-align:center;
        padding:0px;
    }
    input{
        margin: 5px 0px;
        padding: 10px;
        width: 25%;
    }
    button{
        margin: 5px 0px;
        padding: 10px;
        width: 10%;
    }
    p.errorMessage {
        color: red;
        font-weight: bold;
    }

</style>
