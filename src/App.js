import Header from "./components/Header/Header";
import AddTodo from "./components/AddTodo/AddTodo";
import TodoList from "./components/TodoList/TodoList";
import {useState} from "react";
import {Container} from "react-bootstrap";

const App = () => {
    const [todo, setTodo] = useState([
        {
            id: 1,
            title: 'read the book',
            status: true,
        },
        {
            id: 2,
            title: 'learn english',
            status: true,
        },
        {
            id: 3,
            title: 'buy a book',
            status: true,
        }
    ])

    return (
        <Container>
            <Header/>
            <AddTodo todo={todo} setTodo={setTodo}/>
            <TodoList todo={todo} setTodo={setTodo}/>
        </Container>
    );
}

export default App;
