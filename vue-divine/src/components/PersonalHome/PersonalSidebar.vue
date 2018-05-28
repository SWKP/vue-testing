<template>
    <div class="sidebar">
       <div class="element">
           <div class="element__title">
               Friends
           </div>
                <div class="element__list">
                    <div class="person">
                        <img src="../../assets/img/user-1.jpg" alt="Friend avatar">
                        <div class="person__info">
                            <div class="person__name">John Smith</div>
                            <div class="person__sign">Gemini</div>
                        </div>
                    </div>
                    <div class="person">
                        <img src="../../assets/img/user-2.jpg" alt="Friend avatar">
                        <div class="person__info">
                            <div class="person__name">Jane Smith</div>
                            <div class="person__sign">Gemini</div>
                        </div>
                    </div>
                    <div class="person">
                        <img src="../../assets/img/user-3.jpg" alt="Friend avatar">
                        <div class="person__info">
                            <div class="person__name">Tom Stevens</div>
                            <div class="person__sign">Gemini</div>
                        </div>
                    </div>
           </div>

       </div>

       <div class="element">
           <div class="element__title">
               Meditate
           </div>
           <div class="element__feature">
               <div class="element__icon">?</div>
               <div class="element__entry">Daily Intention</div>
           </div>
           <div class="element__feature">
               <div class="element__icon">?</div>
               <div class="element__entry">Mindful Moment</div>
           </div>
           <div class="element__feature">
               <div class="element__icon">?</div>
               <div class="element__entry">My Horoscope</div>
           </div>
       </div>

       <div class="element">
           <div class="element__title">
               Community
           </div>
           <div class="element__feature">
               <div class="element__icon">?</div>
               <div class="element__entry">Find Connections</div>
           </div>
           <div class="element__feature">
               <div class="element__icon">?</div>
               <div class="element__entry">Suggested Threads</div>
           </div>
           <div class="element__feature">
               <div class="element__icon">?</div>
               <div class="element__entry">Other Resources</div>
           </div>
       </div>

        <div class="addMore">
            <div class="addMore__button">
                Add more tabs
            </div>
        </div>
    </div>
</template>

<script>

export default {
  components: {
      
  },
  data: function () {
            return {
               
            }
        }
}

</script>

<style lang="scss" scoped>

    .sidebar {
        padding: 5rem 0;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }

    .element {
        background-color: rgb(218, 218, 218);
        width: 70%;
        margin-bottom: 5rem;
        padding: 1.5rem 0;

        &__title {
            text-align: center;
            font-size: 2.5rem;
        }

        &__feature {
            display: flex;
            justify-content: flex-start;
            padding: .75rem 0;


            &:hover{
                background-color: red;
            }
        }

        &__icon {
            margin: 0 2rem;
            font-size: 1.5rem;
        }

        &__entry {
            font-size: 1.5rem;
        }
    }

    ul {
        list-style-type: none;
    }

    .person {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin: 2rem;

        & img {
            width: 90px;
            height: 90px;
            border-radius: 100px;
        }

        &__info {
            margin-left: 2rem;
        }

        &__name {
            font-size: 1.5rem;
        }

        &__sign {

        }

        &:hover {
            background-color: red;
        }
    }
    
</style>

