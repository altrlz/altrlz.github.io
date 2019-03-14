<template>
    <div class="output">
        <div class="content" v-for="i in 6" :key=i>
        <h3> {{ name }} </h3>
        <p> {{ text }} </p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Output',
    data () {
        return {
            name: 'I made this.',
            text: 'description'.repeat(3)
        }
    }
}

</script>

<style scoped>
div.output {
    text-align: center;
}

div.content {
    background-color: #eee;
    display: inline-block;
    margin: 10px;
    width: 30%;
}

h3 {
    color: white;
}

p {
    width: 90%;
    display: inline-block;
    text-align: left;
}

</style>