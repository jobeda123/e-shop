import React, { useContext, useState } from "react";
import "./UserAccountDetail.css";
import { Table } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { UserContext } from "../../App";
import firebase from "firebase/app";
import "firebase/auth";

const UserAccountDetail = () => {
  const [user] = useContext(UserContext);
  const [changePassword, setChangePassword] = useState("none");

  const { register, handleSubmit, reset } = useForm();

  const reauthenticate = (currentPassword) => {
    var user = firebase.auth().currentUser;
    var cred = firebase.auth.EmailAuthProvider.credential(
      user.email,
      currentPassword
    );
    return user.reauthenticateWithCredential(cred);
  };

  const onSubmit = (data) => {
    const currentPass = data.currentPassword;

    reauthenticate(currentPass)
      .then(() => {
        var user = firebase.auth().currentUser;
        if (data.newPassword === data.confirmPassword) {
          const newPassword = data.newPassword;
          user
            .updatePassword(newPassword)
            .then(() => {
              alert("Your Password Has Been Updated Successfully");
              reset();
              setChangePassword("none");
            })
            .catch((error) => {
              alert(error.message);
              reset();
            });
        } else {
          alert(
            "New Password and Confirmed Password Are Not Matched With Each Other"
          );
          reset();
        }
      })

      .catch((error) => {
        alert(error.message);
        reset();
      });
  };

  return (
    <div className="userAccountDetailArea">
      <div>
        <p style={{ fontSize: "20px" }}>
          Hello, <span style={{ fontWeight: "700" }}>{user.name}</span>
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
                <td>{user.name}</td>
              </tr>
              <tr>
                <td>E-mail: </td>
                <td>{user.email}</td>
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
            type="password"
            {...register("currentPassword", { required: true })}
            placeholder="Current Password"
          />

          <input
            type="password"
            {...register("newPassword", { required: true })}
            placeholder="New Password"
          />

          <br />
          <input
            type="password"
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
