<template>
        <div id="content">
            <h1>Question 2</h1>
            <p>Date of birth:</p>
            <smooth-picker ref="birthSmoothPicker" :data="birthData" :change="birthDataChange" />
            <br>
            <p>Home Town:</p>
            <input placeholder="Where were you born?">
            <br>
            <br>

            <button class="btn btn--purple btn--animated" @click="signUpBack">Back</button>
            <button class="btn btn--purple btn--animated" @click="signUpNext">Next</button>
        </div>
</template>

<script>
    import { eventBus } from '../../main';

    export default {
        data: function () {
            const nowYear = (new Date()).getFullYear();
            const years = [];
            for (let i = 1991; i <= nowYear; i++) {
                years.push(i);
            }
            return {
                birthData: [
                  {
                    currentIndex: parseInt((nowYear - 1991) / 2),
                    flex: 3,
                    list: years,
                    textAlign: 'center',
                    className: 'row-group'
                  },
                  {
                    currentIndex: 8,
                    flex: 3,
                    list: [...Array(12)].map((m, i) => i + 1),
                    textAlign: 'center',
                    className: 'row-group'
                  },
                  {
                    currentIndex: 1,
                    flex: 3,
                    list: [...Array(30)].map((d, i) => i + 1),
                    onClick: this.clickOnDay,
                    textAlign: 'center',
                    className: 'item-group'
                  }
                ]

            }
        },
        methods: {
            signUpNext: function(){
                eventBus.$emit('switchToQuestionThree');
                eventBus.$emit('increaseProgressBar');
            },
            signUpBack: function(){
                eventBus.$emit('switchToQuestionOne');
                eventBus.$emit('decreaseProgressBar');
            },
            /*Date Picker Methods*/
            isLeapYear (year) {
                return ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0)
              },
              birthDataChange (gIndex, iIndex) {
                console.info('Date list', gIndex, iIndex);
                const ciList = this.$refs.birthSmoothPicker.getCurrentIndexList();

                if (gIndex === 0 || gIndex === 1) { // year or month changed
                  let currentIndex = 15
                  let monthCount = 30

                  let month = iIndex + 1 // month
                  if (gIndex === 0) { // year
                    month = this.birthData[1].list[ciList[1]]
                  }
                  switch (month) {
                    case 2:
                      let selectedYear = this.birthData[0].list[ciList[0]] // month
                      if (gIndex === 0) { // year
                        selectedYear = this.birthData[0].list[iIndex]
                      }

                      let isLeapYear = false;
                      if (this.isLeapYear(selectedYear)) {
                        isLeapYear = true
                      }

                      monthCount = 28
                      currentIndex = 14
                      if (isLeapYear) {
                        monthCount = 29
                        currentIndex = 15
                      }
                      break
                    case 4:
                    case 6:
                    case 9:
                    case 11:
                      monthCount = 30
                      currentIndex = 15
                      break
                    default:
                      monthCount = 31
                      currentIndex = 16
                  }
                  const list = [...Array(monthCount)].map((d, i) => i + 1)
                  this.$refs.birthSmoothPicker.setGroupData(2, { ...this.birthData[2], ...{ currentIndex, list }})
                }
              },
              clickOnDay (gIndex, iIndex) {
                window.alert('Clicked day: ' + this.data[gIndex].list[iIndex])
              },
              confirm () {
                const ciList = this.$refs.birthSmoothPicker.getCurrentIndexList()
                const year = this.data[0].list[ciList[0]]
                const month = this.data[1].list[ciList[1]]
                const day = this.data[2].list[ciList[2]]
                window.alert(
                  year + ' / ' + month + ' / ' + day
                )
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
    margin: 25px 25% 5px;
    }
    .smooth-picker.flex-box {
        width: 300px;
        margin: 0 auto;
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
