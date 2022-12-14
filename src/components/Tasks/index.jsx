import { Task } from "../Task";
import styles from "./tasks.module.css";

export function Tasks({ tasks, onDelete, onComplete, handleEdit }) {
  const tasksQuantity = tasks.length;
  const completedTasks = tasks.filter((task) => task.isCompleted).length;
  return (
    <section className={styles.tasks}>
      <header className={styles.header}>
        <div>
          <p>Созданные задачи</p>
          <span>{tasksQuantity}</span>
        </div>

        <div>
          <p className={styles.textPurple}>Выполненные задачи</p>
          <span>
            {completedTasks} из {tasksQuantity}
          </span>
        </div>
      </header>

      <div className={styles.list}>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onDelete={onDelete}
            onComplete={onComplete}
            handleEdit={handleEdit}
          />
        ))}
      </div>
    </section>
  );
}
