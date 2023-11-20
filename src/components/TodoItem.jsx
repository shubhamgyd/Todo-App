import { MdOutlineDeleteOutline } from "react-icons/md";

function TodoItem({ TodoDate, TodoName, onDeleteClick }) {
  return (
    <div className="row kg-row">
      <div className="col-6">{TodoName}</div>
      <div className="col-4">{TodoDate}</div>
      <div className="col-2">
        <button
          type="button"
          className="btn btn-danger kg-button"
          onClick={() => onDeleteClick(TodoName)}
        >
          <MdOutlineDeleteOutline />
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
