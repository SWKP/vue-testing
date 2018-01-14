<template>
    <div id="masonryPosts">
        <!--<app-masonryPost class="item"></app-masonryPost>-->
        <app-masonryPost class="item" v-for="(post, index) in filteredPosts" :data="post" :index="index"></app-masonryPost>
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
                post: { title: '', message: '', timeStamp: '' }
                ,
                posts: [

                    { id: '', title: 'Post One', author: 'My Name', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
                    { id: '', title: 'Hello World', author: 'My Name2', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
                    { id: '', title: 'Test123', author: 'My Name3', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}

                ]
            }
        },
        watch: {
            /*watch for posts array size change */
            posts: {
              handler: function (val, oldVal) {
                console.log('Posts Array size changed.')
                /*Emit to homeBody */
                return eventBus.$emit('postCount', this.posts.length);
              },
              deep: true
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
                this.post.timeStamp = data.timeStamp;
                this.posts.unshift(this.post);
                this.post = { title: '', message: '', timeStamp: '' };
            });
            eventBus.$on('postWasSearched', (searchData) => {
                console.log('Search query is: ' + searchData);
                this.searchPost = searchData;
            });
            /* Delete Post */
            eventBus.$on('deleteThisPost', (index) => {
                this.posts.splice(index, 1);
            });

            /*Check for initial posts length and send emiter to HomeBody*/
            console.log('Posts Count on launch: ' + this.posts.length);
            if(this.posts.length == 0){
                eventBus.$emit('postCount', this.posts.length);
            }



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
