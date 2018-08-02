<template>
    <div>
        <div class="userPanel">
            <div class="userPanel__avatar">
                <div>
                     <img src="../../assets/img/user.jpg" alt="User Avatar" class="userPanel__image">
                </div>
                <div class="userPanel__name">
                    <h1>John Smith</h1>
                    <div class="userPanel__sign">Gemini</div>
                </div>
            </div>
                <div class="userPanel__info">
                    <div class="userPanel__item">
                        <div><h3>Messages</h3></div>
                        <icon class="icon" name="envelope" scale="1.5"></icon>
                    </div>
                    <div class="userPanel__item">
                        <div><h3>Notifications</h3></div>
                        <icon class="icon" name="bell" scale="1.5"></icon>
                    </div>
                    <div class="userPanel__item">
                        <div><h3>Friend Requests</h3></div>
                        <icon class="icon" name="user-plus" scale="1.5"></icon>
                    </div>
                    <div class="userPanel__item">
                        <div><h3>Settings</h3></div>
                        <icon class="icon" name="gear" scale="1.5"></icon>
                    </div>
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


.userPanel {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    background-image: linear-gradient(to right, #00000094, var(--color-primary-light) 70%, var(--color-primary-light));


    &__avatar {
        display: flex;
        align-items: center;
        align-self: stretch;
        background-color: var(--color-primary-light);
        clip-path:polygon(0 0, 100% 0, 80% 100%, 0 100%);
        flex: 0 0 50rem;
        padding-left: 3rem;
    }
    
    &__image {
        width: 180px;
        height: 180px;
        border-radius: 100px;
        margin: 1rem 2rem 0 2rem;
    }

    &__name {
        margin-right: auto;
    }

    &__info {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-self: stretch;
        font-size: 2rem;
        color: #fff;

        & > * {
            text-align: center;
            padding: 20px;

            &:hover {
                background-color: red;
            }
        }

    }

    &__item {
        display: flex;
        justify-content: space-between;
        align-items: center;

        //TESTING
        //background-color:red;
        clip-path:polygon(77% 0, 100% 0, 100% 100%, 77% 100%);

        transition: all .4s;

        div {
            margin: 0 auto;

        }

        &:hover {
            cursor: pointer;
            clip-path:polygon(0 0, 100% 0, 100% 100%, 0 100%);
            background-color: var(--color-primary-highlight);
        }
    }



    
}

        .icon {
            margin-left: 3rem;
        }


</style>