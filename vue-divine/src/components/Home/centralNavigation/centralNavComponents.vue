<template>
    <div class="centralNavComponents">
        <ul>
            <li><p><span title="Daily intention tooltip: Lorem ipsum dolor sit amet, consectetur adipiscing elit.">?</span>Daily Intention</p></li>
            <li><p><span title="Mindful Moment tooltip: Lorem ipsum dolor sit amet, consectetur adipiscing elit.">?</span>Mindful Moment</p></li>
            <li><p><span title="My Horoscope tooltip: Lorem ipsum dolor sit amet, consectetur adipiscing elit.">?</span>My Horoscope</p></li>
        </ul>
    </div>
</template>

<script>

</script>

<style scoped>
    .centralNavComponents{
        border: 2px solid blue;
    }
    ul {
        width:100%;
        padding: 0px;
        min-height: 245px;
        display: table;
    }
    li {
        display: table-row;
        list-style-type: none;
        text-align:center;
    }
    span {
        border-radius: 50%;
        border: 2px solid black;
        padding: 10px 15px;
        margin: 10px;
    }
    p{
        padding-top:15px;
    }
    li:hover{
        background: #72ffb1;
        color: white;
        cursor:pointer;
    }
    span:hover{
        border: 2px solid white;
    }
</style>
