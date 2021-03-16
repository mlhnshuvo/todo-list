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
    searchTerm: '',
    filter: 'all'
}

const reducer = (state = init, action) => {
    switch (action.type) {
        case 'toggleSelect': {
            const todos = [...state.todos]
            const todo = todos.find(t => t.id === action.payload)
            todo.isSelect = !todo.isSelect
            // return todos
        }
        default: return state
    }
}

export default reducer