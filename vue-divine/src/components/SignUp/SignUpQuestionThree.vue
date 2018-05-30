<template>
        <div id="content">
            <h1>Question 3</h1>
            <p>Your Spiritual Affiliation:</p>
            <smooth-picker ref="affiliationSmoothPicker" :data="affiliationData" :change="affiliationDataChange" />
            <br>
            <form id="status" action="">
              <input class="status" type="radio" name="status" value="single"> Single<br>
              <input class="status" type="radio" name="status" value="married"> Married<br>
              <input class="status" type="radio" name="status" value="other"> Secret
            </form>
            <br>
            <br>

            <button class="btn btn--purple btn--animated" @click="signUpBack">Back</button>
            <a href="/personalHome"><button class="btn btn--purple btn--animated" @click="signUpNext">Next</button></a>
        </div>
</template>

<script>
    import { eventBus } from '../../main';

    export default {
        data: function () {
            return {
                affiliationData: [
                  {
                    currentIndex: 1,
                    flex: 3,
                    list: ['Chaos Sorcerer of Nurgle', 'Sanguinary Death Cultist', 'Blood Cultist of Khorne', 'Devourer of Worlds Initiate', 'Spiritual Torturer of Slaneesh', 'Other'],
                    onClick: this.clickOnAffiliation,
                    textAlign: 'center',
                    className: 'row-group'
                  }
                ]
            }
        },
        methods: {
            signUpNext: function(){
                console.log('All Questions Done!');
                eventBus.$emit('increaseProgressBar');
            },
            signUpBack: function(){
                eventBus.$emit('switchToQuestionTwo');
                eventBus.$emit('decreaseProgressBar');
            },
            /*Gender Picker Methods*/
            clickOnAffiliation () {
                const ciList = this.$refs.affiliationSmoothPicker.getCurrentIndexList();
                window.alert('Affiliation Clicked index:' + ciList[0]);
            },
            affiliationDataChange (gIndex, iIndex) {
                console.info('Affiliation list: ', gIndex, iIndex);
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
    h1{
        margin: 10px;
        font-size: 40px;
        color: #8b40d8;
    }
    p{
        text-align: left;
        margin: 25px 15px;
    }
    #status{
        text-align:left;
    }
    .status{
        width:20px;
    }

    /*SHARED STYLES*/
    input,
    select {
        margin: 5px 0px;
        padding: 1.5rem;
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
