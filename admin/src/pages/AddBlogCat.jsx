import React from "react";
import InputComponent from "../components/InputComponent";

const AddBlogCat = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <h3>Add New Blog Category</h3>
      <form>
        <div className="add-form-section">
          <InputComponent type="text" label="Enter blog Category" />

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

export default AddBlogCat;
