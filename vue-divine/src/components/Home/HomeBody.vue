<template>
    <div id="homeBody">
        <!-- Dynamic login component from CentralNavCore -->
        <component :is="currentView"></component>

        <app-masonryPosts></app-masonryPosts>
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
                currentView: 'app-centralNavLogin'
            }
        },
        created(){
            /*call from CentralNavLogin */
            eventBus.$on('loginToCentralNav', (data) => {
                this.currentView = 'app-CentralNav';
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
