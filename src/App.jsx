import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";
import WelcomMessage from "./components/WelcomMessage";
import TodoItemsContextProvider from "./store/todo-items-store";

function App() {
  return (
    <TodoItemsContextProvider>
      <center className="container">
        <AppName />
        <AddTodo />
        <WelcomMessage></WelcomMessage>
        <TodoItems />
      </center>
    </TodoItemsContextProvider>
  );
}

export default App;
