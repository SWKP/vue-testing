<template>
    <div>
        <div class="container">

            <header class="header">
                <div class="topBanner">
                    Top Banner
                </div>
                <div class="messageTicker">
                    Message Ticker
                </div>
            </header>

            

            <div class="content">
                <div class="userPanel">
                    User Panel
                </div>

                <div class="content__inner">
                    <nav class="sidebar">
                        Sidebar
                    </nav>
                    <div class="posts">
                        Post Area
                    </div>
                </div>
            </div>

            <footer class="footer">
                Footer
            </footer>
        </div>
        
    </div>
</template>

<script>

//import Header from './shared/HeaderSmall';


export default {
  components: {

  }
}

</script>

<style lang="scss" scoped>
    .container {
        position: relative;
        max-width: var(--boxed-width);
        background-color: var(--color-grey-light-2);
        margin: 8rem auto;
        box-shadow: var(--shadow-dark);
        
        //Filer CSS
        min-height: 50rem;
    }
    .header {
        width: 100%;
        display: flex;
        flex-direction: column;

        //Filler CSS
        height: 30rem;
        background-color: green;
    }

    .topBanner {
        background-color: blue;
        flex: 1;
    }

    .messageTicker {
        width: 100%;
        flex: 0 0  7rem;
        background-color: red;
    }

    .userPanel {
        width: 100%;
        background-color:rgb(255, 166, 0);
        
        //Filler CSS
        height: 15rem;
    }
    .content {

        &__inner {
            display: flex;
        }
    }

    .sidebar {
        background-color: var(--color-grey-dark-1);
        flex: 0 0  20%;

        //Filler CSS
        height: 100rem;
    }

    .posts {
        background-color: orangered;
        flex: 1;
    }

    .footer {
        width: 100%;
        background-color: rgb(224, 221, 221);
        position: absolute;
        bottom: 0;

        //Filler CSS
        height: 15rem;
    }

</style>