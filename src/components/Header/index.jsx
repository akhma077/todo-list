import todoLogo from "../../assets/todoLogo.svg";
import styles from "./header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useState } from "react";

export function Header({ handleAddTask }) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [date, setDate] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    handleAddTask(title, desc, date);
    setTitle("");
    setDesc("");
    setDate("");
  }

  return (
    <header className={styles.header}>
      <img src={todoLogo} />

      <form onSubmit={handleSubmit} className={styles.newTaskForm}>
        <input
          placeholder="Добавить заговолок задачи"
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <input
          placeholder="Добавить описание задачи"
          type="text"
          onChange={(e) => setDesc(e.target.value)}
          value={desc}
        />
        <input
          placeholder="Добавить дату выполнения"
          type="datetime-local"
          onChange={(e) => setDate(e.target.value)}
          value={date}
        />
        <button>
          Создать <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}
