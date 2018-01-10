<template>
    <div id="centralNav">
        <app-centralNavCore></app-centralNavCore>
        <app-centralNavComponents></app-centralNavComponents>
    </div>
</template>

<script>
import CentralNavCore from './CentralNavCore';
import CentralNavComponents from './CentralNavComponents';

export default {
    components: {
        appCentralNavCore: CentralNavCore,
        appCentralNavComponents: CentralNavComponents
    }
}

</script>

<style scoped>
    #centralNav{
        display: grid;
        grid-template-columns: 75% 25%;
        grid-gap: 0px;
    }

</style>
