import React, { useState } from "react";

const EditTask = (props) => {
  const [name, setName] = useState(props.editingTask.title);
  const [desc, setDesc] = useState(props.editingTask.todoDesc);
  const [date, setDate] = useState(props.editingTask.todoDate);
  const ID = props.editingTask.id;

  const onChangeInput = (cb) => {
    return (event) => {
      const value = event.target.value;
      cb(value);
    };
  };
  const onClickSubmit = () => {
    props.editTask(ID, {
      title: name,
      todoDesc: desc,
      todoDate: date,
    });
  };
  console.log("name", name);
  return (
    <div
      style={{
        width: "300px",
        display: "flex",
        flexDirection: "column",
        margin: "20px auto",
      }}
    >
      <input
        type="text"
        className="form-control mb-2"
        name="todo"
        value={name}
        placeholder="Заголовок задачи"
        onChange={onChangeInput(setName)}
      />
      <input
        type="text"
        className="form-control mb-2"
        name="todo"
        value={desc}
        placeholder="Описание задачи"
        onChange={onChangeInput(setDesc)}
      />
      <input
        type={"datetime-local"}
        className="form-control mb-2"
        name="todo"
        value={date}
        placeholder="Дата выполнения"
        onChange={onChangeInput(setDate)}
      />
      <button
        onClick={onClickSubmit}
        type="button"
        className="btn btn-sm btn-danger"
      >
        готово
      </button>
    </div>
  );
};

export default EditTask;
