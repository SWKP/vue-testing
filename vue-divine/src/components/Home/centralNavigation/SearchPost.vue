<template>
    <div class="coreSection">
        <h1>Search Post</h1>
        <input v-model="searchPost" placeholder="Post Title">
        <br>
        <button @click="submitSearchPost()">Submit</button>
    </div>
</template>

<script>
    import { eventBus } from '../../../main';

    export default {
        data: function () {
            return {
                searchPost: ''
            }
        },
        methods: {
            submitSearchPost() {
                console.log('Post search Submitted');
                eventBus.$emit('postWasSearched', this.searchPost);
                this.searchPost = '';
            }
        }

    }
</script>

<style scoped>
    .coreSection{
        display: table;
        margin: 0 auto;
        padding: 15px 0px;
        width: 200px;
    }
    input{
        margin: 5px 0px;
        padding:10px;
    }

</style>
