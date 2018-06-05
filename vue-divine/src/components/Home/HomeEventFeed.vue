<template>
    <div class="ticker-wrap">
        <div class="ticker">
          <div class="singleItem">Welcome to Dear, Divine.</div>
            <div class="singleItem"><icon name="quote-left" scale="1"></icon>The best preparation for tomorrow is doing your best today.<icon name="quote-right" scale="1"></icon></div>
            <div class="singleItem"><icon name="quote-left" scale="1"></icon>Always pass on what you have learned.<icon name="quote-right" scale="1"></icon></div>
            <div class="singleItem"><icon name="quote-left" scale="1"></icon>Death is a natural part of life. Rejoice for those around you who transform into the Force. Mourn them do not. Miss them do not. Attachment leads to jealously. The shadow of greed, that is.<icon name="quote-right" scale="1"></icon></div>
            <div class="singleItem"><icon name="quote-left" scale="1"></icon>Did you ever hear the tragedy of Darth Plagueis The Wise? I thought not. It's not a story the Jedi would tell you. It's a Sith legend. Darth Plagueis was a Dark Lord of the Sith, so powerful and so wise he could use the Force to influence the midichlorians to create life… He had such a knowledge of the dark side that he could even keep the ones he cared about from dying. The dark side of the Force is a pathway to many abilities some consider to be unnatural. He became so powerful… the only thing he was afraid of was losing his power, which eventually, of course, he did. Unfortunately, he taught his apprentice everything he knew, then his apprentice killed him in his sleep. Ironic. He could save others from death, but not himself.<icon name="quote-right" scale="1"></icon></div>  
        </div>
    </div>
</template>

<script>

</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css?family=Fjalla+One');
    #eventFeed {
        width: 100%;
        /*background: #f5a0ff;*/
        height: 80px;
    }
    @-webkit-keyframes ticker {
  0% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    visibility: visible;
  }

  100% {
    -webkit-transform: translate3d(-150%, 0, 0);
    transform: translate3d(-1500%, 0, 0);
  }
}

    @keyframes ticker {
      0% {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
        visibility: visible;
      }

      100% {
        -webkit-transform: translate3d(-150%, 0, 0);
        transform: translate3d(-150%, 0, 0);
      }
    }

    .ticker-wrap {
      z-index: 99;
      position: relative;
      /*background:#9200ab;*/

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
      -webkit-animation-duration: 80s;
              animation-duration: 80s;
    }
    .singleItem{

        color:#fff;
        display: inline-block;
        padding: .25rem 2rem 0;
        font-size: 2rem;
        height:2rem;
        vertical-align: middle;
        text-shadow: 7px 7px 10px #1f1f1fba;
    }
</style>
