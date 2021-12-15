import { createStore } from 'vuex'

export default createStore({
    state: {
        products: [
            {
                title: "Product 1",
                description: "Description",
                tags: ["tag 1", "tag 2"],
                link: "Deserunt anim",
            },
            {
                title: "Product 2",
                description: "Description",
                tags: ["tag 1", "tag 2"],
                link: "Deserunt anim",
            },
            {
                title: "Product 3",
                description: "Description",
                tags: ["tag 1", "tag 2"],
                link: "Deserunt anim",
            },
            {
                title: "Product 4",
                description: "Description",
                tags: ["tag 1", "tag 2"],
                link: "Deserunt anim",
            },
            {
                title: "Product 5",
                description: "Description",
                tags: ["tag 1", "tag 2"],
                link: "Deserunt anim",
            },
            {
                title: "Product 6",
                description: "Description",
                tags: ["tag 1", "tag 2"],
                link: "Deserunt anim",
            },
            {
                title: "Product 7",
                description: "Description",
                tags: ["tag 1", "tag 2"],
                link: "Deserunt anim",
            },
            {
                title: "Product 8",
                description: "Description",
                tags: ["tag 1", "tag 2"],
                link: "Deserunt anim",
            },
            {
                title: "Product 9",
                description: "Description",
                tags: ["tag 1", "tag 2"],
                link: "Deserunt anim",
            },
        ],
        pageSize: 6,
        currentPage: 1,
        showModal: false
    },
    getters: {
        products: state => {
            const begin: number = (state.currentPage - 1) * state.pageSize
            const end: number = state.currentPage * state.pageSize
            return state.products.slice(begin, end)
        },
        pageNumber: state => {
            if (state.products.length % state.pageSize == 0) {
                return state.products.length / state.pageSize
            } else {
                return Math.floor(state.products.length / state.pageSize) + 1
            }
        },
        currentPage: state => state.currentPage,
        isShowModal: state => state.showModal
    },
    mutations: {
        addProduct: (state, product) =>{
            state.products.push(product)
        },
        changePage: (state, number) => {
            state.currentPage += number
        },
        showModal: (state, status) => state.showModal = status
    },
    actions: {
    },
    modules: {
    }
})
