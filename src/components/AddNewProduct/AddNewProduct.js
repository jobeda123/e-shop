import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";


const AddNewProduct = () => {
  const { register, handleSubmit, reset } = useForm();
  // console.log(allData);
  const [productData, setProductData] = useState({});
  const [description, setDescription] = useState("");
  const [imageURL, setImageURL] = useState(null);



  const onSubmit = (data, e) => {
    console.log("product info-----", data);
    if (imageURL !== null) {
      const newProduct = {
        title: data.productTitle,
        description: description,
        price: data.productPrice,
        discount: data.productDiscount,
        category: data.productCategory,
        image: imageURL,
        rating: data.productRating,
      };
      console.log(description);
      setProductData(newProduct);

      console.log(newProduct);
      // store data in the mongoDB
      // form input will be empty

      fetch("https://boiling-headland-36176.herokuapp.com/addProduct", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(productData),
      })
        .then((res) => res.json())
        .then((result) => {
          if (result) {
            console.log(result);
            alert("New Product Added Successfully....");
            reset();
            e.preventDefault();
          }
        });
    }
  };

  const handleImageUpload = (event) => {
    console.log("image uploading..........", event.target.files);
    const imageData = new FormData();
    imageData.set("key", "ff829b8e1a8b41470dbcf696361a1530");
    imageData.append("image", event.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          setImageURL(response.data.data.display_url);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleProductDescription = (event) => {
    console.log("text area..........", event.target.value);
    setDescription(event.target.value);
  };

  return (
    <div className="userAccountDetailArea">
      {/* Add New Admin Form Area */}
      <p style={{ fontWeight: "700" }}>Add New Product :</p>
      <div style={{ display: "block" }} className="passwordUpdate">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("productTitle", { required: true })}
            placeholder="Title"
          />
          <br />
          <textarea
            placeholder="Description"
            onBlur={handleProductDescription}
          />
          <br />
          <input
            {...register("productPrice", { required: true })}
            placeholder="Price"
          />
          <br />
          <input
            {...register("productDiscount", { required: true })}
            placeholder="Discount"
          />
          <br />
          <input
            {...register("productCategory", { required: true })}
            placeholder="Category"
          />
          <br />
          <input
            {...register("productRating", { required: true })}
            placeholder="Rating"
          />
          <br />
          <input type="file" onChange={handleImageUpload} />

          <button
            className="blackBtn ml-2 my-3"
            onClick={() => {
              console.log("Add new product button submit click.....");
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNewProduct;
