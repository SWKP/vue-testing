<template>
    <div>
        <app-header></app-header>
        <app-homeBody></app-homeBody>
        <app-footer></app-footer>
    </div>
</template>

<script>

import Header from './shared/Header';
import HomeBody from './shared/HomeBody';
import Footer from './shared/Footer';

export default {
  components: {
      appHeader: Header,
      appHomeBody: HomeBody,
      appFooter: Footer
  }
}

</script>

<style scoped>

</style>
