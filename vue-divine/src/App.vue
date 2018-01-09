<template>
  <div>
    <app-home></app-home>
  </div>
</template>

<script>
import Home from './components/Home'

export default {
  name: 'app',
  components: {
    appHome: Home
  }
}
</script>

<style>
/*Browser CSS resets*/
    html, body {
        margin:0;
        padding:0;
    }
    h1,h2,h3,h4 {
        padding: 0px;
        margin: 0px;
    }

</style>
