<template>
    <pageHeader :name="name" :desc="desc"></pageHeader>
    <div>
        <h1>{{ getMessege }}</h1>
        <button @click="change1">change massege 1</button>
        <button @click="change2">change massege 2</button>
        <button @click="change3">change massege 3</button>
        <form-Input :key="newkey"></form-Input>
        <cardList @keyOnClick="newkey = Math.random()"></cardList>
    </div>
</template>


<script>
import pageHeader from '@/components/pageHeader.vue';
import cardList from '@/components/cardList.vue';
import formInput from '@/components/formInput.vue';

export default {
    data(){
        return {
            name: 'Home Page',
            desc: "Hey this is the home page in my project",
            newkey: 1,
            // messege: this.$store.state.messege,
        }
    },
    components: {
        cardList,
        pageHeader,
        formInput,
    },
    methods: {
        change1(){
            this.$store.dispatch('setMessege','changed 1');
        },
        change2(){
            this.$store.dispatch('setMessege','changed 2');
        },
        change3(){
            this.$store.dispatch('setMessege','changed 3');
        }
    },
    computed: {
        getMessege() {
            return this.$store.state.messege
        },
    },
}
</script>

<style scoped>
div {
    width: calc(100vw - 200px);
    margin:auto;
    padding: 20px;
}
</style>