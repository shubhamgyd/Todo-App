import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";
import { useState } from "react";
import WelcomMessage from "./components/WelcomMessage";
import { TodoItemsContext } from "./store/todo-items-store";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  // const handleNewItem = (todoName, dueDate) => {
  //   const NewTodoItemObject = {
  //     TodoDate: `${dueDate}`,
  //     TodoName: `${todoName}`,
  //   };
  //   const newTodoItems = [...todoItems, NewTodoItemObject];
  //   setTodoItems(newTodoItems);
  // };

  // const handleNewItem = (todoName, dueDate) => {
  //   setTodoItems((currValue) => {
  //     const newTodoItems = [
  //       ...currValue,
  //       { TodoName: todoName, TodoDate: dueDate },
  //     ]
  //   })
  // }

  const handleNewItem = (todoName, dueDate) => {
    setTodoItems((currValue) => [
      ...currValue,
      { TodoName: todoName, TodoDate: dueDate },
    ]);
  };

  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter(
      (item) => item.TodoName !== todoItemName
    );
    setTodoItems(newTodoItems);
  };

  

  return (
    <TodoItemsContext.Provider value={todoItems}>
      <center className="container">
        <AppName />
        <AddTodo onNewItem={handleNewItem} />
        <WelcomMessage></WelcomMessage>
        <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem} />
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
