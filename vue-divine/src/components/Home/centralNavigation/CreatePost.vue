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
                post: { title: '', message: '', timeStamp: '' }

            }
        },
        methods: {
            submitPost() {

                var date = new Date();

                this.post.timeStamp = date.toLocaleDateString("en-US") + " at " + date.toLocaleTimeString("en-US");
                eventBus.$emit('postWasSubmitted', this.post);
                this.post.title = '';
                this.post.message = '';
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
    textarea {
        width: 300px;
        height: 60px;
        padding: 10px;
    }
</style>
