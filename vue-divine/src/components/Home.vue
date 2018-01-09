<template>
    <div>
        <app-header></app-header>
        <app-homeBody></app-homeBody>
        <app-footer id="footer"></app-footer>
    </div>
</template>

<script>

import Header from './shared/Header';
import Body from './shared/Body';
import Footer from './shared/Footer';

export default {
  components: {
      appHeader: Header,
      appHomeBody: Body,
      appFooter: Footer
  }
}

</script>

<style scoped>

</style>
