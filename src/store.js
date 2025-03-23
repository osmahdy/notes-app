import {createStore} from 'vuex'


const store = createStore({
    state: {
        items: [
            {
                "id": 1,
                "header": "Geologist I",
                "content": "Struck by golf ball",
                "color": "#93cda3"
              }, {
                "id": 2,
                "header": "Research Nurse",
                "content": "Other specified dorsopathies, site unspecified",
                "color": "#4a3a9c"
              }, {
                "id": 3,
                "header": "Senior Quality Engineer",
                "content": "Partial retinal artery occlusion, right eye",
                "color": "#34807f"
              }, {
                "id": 4,
                "header": "Accountant II",
                "content": "Sprain of super tibiofibul joint and ligmt, unsp knee, sqla",
                "color": "#7ed19d"
              }, {
                "id": 5,
                "header": "Dental Hygienist",
                "content": "Burn of third degree of head, face, and neck, unsp site",
                "color": "#1541c6"
              }, {
                "id": 6,
                "header": "Actuary",
                "content": "Laceration of blood vessels at shldr/up arm, unsp arm",
                "color": "#ede2ec"
              }, {
                "id": 7,
                "header": "Senior Editor",
                "content": "Stress fracture, right ulna, subs for fx w routn heal",
                "color": "#0ca526"
              }, {
                "id": 8,
                "header": "Occupational Therapist",
                "content": "Open bite of back wall of thorax w/o penet thoracic cavity",
                "color": "#9691f1"
              }, {
                "id": 9,
                "header": "Assistant Professor",
                "content": "Inj unsp musc/tend at lower leg level, unsp leg",
                "color": "#4a994b"
              }, {
                "id": 10,
                "header": "Graphic Designer",
                "content": "Transplanted organ and tissue status",
                "color": "#e287df"
              }
            ],
            tempSave: [],
            messege: 'hello osama',
    },
    mutations: {
        setItems(state,newMess) {
            state.messege = newMess;
        },
        addItems(state,newVal){
            state.items.push(newVal)
        },
        deleteItem(state,item){
            const index = state.items.findIndex(i => i.content === item.content)
            state.items.splice(index,1)
        },
        editItem(state,item){
            state.tempSave = item
        },
        // editExistItem(state, item) {
        //     const index = state.items.findIndex(i => i.id === item[1].id);
        //     state.items.splice(index, 1, item[1]); // ✅ Vue reactivity-friendly update
        // }
        editExistItem(state, item) {
            const index = state.items.findIndex(i => i.id === item[1].id);
            state.items.splice(index, 1, item[1]);
        }
        
    },
    actions: {
        setMessege(context,newMess) {
            this.commit('setItems',newMess)
        },
        addItem(context,newVal){
           this.commit('addItems',newVal)
        },
        deleteItem(context,item){
            this.commit('deleteItem',item)
        },
        editItem(context,item){
            this.commit('editItem',item)
        },
        editExistItem(context,item){
            this.commit('editExistItem',item)
        }
    }
})

export default store