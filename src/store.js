import { createStore } from "vuex";

export default createStore({
    state: {
        unregisterStore: [],
        rowsStore: [
            {
                id: 1,
                name: "Chandler Bing",
                phone: "305-917-1301",
                profession: "IT Manager",
                regiter: false,
            },
            {
                id: 2,
                name: "Ross Geller",
                phone: "210-684-8953",
                profession: "Paleontologist",
                regiter: false,
            },
            {
                id: 3,
                name: "Rachel Green",
                phone: "765-338-0312",
                profession: "Waitress",
                regiter: false,
            },
            {
                id: 4,
                name: "Monica Geller",
                phone: "714-541-3336",
                profession: "Head Chef",
                regiter: false,
            },
            {
                id: 5,
                name: "Joey Tribbiani",
                phone: "972-297-6037",
                profession: "Actor",
                regiter: false,
            },
            {
                id: 6,
                name: "Phoebe Buffay",
                phone: "760-318-8376",
                profession: "Masseuse",
                regiter: false,
            },
        ]

    },
    getters: {
        getRegistered(state) {
            return state.rowsStore.filter((ele) => {
                return !ele.regiter;
            })
        },
        getTotalUnregister(state){
            return state.unregisterStore.length
        },
        getUnregistered(state){
            return state.unregisterStore
        }
    },
    mutations:{
        registerMute(state, payload){
            const user = state.rowsStore.find(element => {
                return element.id == payload.id
            })
            user.regiter = true;
            const registeration = {
                id: payload.id,
                name: payload.name,
                phone: payload.phone,
                profession: payload.profession,
            }
            state.unregisterStore.push(registeration)
        },
        unRegisterMute(state, payload){
            const rows1 = state.rowsStore.find((element) => {
                return element.id == payload.id;
              });
              rows1.regiter = false;
              const regis = state.unregisterStore.find(ele => {
                  return ele.id == payload.id
              })
              state.unregisterStore.splice(state.unregisterStore.indexOf(regis),1 );
        }
    },
    actions:{
        registerMute({ commit }, payload){
            setTimeout(() => {
                commit('registerMute', payload)
            }, 2000)
        }
        // registerMute(context, payload){
        //     context.commit('registerMute', payload)
        // }
    }
})
