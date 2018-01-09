<template>
    <div id="centralNavCore">
        <nav>
            <ul>
                <li>Make Post</li>
                <li>Search</li>
                <li>View Articles</li>
            </ul>
            <div>
                <h1 class="coreSection">Make Post</h1>
            </div>
        </nav>
    </div>
</template>

<script>

</script>

<style scoped>
    #centralNavCore{
        border: 2px solid black;
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
    .coreSection{
        text-align: center;
        padding: 50px 0px;
    }

</style>
