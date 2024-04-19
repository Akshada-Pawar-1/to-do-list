import "./App.css";
import { useEffect, useState } from "react";
import Header from "./components/Header.js";
import Task from "./components/Task.js";
import TaskList from "./components/TaskList.js";

function App() {
  const initialData = JSON.parse(localStorage.getItem("taskList")) || [];
  const initialCompletedTask =
    JSON.parse(localStorage.getItem("completedList")) || [];

  const [taskList, setTaskList] = useState(initialData);
  const [completedList, setCompletedList] = useState(initialCompletedTask);

  const addTask = (newTask) => {
    setTaskList([...taskList, newTask]);
  };

  const deleteTask = (index) => {
    const updatedTaskList = [...taskList];
    updatedTaskList.splice(index, 1);
    setTaskList(updatedTaskList);
  };

  const completeTask = (index) => {
    const completedTask = taskList[index];
    setCompletedList([...completedList, completedTask]);
    deleteTask(index);
  };

  const deleteCompletedTask = (index) => {
    const updateCompletedList = [...completedList];
    updateCompletedList.splice(index, 1);
    setCompletedList(updateCompletedList);
  };

  const moveCompletedToTask = (index) => {
    const taskToMove = completedList[index];
    setTaskList([...taskList, taskToMove]);
    deleteCompletedTask(index);
  };

  useEffect(() => {
    localStorage.setItem("taskList", JSON.stringify(taskList));
  }, [taskList]);

  useEffect(() => {
    localStorage.setItem("completedList", JSON.stringify(completedList));
  }, [completedList]);

  return (
    <div className="App">
      <Header />
      {taskList.length === 0 && completedList.length === 0 ? (
        <Task addTask={addTask} />
      ) : (
        <TaskList
          taskList={taskList}
          addTask={addTask}
          deleteTask={deleteTask}
          completeTask={completeTask}
          completedList={completedList}
          deleteCompletedTask={deleteCompletedTask}
          moveCompletedToTask={moveCompletedToTask}
        />
      )}
    </div>
  );
}

export default App;
