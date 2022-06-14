import { Link, useLocation } from "react-router-dom";
import "./product.css";
import Chart from "../../components/chart/Chart";
import { productData } from "../../dummyData";
import { Publish } from "@material-ui/icons";
import { useSelector } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import { publicRequest } from "../../requestMethods";

export default function Product() {
  const location = useLocation();
  const productId = location.pathname.split("/")[2];
  const [pStats, setPStats] = useState([]);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [img, setImg] = useState("");

  const product = useSelector((state) =>
    state.product.products.find((product) => product._id === productId)
  );
    console.log(product)
  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await publicRequest.get("orders/income?pid=" + productId);
        const list = res.data.sort((a,b)=>{
            return a._id - b._id
        })
        list.map((item) =>
          setPStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], Sales: item.total },
          ])
        );
      } catch (err) {
        console.log(err);
      }
    };
    getStats();
  }, [productId, MONTHS]);

    const handleClick = (e) => {
        e.preventDefault();
        const blog = { title,img,desc, price};
        console.log(`http://localhost:5000/api/products/${product._id}`)
        fetch(`https://qrep-api.herokuapp.com/api/products/${product._id}`, {
            method: 'PUT',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(() => {
            console.log("prod changed")
        })
    }

    const delClick = (e) => {
        e.preventDefault()
        fetch(`https://qrep-api.herokuapp.com/api/products/${product._id}`, {
            method: 'DELETE',
            headers: {"Content-Type": "application/json"},
        }).then(() => {
            console.log("prod deleted")
        })
    }

  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newproduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopLeft">
          <Chart data={pStats} dataKey="Sales" title="Sales Performance" />
        </div>
        <div className="productTopRight">
          <div className="productInfoTop">
            <img src={product.img} alt="" className="productInfoImg" />
            <span className="productName">{product.title}</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id:</span>
              <span className="productInfoValue">{product._id}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">in stock:</span>
              <span className="productInfoValue">{product.inStock}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Product Name</label>
            <input type="text" placeholder={product.title} onChange={(e) => setTitle(e.target.value)}/>
            <label>Product Description</label>
            <input type="text" placeholder={product.desc} onChange={(e) => setDesc(e.target.value)}/>
            <label>Price</label>
            <input type="number" placeholder={product.price} onChange={(e) => setPrice(e.target.valueAsNumber)}/>

              <label>Img</label>
              <input type="text" placeholder={product.img} onChange={(e) => setImg(e.target.value)}/>
              <label>In Stock</label>
            <select name="inStock" id="idStock">
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img src={product.img} alt="" className="productUploadImg" />
              <label for="file">
                <Publish />
              </label>
              <input type="file" id="file" style={{ display: "none" }} />
            </div>
            <button onClick={handleClick} className="productButton">Update</button>
              <button onClick={delClick} className="productButton">Delete</button>
          </div>
        </form>
      </div>
    </div>
  );
}
