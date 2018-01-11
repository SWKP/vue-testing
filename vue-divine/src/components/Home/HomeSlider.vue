<template>

<div id="slider">
  <slider animation="fade">
    <p style="line-height: 280px; font-size: 5rem; text-align: center;" v-if="!list.length">Loading...</p>
    <slider-item v-for="(i, index) in list" :key="index" :on-click="test">
      <div :style="i">
        <p style="line-height: 280px; font-size: 5rem; text-align: center; padding-top: 6%;">Slide {{ index + 1 }}</p>
      </div>
    </slider-item>
  </slider>
</div>

</template>

<script>
    import { Slider, SliderItem } from 'vue-easy-slider';

    export default {
        data: function () {
            return {
                list: [
                    { backgroundColor: '#3f51b5', width: '100%', height: '100%' },
                    { backgroundColor: '#eee', width: '100%', height: '100%' },
                    { backgroundColor: '#f44336', width: '100%', height: '100%' }
                  ]
            }
        },
        components: {
            Slider,
            SliderItem
        },
        methods: {

        }
    }
</script>

<style scoped>
    #heroSlider {
        background: #72ffb1;
        width: 100%;
        height: 800px;
        margin: 0px;
        padding: 0px;
    },
    p {
      margin: 0;
    },
    .slider {
        height: 500px!important;
    }

</style>
