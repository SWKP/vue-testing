<template>
    <div>
        <div class="container">

            <header class="header">
                <app-topBanner class="topBanner"></app-topBanner>

                <div class="messageTicker">
                    Message Ticker
                </div>
            </header>

            

            <div class="content">
                    <app-userPanel class="userPanel"></app-userPanel>

                <div class="content__inner">
                    <app-personalSidebar class="sidebar"></app-personalSidebar>
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

import UserPanel from './PersonalHome/UserPanel';
import TopBanner from './PersonalHome/TopBanner';
import PersonalSidebar from './PersonalHome/PersonalSidebar';


export default {
  components: {
      appUserPanel : UserPanel,
      appTopBanner : TopBanner,
      appPersonalSidebar: PersonalSidebar
  }
}

</script>

<style lang="scss" scoped>
    .container {
        max-width: var(--boxed-width);
        background-color: var(--color-grey-light-2);
        margin: 8rem auto;
        box-shadow: var(--shadow-dark);

        display: flex;
        flex-direction: column;

        
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
        background-color: var(--color-grey-light-4);
        flex: 1;
    }

    .messageTicker {
        width: 100%;
        flex: 0 0  7rem;
        background-color: rgb(200, 24, 216);
    }

    .userPanel {
        width: 100%;
        background-color:rgb(226, 226, 226);
    }
    .content {

        &__inner {
            display: flex;
        }
    }

    .sidebar {
        background-color: var(--color-grey-light-4);
        flex: 0 0 28%;
    }

    .posts {
        background-color: rgb(207, 200, 250);
        flex: 1;
    }

    .footer {
        width: 100%;
        background-color: rgb(224, 221, 221);

        //Filler CSS
        height: 10rem;
    }

</style>