import { useState } from "react";
import "./newProduct.css";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../../firebase";
import { addProduct } from "../../redux/apiCalls";
import { useDispatch } from "react-redux";

export default function NewProduct() {
  const [title, setTitle] = useState("");
  const [img, setImg] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [categories, setCat] = useState([]);


  const handleCat = (e) => {
    setCat(e.target.value.split(","));
  };

  const handleClick = (e) => {
    e.preventDefault();
    const blog = { title,img,desc, price, categories };
    const blog2 = JSON.stringify(blog)

    fetch("https://qrep-api.herokuapp.com/api/products/", {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(blog)
    }).then(()=>{
      console.log("prod added")
      console.log(blog2)
    })

  };
  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Product</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Image</label>
          <input
              name="img"
              type="text"
            onChange={(e) => setImg(e.target.value)}
          />
        </div>
        <div className="addProductItem">
          <label>Title</label>
          <input
            name="title"
            type="text"
            placeholder="Apple Airpods"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="addProductItem">
          <label>Description</label>
          <input
            name="desc"
            type="text"
            placeholder="description..."
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <div className="addProductItem">
          <label>Price</label>
          <input
            name="price"
            type="number"
            placeholder="100"
            onChange={(e) => setPrice(e.target.valueAsNumber)}
          />
        </div>
        <div className="addProductItem">
          <label>Categories</label>
          <input type="text" placeholder="jeans,skirts" onChange={handleCat} />
        </div>

        <button onClick={handleClick} className="addProductButton">
          Create
        </button>
      </form>
    </div>
  );
}
