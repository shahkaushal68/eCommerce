import React from "react";
import InputComponent from "../components/InputComponent";

const AddBrand = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <h3>Add New Brand</h3>
      <form>
        <div className="add-form-section">
          <InputComponent type="text" label="Enter brand" />

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

export default AddBrand;
