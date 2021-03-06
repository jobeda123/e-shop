import React from "react";
import "./ShippingAddress.css";
import { useForm } from "react-hook-form";
import { useState } from "react";
import PaymentModal from "../PaymentModal/PaymentModal";

const ShippingAddress = () => {
  const [shippingInformation, setShippingInformation] = useState({});

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const newShipping = { ...shippingInformation };
    newShipping.fullName = data.fullName;
    newShipping.address = data.address;
    newShipping.city = data.city;
    newShipping.country = data.country;
    newShipping.phone = data.phone;
    newShipping.postalCode = data.postalCode;
    setShippingInformation(newShipping);
    window.localStorage.setItem("shippingInfo", JSON.stringify(newShipping));
    setModalShow(true);
  };

  const [modalShow, setModalShow] = useState(false);

  return (
    <div className="shippingArea">
      <h4>Shipping</h4>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("fullName", { required: true })}
          placeholder="Full Name"
        />
        {errors.fullName && <span>This field is required</span>}

        <input
          {...register("phone", { required: true })}
          placeholder="Contact Number"
        />
        {errors.phone && <span>This field is required</span>}

        <input
          {...register("address", { required: true })}
          placeholder="Address"
        />
        {errors.address && <span>This field is required</span>}

        <input {...register("city", { required: true })} placeholder="City" />
        {errors.city && <span>This field is required</span>}

        <input
          {...register("postalCode", { required: true })}
          placeholder="Postal Code"
        />
        {errors.postalCode && <span>This field is required</span>}

        <input
          {...register("country", { required: true })}
          placeholder="Country"
        />
        {errors.country && <span>This field is required</span>}

        <button>CONTINUE TO PAYMENT</button>
      </form>

      <PaymentModal show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
};

export default ShippingAddress;
