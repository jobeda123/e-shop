import React, { useState } from "react";
import "./UserAccountDetail.css";
import { Table } from "react-bootstrap";
import { useForm } from "react-hook-form";


const UserAccountDetail = () => {
  const userName = "Jobeda Nur";
  const userEmail = "jobeda@gmail.com";
  const [changePassword, setChangePassword] = useState("none");

  const {
    register,
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log("Password-----", data);
    if(data.newPassword === data.confirmPassword){
        // update password in the mongoDB
        alert("Your Password Has Been Updated Successfully");
        setChangePassword("none");
    }
    else{
        alert("Not Match");
        // field will be reset....
    }
  };

  return (
    <div className="userAccountDetailArea">
      <div>
        <p style={{fontSize:"20px"}}>
          Hello, <span style={{ fontWeight: "700" }}>{userName}</span>
        </p>
      </div>

      {/* Account Details Table Area */}
      <div>
        <p style={{ fontWeight: "700" }}>Account Details :</p>
        <div>
          <Table bordered size="lg">
            <tbody>
              <tr>
                <td>Name: </td>
                <td>{userName}</td>
              </tr>
              <tr>
                <td>E-mail: </td>
                <td>{userEmail}</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>

      {/* Password Update Area */}
      <button
        className="blackBtn my-4"
        onClick={() => {
          console.log("Change Button");
          setChangePassword("block");
        }}
      >
        Change Password
      </button>

      {/* Password Update Form Area */}
      <div style={{ display: changePassword }} className="passwordUpdate">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("newPassword", { required: true })}
            placeholder="New Password"
          />
          
          <br />
          <input
            {...register("confirmPassword", { required: true })}
            placeholder="Confirm Password"
          />
          
          <br />
          <button
            className="blackBtn ml-2 my-3"
            onClick={() => {
              console.log("Update click.....");
            }}
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserAccountDetail;
