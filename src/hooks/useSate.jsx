// You know before
const array = ['Easy', 'Frontend'];
const ab = array[0]; // Easy
const ba = array[1]; // Frontend

// Now we use array destructoring
const [a, b] = ['Easy', 'Frontend'];
// a = 'Easy'
// b = 'Frontend'

// Fake useState() 😎
function useState(initialState) {
    // do some mystery stuffs ...
    return [state, setState];
}
function ColorBox() {
    // Because useState() return an array of 2 items
    const [color, setColor] = useState('deeppink');
    return;
}

function TodoList() {
    const [todoList, setTodoList] = useState(['love', 'easy', 'frontend']);
    function removeTodo(index) {
        // Remember to clone into a new array
        const newTodoList = [...todoList];
        newTodoList.splice(index, 1);
        setTodoList(newTodoList);
    }
    return (
        <ul className="todo-list">
            {todoList.map((todo, index) => (
                <li
                    key={todo.id}
                    onClick={() => removeTodo(index)}
                >
                    {todo.title}
                </li>
            ))}
        </ul>
    )
}
