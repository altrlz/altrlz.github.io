<template>
    <div id="app">
        <tab-menu></tab-menu>
        <router-view/>
    </div>
</template>

<script>

import TabMenu from '@/components/TabMenu'

export default {
    name: 'App',
    components: {
        TabMenu
    }
}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Aral, sans-serif;
    -weblit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: graysacale;
    text-aling: center;
    color: #2c3e50;
    margin-top: 60px;
}

</style>