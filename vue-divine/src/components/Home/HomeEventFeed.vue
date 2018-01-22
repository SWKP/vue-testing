<template>
    <div class="ticker-wrap">
        <div class="ticker">
          <div class="singleItem">Welcome to Dear, Divine.</div>
            <div class="singleItem"><icon name="quote-left" scale="1.5"></icon>The best preparation for tomorrow is doing your best today.<icon name="quote-right" scale="1.5"></icon></div>
        </div>
    </div>
</template>

<script>

</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css?family=Fjalla+One');
    #eventFeed {
        width: 100%;
        background: #f5a0ff;
        height: 80px;
    }
    @-webkit-keyframes ticker {
  0% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    visibility: visible;
  }

  100% {
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }
}

    @keyframes ticker {
      0% {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
        visibility: visible;
      }

      100% {
        -webkit-transform: translate3d(-100%, 0, 0);
        transform: translate3d(-100%, 0, 0);
      }
    }

    .ticker-wrap {
      z-index: 99;
      position: relative;
      background:#9200ab;
      width: 100%;
      overflow: hidden;
      height: 6rem;
      background-color: rgba(#000, 0.9);
      padding-left: 100%;
    }

    .ticker {
      display: inline-block;
      height: 2rem;
      line-height: 4rem;
      white-space: nowrap;
      padding-right: 100%;

      -webkit-animation-iteration-count: infinite;
              animation-iteration-count: infinite;
      -webkit-animation-timing-function: linear;
              animation-timing-function: linear;
     -webkit-animation-name: ticker;
             animation-name: ticker;
      -webkit-animation-duration: 30s;
              animation-duration: 30s;
    }
    .singleItem{
        font-family: 'Fjalla One', sans-serif;
        color:hotpink;
        display: inline-block;
        padding: 0 2rem;
        font-size: 2rem;
        height:2rem;
        vertical-align: middle;
        text-shadow: 7px 7px 10px #1f1f1fba;
    }
</style>
