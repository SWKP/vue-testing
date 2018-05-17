<template>
    <div class="centralNavComponents">
        <ul>
            <li><app-dailyIntention></app-dailyIntention></li>
            <li><app-mindfulMoment></app-mindfulMoment></li>
            <li><app-myHoroscope></app-myHoroscope></li>
        </ul>
    </div>
</template>

<script>
    import DailyIntention from './DailyIntention/DailyIntention.vue';
    import MindfulMoment from './MindfulMoment/MindfulMoment.vue';
    import MyHoroscope from './MyHoroscope/MyHoroscope.vue';

    export default {
        components: {
            appDailyIntention: DailyIntention,
            appMindfulMoment: MindfulMoment,
            appMyHoroscope: MyHoroscope
        },
        data: function () {
            return {

            }
        },
        methods: {

        }
    }

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
    li:hover{
        background: #72ffb1;
        color: white;
        cursor:pointer;
    }

</style>
