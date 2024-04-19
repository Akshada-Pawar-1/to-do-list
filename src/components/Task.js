import { useState } from "react";
import Button from "./UI/Button";
import styles from "./Task.module.css";
import NewTask from "./NewTask";

export default function Task({ addTask }) {
  const [showTaskForm, setShowTaskForm] = useState(false);

  function showAddTask() {
    setShowTaskForm(true);
  }

  function hideAddTask() {
    setShowTaskForm(false);
  }

  return (
    <div className={styles.task}>
      <h2>Create the list of your tasks</h2>
      <Button onClick={showAddTask}>Add a new task</Button>
      {showTaskForm && <NewTask closeModal={hideAddTask} addTask={addTask} />}
    </div>
  );
}
