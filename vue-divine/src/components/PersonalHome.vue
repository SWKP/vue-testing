<template>
    <div>
        <div class="container">
            <header class="header">
                <app-topBanner class="topBanner"></app-topBanner>
                <app-HomeEventFeed class="messageTicker"></app-HomeEventFeed>
            </header>
            <div class="content">
                    <app-userPanel class="userPanel"></app-userPanel>

                <div class="content__inner">
                    <app-personalSidebar class="sidebar"></app-personalSidebar>
                    <app-postFeed class="posts"></app-postFeed>
                </div>
            </div>

            <!--<footer class="footer">
                Footer
            </footer>
            -->
        </div>
        
    </div>
</template>

<script>

import UserPanel from './PersonalHome/UserPanel';
import TopBanner from './PersonalHome/TopBanner';
import PersonalSidebar from './PersonalHome/PersonalSidebar';
import PostFeed from './PersonalHome/PostFeed';
import HomeEventFeed from './Home/HomeEventFeed';


export default {
  components: {
      appUserPanel: UserPanel,
      appTopBanner: TopBanner,
      appPersonalSidebar: PersonalSidebar,
      appPostFeed: PostFeed,
      appHomeEventFeed: HomeEventFeed
  }
}

</script>

<style lang="scss" scoped>
    .container {
        max-width: var(--boxed-width);
        margin: 1rem auto;
        box-shadow: var(--shadow-dark);
        border-radius: 5px;

        display: flex;
        flex-direction: column;

        
    }
    .header {
        width: 100%;
        display: flex;
        flex-direction: column;

        //Filler CSS
        height: 30rem;
    }

    .topBanner {
        background-image: linear-gradient(to right bottom, #03A9F4, #f5f0fb);
        flex: 1;
    }

    .messageTicker {
        width: 100%;
        flex: 0 0 7rem;
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
        background-color: #e6e6e6;
        flex: 0 0 32%;
    }

    .posts {
        background-color: #e6e6e6;
        flex: 1;
    }

    .footer {
        width: 100%;
        background-color: rgb(224, 221, 221);

        //Filler CSS
        height: 10rem;
    }

</style>