<template>
    <div>
        <div class="userPanel">
                <div>
                     <img src="../../assets/img/user.jpg" alt="User Avatar" class="userPanel__avatar">
                </div>
                <div class="userPanel__name">
                    <h1>John Smith</h1>
                    <div class="userPanel__sign">Gemini</div>
                </div>
                <div class="userPanel__info">
                    <div>Messages</div>
                    <div>Notifications</div>
                    <div>Friend Requests</div>
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
    
    &__avatar {
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

        & > * {
            text-align: center;
            padding: 20px;

            &:hover {
                background-color: red;
            }
        }

        //TEST CSS
        background: green;
    }
}


</style>