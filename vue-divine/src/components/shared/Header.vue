<template>
    <div>
        <app-HomeSlider></app-HomeSlider>
        <app-HomeEventFeed></app-HomeEventFeed>
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

</style>
