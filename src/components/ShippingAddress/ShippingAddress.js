import React from "react";
import "./ShippingAddress.css";
import { useForm } from "react-hook-form";

const ShippingAddress = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Data-----", data);
    const eventData = {
      name: data.name,
      email: data.email,
      description: data.reviewDescription,
      country: data.country,
    };
  };
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
    </div>
  );
};

export default ShippingAddress;
