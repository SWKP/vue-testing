<template>
    <div id="wrapper">
        <app-homeBody></app-homeBody>
    </div>
</template>

<script>
import HomeBody from '../Home/HomeBody';

export default {
  components: {
      appHomeBody: HomeBody
  }
}
</script>

<style scoped>
    #wrapper {
        background-color:#313131;
        padding: 100px 0px;
    }

</style>
