<template>
    <div id="homeBody">
        <!-- Dynamic login component from CentralNavCore -->
        <component :is="currentView"></component>

        <app-masonryPosts></app-masonryPosts>

        <div v-if="postCount <= 0" class="noPosts">
            <h2 style="text-align: center;">Sorry, no posts to display.</h2>
        </div>
    </div>
</template>

<script>
    import CentralNav from './centralNavigation/CentralNav';
    import CentralNavLogin from './centralNavigation/CentralNavLogin';
    import MasonryPosts from './MasonryPosts';

    import { eventBus } from '../../main';

    export default {
        components: {
            appCentralNav: CentralNav,
            appCentralNavLogin: CentralNavLogin,
            appMasonryPosts: MasonryPosts
        },
        data: function () {
            return {
                currentView: 'app-centralNavLogin',
                postCount: '999'
            }
        },
        created(){
            /*call from CentralNavLogin */
            eventBus.$on('loginToCentralNav', (data) => {
                this.currentView = 'app-CentralNav';
            });
            /*call from MasonryPosts */
            eventBus.$on('postCount', (data) => {
                console.log('Post Count receved! ' + data);
                this.postCount = data;
            });
        }
    }

</script>

<style scoped>
    #homeBody {
        background: #dad8d8;
        min-height: 800px;
        width: 1200px;
        display: block;
        margin: 0 auto;
    }

</style>
