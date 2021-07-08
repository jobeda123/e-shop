import React from "react";
import { useForm } from "react-hook-form";



const AddNewAdmin = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log("admin info-----", data);
    alert("New Admin Added Successfully....");
    // store data in the mongoDB
    // form input will be empty
  };

  return (
    <div className="userAccountDetailArea">
      {/* Add New Admin Form Area */}
      <p style={{ fontWeight: "700" }}>Add New Admin :</p>
      <div style={{ display: "block" }} className="passwordUpdate">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("adminName", { required: true })}
            placeholder="Admin Name"
          />
          <br />
          <input
            {...register("adminEmail", { required: true })}
            placeholder="Admin Email"
          />
          <br />
          <button
            className="blackBtn ml-2 my-3"
            onClick={() => {
              console.log("Add new admin button submit click.....");
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNewAdmin;