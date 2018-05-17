<template>
    <div id="centralNavCore">
        <nav>
            <ul>
                <li @click="currentView='app-createPost'"><h2>Make Post<icon name="pencil-square" scale="1.5"></icon></h2></li>
                <li @click="currentView='app-searchPost'"><h2>Search<icon name="search" scale="1.5"></icon></h2></li>
                <li @click="currentView='app-viewArticles'"><h2>View Articles<icon name="newspaper-o" scale="1.5"></icon></h2></li>
            </ul>
            <div>
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
        padding: 20px 8.3%;
    }
    li:hover{
        background: #72ffb1;
        color: white;
        cursor:pointer;
    }
    .fa-icon{
        margin:0px 10px;
        float: right;
    }
    h2{

    }

</style>
