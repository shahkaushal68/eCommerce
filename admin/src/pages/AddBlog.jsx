import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import InputComponent from "../components/InputComponent";

const AddBlog = () => {
  const [desc, setDesc] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(desc);
  };
  return (
    <>
      <h3>Add New Blog</h3>
      <form>
        <div className="add-form-section">
          <InputComponent type="text" label="Title" />
          <div className="mb-3">
            <select
              className="form-select"
              multiple
              aria-label="multiple select example"
            >
              <option>Select Categories</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>

          <div className="mb-3">
            <label>Description</label>
            <ReactQuill
              theme="snow"
              value={desc}
              onChange={(e) => setDesc(e)}
            />
          </div>
          <InputComponent type="file" />
          <div className="mb-3">
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleSubmit}
            >
              Add Blog
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default AddBlog;
