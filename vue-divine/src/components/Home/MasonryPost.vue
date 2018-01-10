<template>
    <div class="singlePost">
        <h2>{{ data.title }}</h2>
        <p>{{ data.message }}</p>
    </div>
</template>

<script>
    export default {
        props: {
            data: {

            }
        }
    }

</script>

<style scoped>
    .singlePost{
        padding: 25px;
        border: 2px solid black;
    }

</style>
