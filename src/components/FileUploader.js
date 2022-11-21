import React from "react";

const FileUploader = () => {
  const [file, setFile] = React.useState();
  //   const [fileURL, setFileURL] = React.useState();

  const handlerOnChange = (event) => {
    event.preventDefault();
    const File = event.target.files[0];
    setFile(File);
  };
  return (
    <div>
      <input
        style={{ width: "120px" }}
        type="file"
        name="file"
        value=""
        onChange={handlerOnChange}
        className="form-control"
      />
      {file ? file.name : ""}
    </div>
  );
};

export default FileUploader;
