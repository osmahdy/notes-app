<template>
    <header>
        <h1>{{name}}</h1>
        <p>{{desc}}</p>
    </header>
</template>

<script>
export default {
    name: 'pageHeader',
    props: ['name','desc']
}
</script>

<style scoped>
header {
    background-color: #4e596f;
    color: white;
    padding: 20px;
    position: relative;
    top: 0;
    z-index: -1;
}
</style>
