<template>
    <div id="masonryPosts">
        <app-masonryPost class="item"></app-masonryPost>
        <app-masonryPost class="item"></app-masonryPost>
        <app-masonryPost class="item"></app-masonryPost>
        <app-masonryPost class="item"></app-masonryPost>
        <app-masonryPost class="item"></app-masonryPost>
        <app-masonryPost class="item"></app-masonryPost>
        <app-masonryPost class="item"></app-masonryPost>
        <app-masonryPost class="item"></app-masonryPost>
        <app-masonryPost class="item"></app-masonryPost>
    </div>
</template>

<script>
import MasonryPost from './MasonryPost';

export default{
    components: {
        appMasonryPost: MasonryPost
    }
}

</script>

<style scoped>
    #masonryPosts{
        column-count: 3;
        column-gap: 2em;
    }
    .item { /* Masonry bricks or child elements */
        background-color: #eee;
        display: inline-block;
        margin: 0 0 1em;
    }

</style>
