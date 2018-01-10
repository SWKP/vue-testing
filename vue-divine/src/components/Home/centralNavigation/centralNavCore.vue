<template>
    <div id="centralNavCore">
        <nav>
            <ul>
                <li @click="currentView='app-createPost'">Make Post</li>
                <li @click="currentView='app-searchPost'">Search</li>
                <li @click="currentView='app-viewArticles'">View Articles</li>
            </ul>
            <div>
                <!--<app-createPost></app-createPost>
                <app-searchPost></app-searchPost>
                <app-viewArticles></app-viewArticles>-->
                <component :is="currentView"></component>
            </div>
        </nav>
    </div>
</template>

<script>
    import CreatePost from './CreatePost';
    import SearchPost from './SearchPost';
    import ViewArticles from './ViewArticles';

    export default {
        components: {
            appCreatePost: CreatePost,
            appSearchPost: SearchPost,
            appViewArticles: ViewArticles
        },
        data: function () {
            return {
                currentView: 'app-createPost'
            }
        }
    }
</script>

<style scoped>
    #centralNavCore{
        border: 2px solid black;
        min-height:280px;
    }
    ul {
        display: flex;
        align-items: stretch; /* Default */
        justify-content: space-between;
        width: 100%;
        background: #cacaca;
        margin: 0;
        padding: 0;
    }
    li {
        display: block;
        flex: 0 1 auto; /* Default */
        list-style-type: none;
        padding: 20px 10%;
    }
    li:hover{
        background: #72ffb1;
        color: white;
        cursor:pointer;
    }

</style>
