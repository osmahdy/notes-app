<template>
    <div class="form">
        <div class="title">
            <span>Title:</span>
            <input v-model="title" type="text" placeholder="memo title" ref="title">
        </div>
        <textarea v-model="desc" placeholder="memo details" ref="desc"></textarea>
        <label for="color">Choose Color:</label>
        <input v-model="color" type="color" class="color" id="color">
        <div class="btns">
            <button @click="addItem">Save</button>
            <button @click="editItem">Edit</button>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            id: '',
            title: "",
            desc: "",
            color: "#dddddd",
            oldItem: ''
        }
    },
    created(){
        this.id = this.getId
        this.title = this.getHeader
        this.desc = this.getContent
        this.color = this.getColor
        this.oldItem = 
        {
            id: this.id,
            title: this.getHeader,
            desc: this.getContent,
            color: this.getColor,
        }
    },
   computed: {

    getItem() {
        return this.$store.state.tempSave
        },

    getId(){
        if (this.$store.state.items.length === 0) {
        return 0; // Return 0 if the array is empty
        }
        const lastItem = this.$store.state.items[this.$store.state.items.length - 1];
        return lastItem.id + 1;
    },

    getHeader(){
        return this.$store.state.tempSave.header
    },

    getContent(){
        return this.$store.state.tempSave.content
    },

    getColor(){
        return this.$store.state.tempSave.color
    }
    },

    methods: {

        addItem(){
            this.$store.dispatch('addItem',{
                id: this.id,
                header: this.title,
                content: this.desc,
                color: this.color,
            })
            this.title = ""
            this.desc = ""
        },

        editItem(){
            this.$store.dispatch('editExistItem',[
                this.oldItem,
                {            
                id: this.id,  
                header: this.title,
                content: this.desc,
                color: this.color,
                }
            ])
            this.title = ""
            this.desc = ""
        }
    }
}
</script>

<style scoped>
.form {
    margin: 30px 0;
    background-color: #4e596f;

}
.title {
    margin: 10px;
}
.title span {
    color: white;
    font-size: 20px;
    font-weight: bold;
    margin: 0 20px;
}
.title input {
    all: unset;
    padding: 10px;
    background-color: white;
    color: black;
    text-align: start;
    border-bottom: 5px solid #333;
}
textarea {
    width: 80%;
    height: 300px;
    outline: none;
    padding: 20px;
    font-size: 18px;
    resize: none;
}
label {
    display: block;
    margin: 20px auto;
    font-size: 20px;
    color: white;
}
.color {
    display: block;
    margin: 20px auto;
    border: 0;
}
button {
    all: unset;
    display: inline-block;
    background-color: #1f2937;
    padding: 10px 20px;
    margin: 20px;
    color: white;
    width: 150px;
    font-size: 18px;
    border-radius: 15px;
    transition: .3s;
    cursor: pointer;
}
button:hover {
    opacity: .8;
}
</style>