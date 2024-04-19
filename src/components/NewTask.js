import Modal from "./UI/Modal";
import Button from "./UI/Button";
import { useRef } from "react";
import styles from "./NewTask.module.css";

export default function NewTask({ closeModal, addTask }) {
  const taskName = useRef();

  function handleAddTask() {
    const task = taskName.current.value;
    console.log({ task });
    if (task.trim() !== "") {
      addTask(task);
      taskName.current.value = "";
      closeModal();
    }
  }

  return (
    <Modal open={true} onClose={closeModal}>
      <h2>New task</h2>
      <p>
        <label htmlFor="task">Task name: </label>
        <input
          type="text"
          name="task"
          id="task"
          ref={taskName}
          required
        ></input>
      </p>
      <p>
        <Button onClick={handleAddTask}>Add Task</Button>
        <Button onClick={closeModal}>Close</Button>
      </p>
    </Modal>
  );
}
