import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
import { MdOutlineDeleteOutline } from "react-icons/md";

function TodoItem({ TodoDate, TodoName }) {

  const { deleteItem } = useContext(TodoItemsContext);

  return (
    <div className="row kg-row">
      <div className="col-6">{TodoName}</div>
      <div className="col-4">{TodoDate}</div>
      <div className="col-2">
        <button
          type="button"
          className="btn btn-danger kg-button"
          onClick={() => deleteItem(TodoName)}
        >
          <MdOutlineDeleteOutline />
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
