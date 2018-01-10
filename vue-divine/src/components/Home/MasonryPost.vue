<template>
    <div class="singlePost">
        <h2>Title: {{ data.title }}</h2>
        <button @click="deletePost" class="delete">x</button>
        <p>Index: {{ index }}</p
        <p>Time: {{ data.timeStamp }}</p>
        <p>Message: {{ data.message }}</p>
    </div>
</template>

<script>
    import { eventBus } from '../../main';

    export default {
        props: {
            data: {},
            index: ''
        },
        methods: {
            deletePost(){
                console.log(this.data.title);
               eventBus.$emit('deleteThisPost', this.index);

            }
        }
    }

</script>

<style scoped>
    .singlePost{
        padding: 25px;
        border: 2px solid black;
    }
    .delete{
        border: 2px solid #d0d0d0;
        padding: 5px 10px;
        position: relative;
        left: 92%;
        bottom: 27px;
    }
    .delete:hover{
        background: #72ffb1;
        color: white;
        cursor:pointer;
    }
</style>
