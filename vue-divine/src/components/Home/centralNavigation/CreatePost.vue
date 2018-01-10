<template>
    <div class="coreSection">
        <h1>Create Post</h1>
        <div class="messageForm">
            <input v-model="post.title" placeholder="Post Title">
            <br>
            <textarea v-model="post.message" placeholder="Write out your post..."></textarea>
            <br>
            <button @click="submitPost()">Submit</button>
        </div>
    </div>
</template>

<script>
    import { eventBus } from '../../../main';

    export default {
        data: function () {
            return {
                post: { title: '', message: '' }

            }
        },
        methods: {
            submitPost() {
                //console.log('Post Submitted');
                eventBus.$emit('postWasSubmitted', this.post);

            }
        }

    }

</script>

<style scoped>
    .coreSection{
        display: table;
        margin: 0 auto;
        padding: 10px 0px;
        width: 200px;
    }
    input{
        margin: 5px 0px;
        padding:10px;
    }
    .messageForm{

    }
    textarea {
        width: 300px;
        height: 60px;
        padding: 10px;
    }
</style>
