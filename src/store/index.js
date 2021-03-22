import { createStore } from 'vuex';

const store = createStore({
    state() {
        return {
            memories: [
                {
                    id: "m1",
                    img: "https://www.avianca.com/content/dam/avianca_new/destinos/mex/mx_mex_08_2880_1620.jpg",
                    title: "Ciudad de Mexico",
                    description: "The food was too spicy! But i couldn't stop eating",
                },
                {
                    id: "m2",
                    title: "Bogota",
                    img: "https://cdn.pixabay.com/photo/2019/09/07/02/25/city-4457801_960_720.jpg",
                    description: "Surprisingly the weather was cold from my previous trips to Colombia I was expecting something warmer",
                },
                {
                    id: "m3",
                    title: "Paris",
                    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg/1024px-La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg",
                    description: "A really pleasant trip, Italian food is second to none",
                },
                {
                    id: "m4",
                    title: "Tokyo",
                    img: "https://ep01.epimg.net/elviajero/imagenes/2020/04/30/actualidad/1588237365_988791_1588237524_noticia_normal.jpg",
                    description: "The city was so ... vertical, the Japanese really know how to take advantage of space",
                },
                {
                    id: "m5",
                    title: "New York",
                    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/New_york_times_square-terabass.jpg/1024px-New_york_times_square-terabass.jpg",
                    description: "I found a glock in a happy meal, I didn't expect more from America",
                }
            ]
        };
    },
    mutations: {
        addMemory(state, memoryData) {
            const newMemory = {
                id: new Date().toISOString(),
                title: memoryData.title,
                img: memoryData.img,
                description: memoryData.description
            };

            state.memories.unshift(newMemory);
        }
    },
    actions: {
        addMemory(context, memoryData) {
            context.commit('addMemory', memoryData);
        }
    },
    getters: {
       memories(state) {
           return state.memories;
       },
       memory(state) {
           return (memoryId) => {
               return state.memories.find(memory => memory.id === memoryId);
           };
       } 
    }
});

export default store;