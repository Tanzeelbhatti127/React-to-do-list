import { useState } from "react";
import ToDoInput from "./components/ToDoInput";
import ToDoList from "./components/toDoList";

function App() {
  const [List, setList] = useState([]);

  function handleList(text) {
    if (text !== "") setList([...List, text]);
  }

  function handleDelete(index) {
    let newList = [...List];
    newList.splice(index, 1);
    setList([...newList]);
  }

  return (
    <div className="main-container">
      <h1 className="main-heading ">To do list</h1>
      <div className="center-container">
        <ToDoInput handleList={handleList} />
      </div>
      <h3 className="list-heading">Things to do:</h3>
      <hr />
      <ul className="list-container">
        {List.map((item, i) => {
          return (
            <ToDoList
              item={item}
              key={i}
              index={i}
              handleDelete={handleDelete}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default App;
