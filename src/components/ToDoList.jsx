import { MdDeleteSweep } from "react-icons/md";

function ToDoList({ item, handleDelete, index }) {
  return (
    <div>
      <li className="list-item">
        {item}
        <span className="delete-icon">
          <MdDeleteSweep onClick={() => handleDelete(index)} />
        </span>
      </li>
    </div>
  );
}

export default ToDoList;
