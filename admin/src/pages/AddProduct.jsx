import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import InputComponent from "../components/InputComponent";

const AddProduct = () => {
  const [desc, setDesc] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <h3>Add New Product</h3>
      <form>
        <div className="add-form-section">
          <InputComponent type="text" label="Enter product name" />
          <div className="mb-3">
            <label>Description</label>
            <ReactQuill
              theme="snow"
              value={desc}
              onChange={(e) => setDesc(e)}
            />
          </div>
          <InputComponent type="file" />
          <InputComponent type="number" label="Enter product price" />
          <InputComponent type="number" label="Enter amount" />
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
            <select
              className="form-select"
              multiple
              aria-label="multiple select example"
            >
              <option>Select Brands</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div className="mb-3">
            <select
              className="form-select"
              multiple
              aria-label="multiple select example"
            >
              <option>Select Colors</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div className="mb-3">
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleSubmit}
            >
              Add Product
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default AddProduct;
