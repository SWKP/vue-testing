<template>
    <div class="bannerContainer">
        <img src="../../assets/img/logo-mainV1.png" alt="Main Logo" class="logo">
        <nav class="navigation">
            <ul>
                <li>Main</li>
                <li>You</li>
                <li>Seek</li>
                <li>Find</li>
                <li>Exchange</li>
            </ul>
        </nav>
    </div>
</template>

<script>

export default {
  components: {
      
  },
  data: function () {
            return {
               
            }
        }
}

</script>

<style lang="scss" scoped>
    .bannerContainer {
        display: flex;
        justify-content: space-between;
        align-content: stretch;
        width: 100%;
    }
    .logo {
        filter: brightness(10);
        height: 10rem;
        width: 10rem;
    }
    .navigation {
        flex: 0 0 40%;

        & ul {
            display: flex;
            justify-content: space-between;
            list-style-type: none;
            text-transform: uppercase; 
            color: #fff; 

            & li {
                text-align: center;
                flex: 1;
                padding: 1rem 2rem;
                transition: all .3s;
                clip-path:polygon(0 0, 100% 0, 100% 40%, 0 40%);
                //background-color: red;
                padding-bottom: 6rem;
            }

            & li:hover {
                padding-top: 3rem;
                background-color: var(--color-primary-highlight);
                clip-path:polygon(0 0, 100% 0, 100% 100%, 0 70%);
                cursor: pointer;
            }
        }
    }
</style>