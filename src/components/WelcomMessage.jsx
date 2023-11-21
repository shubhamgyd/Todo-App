import sytles from "./WelcomeMessage.module.css";
import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";

const WelcomMessage = () => {
  const {todoItems} = useContext(TodoItemsContext);

  return (
    todoItems.length === 0 && (
      <p className={sytles.welcomeMessage}>Enjoy your day</p>
    ) 
  );
};

export default WelcomMessage;
