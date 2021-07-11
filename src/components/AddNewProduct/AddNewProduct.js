import React from "react";
import { useForm } from "react-hook-form";
import allData from '../../fakeData/fakeData';

const AddNewProduct = () => {
  const { register, handleSubmit } = useForm();
  console.log(allData);

  const onSubmit = (data) => {
    console.log("product info-----", data);
    alert("New Product Added Successfully....");
    // store data in the mongoDB
    // form input will be empty

    fetch('http://localhost:4000/addProduct', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(allData)
    })
  };

  const handleImageUpload = event => {
    console.log("image uploading..........", event.target.files);
    // const imageData = new FormData();
    // imageData.set('key', '651cd2d556176d579184fce70268ab3a');
    // imageData.append('image', event.target.files[0]);


    // axios.post('https://api.imgbb.com/1/upload',
    //     imageData)
    //     .then(function (response) {
    //         console.log(response);
    //         setImageURL(response.data.data.display_url);
    //     })
    //     .catch(function (error) {
    //         console.log(error);
    //     });
}

const handleProductDescription=(event) =>{
    console.log("text area..........", event.target.value);
  }

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
          <textarea placeholder="Description" onBlur={handleProductDescription} />
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
          <input type="file" onChange={handleImageUpload} />

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

export default AddNewProduct;
