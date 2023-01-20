import React from "react";
import InputComponent from "../components/InputComponent";

const AddCat = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <h3>Add New Category</h3>
      <form>
        <div className="add-form-section">
          <InputComponent type="text" label="Enter Category" />

          <div className="mb-3">
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleSubmit}
            >
              Add
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default AddCat;
