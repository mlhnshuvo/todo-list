import shortid from 'shortid'

const init = {
    todos: [
        {
            id: 'kotdsr',
            text: 'Todo 2',
            des: 'description 2',
            time: new Date(),
            isComplete: false,
            isSelect: false
        },
        {
            id: 'dtbd',
            text: 'Todo 1',
            des: 'description 1',
            time: new Date(),
            isComplete: false,
            isSelect: false
        }
    ],
    search: [],
    performFilter: []
}

const reducer = (state = init, action) => {
    state.search = state.todos
    state.performFilter = state.search

    switch (action.type) {
        case 'createTodo': {
            const todo = action.payload
            todo.id = shortid.generate()
            todo.time = new Date()
            todo.isComplete = false
            todo.isSelect = false
            const todos = [todo, ...state.todos]
            return {
                ...state,
                todos
            }
        }
        case 'toggleSelect': {
            const todos = [...state.todos]
            const todo = todos.find(t => t.id === action.payload)
            todo.isSelect = !todo.isSelect
            return {
                ...state,
                todos
            }
        }
        case 'toggleComplete': {
            const todos = [...state.todos]
            const todo = todos.find(t => t.id === action.payload)
            todo.isComplete = !todo.isComplete
            return {
                ...state,
                todos
            }
        }
        case 'handleSearch': {
            const todos = state.todos.filter(todo =>
                todo.text
                    .toLowerCase()
                    .includes(action.payload.toLowerCase())
            )
            return { ...state, search: todos, performFilter: todos }
        }
        case 'handleFilter': {
            if (action.payload === 'complete') {
                return {
                    ...state,
                    performFilter: state.search.filter(todo => todo.isComplete)
                }
            } else if (action.payload === 'running') {
                return {
                    ...state,
                    performFilter: state.search.filter(todo => !todo.isComplete)
                }
            } else {
                return {
                    ...state,
                    performFilter: state.search.filter(todo => todo)
                }
            }
        }
        case 'clearSelected': {
            return {
                todos: state.todos.filter(todo => !todo.isSelect),
                search: state.todos.filter(todo => !todo.isSelect),
                performFilter: state.todos.filter(todo => !todo.isSelect)
            }
        }
        case 'clearCompleted': {
            return {
                todos: state.todos.filter(todo => !todo.isComplete),
                search: state.todos.filter(todo => !todo.isComplete),
                performFilter: state.todos.filter(todo => !todo.isComplete)
            }
        }
        case 'reset': {
            return { ...state }
        }
        default: return state
    }
}

export default reducer