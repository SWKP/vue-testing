<template>
        <div id="content">
            <h1>Question 1</h1>
            <input placeholder="Screen Name">
            <br>
            <p>Avatar:</p>
            <select name="avatar">
                <option value="angel" selected>Angel</option>
                <option value="demon">Demon</option>
                <option value="cross">Cross</option>
                <option value="halo">Halo</option>
            </select>
            <br>
            <p>Gender:</p>
            <smooth-picker ref="genderSmoothPicker" :data="genderData" :change="genderDataChange" />
            <br>
            <button @click="signUpBack">Back</button>
            <button @click="signUpNext">Next</button>
        </div>
</template>

<script>
    import { eventBus } from '../../main';

    export default {
        data: function () {
            return {
                genderData: [
                  {
                    currentIndex: 1,
                    flex: 3,
                    list: ['Female', 'Male', 'Other'],
                    onClick: this.clickOnGender,
                    textAlign: 'center',
                    className: 'row-group'
                  }
                ]
            }
        },
        methods: {
            signUpNext: function(){
                eventBus.$emit('switchToQuestionTwo');
                eventBus.$emit('increaseProgressBar');
            },
            signUpBack: function(){
                eventBus.$emit('decreaseProgressBar');
                eventBus.$emit('switchSignUpComponent', 'appSignUpJoin');
            },
            /*Gender Picker Methods*/
            clickOnGender () {
                const ciList = this.$refs.genderSmoothPicker.getCurrentIndexList();
                window.alert('Gender Clicked index:' + ciList[0]);
            },
            genderDataChange (gIndex, iIndex) {
                console.info('Gender list: ', gIndex, iIndex);
            }
        }

    }
</script>

<style scoped>

    #content{
        width: 600px;
        text-align: center;
        margin: 0px auto 10%;
        padding:55px;
        background: #dad8d8;
    }
    input{
        margin: 15px 0px;
        padding: 10px;
        width: 200px;
        border: none;
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
        margin: 25px 25% 5px;
    }
    .smooth-picker.flex-box {
        width: 300px;
        margin: 0 auto;
    }
    select {
        width: 220px;
        padding: 10px;
        border: none;
        color: #b1a9a9;
    }

</style>
