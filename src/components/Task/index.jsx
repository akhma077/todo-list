import styles from "./task.module.css";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { TbTrash } from "react-icons/tb";
import FileUploader from "../FileUploader";

export function Task({ task, onDelete, onComplete, handleEdit }) {
  return (
    <div className={styles.task}>
      <button
        className={styles.checkContainer}
        onClick={() => onComplete(task.id)}
      >
        {task.isCompleted ? <BsFillCheckCircleFill /> : <div />}
      </button>

      <p className={task.isCompleted ? styles.textCompleted : ""}>
        {task.title}
      </p>
      <p className={task.isCompleted ? styles.textCompleted : ""}>
        {task.todoDesc}
      </p>
      <p className={task.isCompleted ? styles.textCompleted : ""}>
        {task.todoDate}
      </p>
      <button className={styles.deleteButton} onClick={() => onDelete(task.id)}>
        <TbTrash size={20} />
      </button>
      <button
        className="btn btn-sm btn-danger"
        onClick={() => handleEdit(task.id)}
      >
        Редактировать
      </button>
      <FileUploader />
    </div>
  );
}
