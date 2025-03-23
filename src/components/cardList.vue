<template>
  <div class="cards">
    <CardEl :background='item.color' :showMedia=false v-for="(item,index) in items" :key="index">
    <template v-slot:header>
        <h3>{{ item.header }}</h3>
    </template>
    <template v-slot:text>
       <p>{{ item.content }}</p>
    </template>
    <template v-slot:btns>
       <button class="edit" @click="editItem(item)">Edit</button>
       <button class="delete" @click="deleteItem(item)">Delete</button>
    </template>
</CardEl>
</div>
</template>

<script>  
import CardEl from '@/components/CardEl.vue';
// import dataApi from "@/assets/data.json" 
export default {
    components: {
        CardEl,
    },
    data(){
        return {
            index: 0,

        }
    },
    computed: {
        items() {
            return this.$store.state.items;
        }
    },
    methods:{
        deleteItem(item){
            this.$store.dispatch('deleteItem',item)
        },
        editItem(item){
            this.$store.dispatch('editItem',item)
            // this.$emit('keyOnClick',true)
            this.$emit('keyOnClick', Math.random());
        }
    }
}
</script>  
<style scoped>
.cards {
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(3,1fr);
    gap: 20px;
}
button { 
    padding: 5px 10px;
    margin: 0 10px;
    font-size: 18px;
    color: white;
    font-weight: bold;
    min-width: 70px;
    border-radius: 10px;
    border: 0;
    cursor: pointer;
    transition: .3s;
}
.edit {
    background-color: #ffd428 ;
}
.delete {
    background-color: #b22222;
}
button:hover {
    opacity: .8;
}
@media (max-width: 990px){
    .cards {
        display: block;
    }
}
</style>