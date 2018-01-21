<template>
    <div>
        <app-HomeSlider></app-HomeSlider>
        <app-HomeEventFeed></app-HomeEventFeed>
        <div id="navWheel">
            <ul id="nav">
                <li><h1>Seek</h1></li>
                <li><h1>Find</h1></li>
                <li><h1 id="exchange">Exchange</h1></li>
            </ul>
        </div>
    </div>
</template>

<script>
import HomeSlider from '../Home/HomeSlider';
import HomeEventFeed from '../Home/HomeEventFeed';

export default {
  components: {
      appHomeSlider: HomeSlider,
      appHomeEventFeed: HomeEventFeed
  }
}

</script>

<style scoped>
    #navWheel{
        background: slategrey;
        border-bottom-left-radius: 350px;
        border-bottom-right-radius: 350px;
        width: 700px;
        height: 350px;
        margin: 0 auto;
        position: relative;
        bottom: 60px;
        z-index: 10;
    }
    #nav {
        text-align: justify;
        min-width: 500px;
        padding: 0;
    }
    #nav:after {
        content: '';
        display: inline-block;
        width: 100%;
    }
    ul{
        margin: 0 auto;
        width: 450px;
        top: 35%;
        position: relative;
    }
    li{
        padding: 55px;
        border-radius: 50%;
        display: inline-block;
        background:#dad8d8;
    }
    h1{
        position: absolute;
        top: 35px;
        margin-left: -30px;
    }
    #exchange{
        position: absolute;
        top: 40px;
        right: 2px;
        font-size: 25px;
    }

</style>
