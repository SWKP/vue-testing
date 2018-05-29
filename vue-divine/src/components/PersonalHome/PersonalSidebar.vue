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
                            <div class="person__name">Jane Smith</div>
                            <div class="person__sign">Gemini</div>
                        </div>
                    </div>
                    <div class="person">
                        <img src="../../assets/img/user-2.jpg" alt="Friend avatar">
                        <div class="person__info">
                            <div class="person__name">John Smith</div>
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
               <icon class="element__icon" name="calendar" scale="1.5"></icon>
               <div class="element__entry">Daily Intention</div>
           </div>
           <div class="element__feature">
               <icon class="element__icon" name="clock-o" scale="1.5"></icon>
               <div class="element__entry">Mindful Moment</div>
           </div>
           <div class="element__feature">
               <icon class="element__icon" name="moon-o" scale="1.5"></icon>
               <div class="element__entry">My Horoscope</div>
           </div>
       </div>

       <div class="element">
           <div class="element__title">
               Community
           </div>
           <div class="element__feature">
               <icon class="element__icon" name="handshake-o" scale="1.5"></icon>
               <div class="element__entry">Find Connections</div>
           </div>
           <div class="element__feature">
               <icon class="element__icon" name="comments-o" scale="1.5"></icon>
               <div class="element__entry">Suggested Threads</div>
           </div>
           <div class="element__feature">
               <icon class="element__icon" name="bookmark-o" scale="1.5"></icon>
               <div class="element__entry">Other Resources</div>
           </div>
       </div>

        <div class="addMore">
            <div class="addMore__button element__title">
                <h4>More tabs</h4> 
                <icon class="element__icon" name="plus-square" scale="1.5"></icon>
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
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        padding:5rem 6rem;
        
    }

    .element {
        box-shadow: var(--shadow-light);
        overflow: hidden;
        border-radius: 5px;
        background-color: #f1f1f1;
        margin-bottom: 5rem;
        padding: 1.5rem 0;
        transition: all .2s;

        &__list {
            padding-top: .1rem;
        }

        &__title {
            text-align: center;
            font-size: 1.9rem;
            background-image: linear-gradient(to right bottom, #8f43db, #a758f6);
            color: #fff;
            padding: 1.25rem 0;
            margin: -1.4rem 0 1.75rem;
            text-transform: uppercase;
        }

        &__feature {
            display: flex;
            justify-content: flex-start;
            padding: .75rem 0;
            transition: all .3s;


            &:hover{
                background-color: var(--color-primary-highlight);
                transform:translateY(-4px);
                color: white;
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
        width: 90%;
        background-size: 0%;
        background-color: white;
        clip-path:polygon(0 0, 90% 0, 90% 100%, 0 100%);
        border-radius: 100px 0 0 100px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin: 2rem;
        transition: all .4s;
        overflow: visible;

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
            background-color: var(--color-primary-highlight);
            color: white;
            clip-path:polygon(0 0, 100% 0, 80% 100%, 0 100%);
            background-size: 100%;
            transform:translateY(-4px);
        }

        &:hover img {
             filter: grayscale(1);    
            }
    }

    .addMore__button {
        padding: 2rem 0;
        border-radius: .5rem;
        display: flex;
        justify-content: center;
        align-items: center;

        h4 {
            margin-bottom: -5px;
            align-self: center;
        }
    }
    
</style>

