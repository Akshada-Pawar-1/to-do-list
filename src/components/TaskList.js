import { useState } from "react";
import Button from "./UI/Button";
import NewTask from "./NewTask";
import styles from "./TaskList.module.css";

import checkIcon from "../checkIcon.png";
import deleteIcon from "../deleteIcon.png";
import checkedIcon from "../checkedIcon.png";

export default function TaskList({
  taskList,
  addTask,
  deleteTask,
  completeTask,
  completedList,
  deleteCompletedTask,
  moveCompletedToTask,
}) {
  const [showTaskForm, setShowTaskForm] = useState(false);

  function showAddTask() {
    setShowTaskForm(true);
  }

  function hideAddTask() {
    setShowTaskForm(false);
  }

  //   function handleCompleteTask(index) {
  //     completeTask(index);
  //   }

  return (
    <>
      <div className={styles.listNav}>
        <h2>Task list</h2>
        <p>
          <Button onClick={showAddTask}>Add a new task</Button>
          {showTaskForm && (
            <NewTask closeModal={hideAddTask} addTask={addTask} />
          )}
        </p>
      </div>
      <div className={styles.taskStatus}>
        <ul>
          <h2>Tasks</h2>
          {taskList.map((task, index) => (
            <li key={index}>
              {task}
              <div>
                <button onClick={() => completeTask(index)}>
                  {
                    <img
                      src={checkIcon}
                      alt="checkIcon"
                      className={styles.check}
                    />
                  }
                </button>
                <button onClick={() => deleteTask(index)}>
                  {
                    <img
                      src={deleteIcon}
                      alt="delete"
                      className={styles.delete}
                    />
                  }
                </button>
              </div>
            </li>
          ))}
        </ul>
        <ul>
          <h2>Completed tasks</h2>
          {completedList.map((newTask, index) => (
            <li key={index}>
              {newTask}
              <div>
                <button onClick={() => moveCompletedToTask(index)}>
                  {
                    <img
                      src={checkedIcon}
                      alt="checkedIcon"
                      className={styles.checked}
                    />
                  }
                </button>
                <button onClick={() => deleteCompletedTask(index)}>
                  {
                    <img
                      src={deleteIcon}
                      alt="delete"
                      className={styles.delete}
                    />
                  }
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
