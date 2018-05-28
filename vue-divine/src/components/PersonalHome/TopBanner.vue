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

            & li {
                text-align: center;
                flex: 1;
                padding: 1rem;
            }

            & li:hover {
                background-color: red;
            }
        }
    }
</style>