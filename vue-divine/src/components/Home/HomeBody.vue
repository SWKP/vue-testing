<template>
    <div id="homeBody">
        <app-centralNav></app-centralNav>
        <app-masonryPosts></app-masonryPosts>
    </div>
</template>

<script>
import CentralNav from './centralNavigation/CentralNav';
import MasonryPosts from './MasonryPosts';

export default {
  components: {
      appCentralNav: CentralNav,
      appMasonryPosts: MasonryPosts
  }
}

</script>

<style scoped>
    #homeBody {
        background: #dad8d8;
        min-height: 800px;
        width: 1200px;
        display: block;
        margin: 0 auto;
    }

</style>
