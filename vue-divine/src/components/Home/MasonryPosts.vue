<template>
    <div id="masonryPosts">
        <!--<app-masonryPost class="item"></app-masonryPost>-->
        <app-masonryPost class="item" v-for="post in filteredPosts" :data="post"></app-masonryPost>

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
                searchPost: '',
                post: [
                    { title: '', message: '' }
                ],
                posts: [
                    {title: 'Post One', author: 'My Name', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
                    {title: 'Hello World', author: 'My Name2', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
                    {title: 'Test123', author: 'My Name3', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
                    {title: 'MyTitle4', author: 'My Name4', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
                    {title: 'MyTitle5', author: 'My Name5', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
                    {title: 'MyTitle6', author: 'My Name6', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}
                ]
            }
        },
        computed: {
            /* Filter the posts array based on search value */
            filteredPosts: function(){
                return this.posts.filter((post) => {
                    return post.title.match(this.searchPost);
                });
            }
        },
        /* Event bus listeners below */
        created(){
            eventBus.$on('postWasSubmitted', (data) => {
                this.post.title = data.title;
                this.post.message = data.message;
                this.posts.push(this.post);
            });
            eventBus.$on('postWasSearched', (searchData) => {
                console.log('Search query is: ' + searchData);
                this.searchPost = searchData;
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
