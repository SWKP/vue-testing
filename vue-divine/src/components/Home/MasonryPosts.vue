<template>
    <div id="masonryPosts">
        <!--<app-masonryPost class="item"></app-masonryPost>-->
        <app-masonryPost class="item" v-for="post in posts" :data="post"></app-masonryPost>
    </div>
</template>

<script>
import MasonryPost from './MasonryPost';

export default{
    components: {
        appMasonryPost: MasonryPost
    },
    data: function () {
        return {
            posts: [
                {title: 'MyTitle', author: 'My Name', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
                {title: 'MyTitle2', author: 'My Name2', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
                {title: 'MyTitle3', author: 'My Name3', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
                {title: 'MyTitle4', author: 'My Name', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
                {title: 'MyTitle5', author: 'My Name2', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
                {title: 'MyTitle6', author: 'My Name3', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}
            ]
        }
    }
}

</script>

<style scoped>
    #masonryPosts {
        column-count: 3;
        column-gap: 2em;
    }
    .item { /* Masonry bricks or child elements */
        background-color: #eee;
        display: inline-block;
        margin: 0 0 1em;
    }

</style>
