<template>
    <div id="masonryPosts">
        <!--<app-masonryPost class="item"></app-masonryPost>-->
        <app-masonryPost class="item" v-for="post in posts" :data="post"></app-masonryPost>

    </div>
</template>

<script>
    import MasonryPost from './MasonryPost';
    import { eventBus } from '../../main';

    export default{
        components: {
            appMasonryPost: MasonryPost
        },
        data: function () {
            return {
                post: [
                    { title: '', message: '' }
                ],
                posts: [
                    {title: 'MyTitle', author: 'My Name', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
                    {title: 'MyTitle2', author: 'My Name2', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
                    {title: 'MyTitle3', author: 'My Name3', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
                    {title: 'MyTitle4', author: 'My Name4', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
                    {title: 'MyTitle5', author: 'My Name5', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
                    {title: 'MyTitle6', author: 'My Name6', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}
                ]
            }
        },
        created(){
            eventBus.$on('postWasSubmitted', (data) => {
                this.post.title = data.title;
                this.post.message = data.message;


                this.posts.push(this.post);
            });
        }
    }

</script>

<style scoped>
    #masonryPosts {
        padding: 20px;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 20px;
    }
    .item { /* Masonry bricks or child elements */
        background-color: #eee;
        display: inline-block;
    }

</style>
