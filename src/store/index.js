import { action, computed, createStore } from 'easy-peasy'
import shortid from 'shortid'

const store = createStore({
    todos: [
        {
            id: 'dgfgtytdsrd',
            text: 'Todo 2',
            des: 'description 2',
            time: new Date(),
            isComplete: false,
            isSelect: false
        },
        {
            id: 'dgfgtytbd',
            text: 'Todo 1',
            des: 'description 1',
            time: new Date(),
            isComplete: false,
            isSelect: false
        }
    ],
    searchTerm: '',
    filter: 'all',

    createTodo: action((state, payload) => {
        payload.id = shortid.generate()
        payload.time = new Date()
        payload.isComplete = false
        payload.isSelect = false

        state.todos.unshift(payload)
    }),
    toggleSelect: action((state, payload) => {
        const todo = state.todos.find(t => t.id === payload)
        todo.isSelect = !todo.isSelect
    }),
    toggleComplete: action((state, payload) => {
        const todo = state.todos.find(t => t.id === payload)
        todo.isComplete = !todo.isComplete
    }),
    handleSearch: action((state, payload) => {
        state.searchTerm = payload.toLowerCase()
    }),
    performSearch: computed(state => {
        return state.todos.filter(todo =>
            todo.text
                .toLowerCase()
                .includes(state.searchTerm)
        )
    }),
    handleFilter: action((state, payload) => {
        state.filter = payload
    }),
    performFilter: computed(state => {
        if (state.filter === 'completed') {
            return state.performSearch.filter(todo => todo.isComplete)
        } else if (state.filter === 'running') {
            return state.performSearch.filter(todo => !todo.isComplete)
        } else {
            return state.performSearch
        }
    }),
    performBulk: action((state, payload) => {
        if (payload === 'clearSelected') {
            return {
                ...state,
                todos: state.todos.filter(todo => !todo.isSelect)
            }
        } else if (payload === 'clearCompleted') {
            return {
                ...state,
                todos: state.todos.filter(todo => !todo.isComplete)
            }
        } else if (payload === 'reset') {
            return {
                ...state,
                searchTerm: '',
                filter: 'all'
            }
        }
    }),
    getView: computed(state => {
        return state.performFilter
    })
})

export default store