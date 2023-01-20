import React from "react";
import InputComponent from "../components/InputComponent";

const AddColour = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <h3>Add Colour</h3>
      <form>
        <div className="add-form-section">
          <InputComponent type="color" label="Enter Colour" />

          <div className="mb-3">
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default AddColour;
