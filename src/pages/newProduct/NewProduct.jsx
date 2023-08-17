import "./newProduct.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { DriveFolderUploadOutlined } from "@mui/icons-material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  getStorage,
  ref,
  getDownloadURL,
  uploadBytesResumable,
} from "firebase/storage";
import app from "../../firebase";
import { addProduct } from "../../Redux/apiCalls";

const NewProduct = () => {
  const [file, setFile] = useState("");
  const [inputs, setInputs] = useState({});
  const [cat, setCat] = useState([]);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const handleCat = (e) => {
    setCat(e.target.value.split(","));
  };

  const handleClick = (e) => {
    e.preventDefault();
    const fileName = new Date().getTime() + file.name;
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
        }
      },
      (error) => {
        // Handle unsuccessful uploads
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const product = { ...inputs, img: downloadURL, categories: cat };
          addProduct(product, dispatch);
          alert("Product Added Successfully!...")
        });
      }
    );
  };
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1 className="title">Add New Product</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt="icon"
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  image:
                  <DriveFolderUploadOutlined className="icon" />
                  <input
                    type="file"
                    id="file"
                    onChange={(event) => setFile(event.target.files[0])}
                    style={{ display: "none" }}
                  />
                </label>
              </div>
              <div className="formInput">
                <label>Title:</label>
                <input
                  name="title"
                  type="text"
                  placeholder="Denim Pant"
                  onChange={handleChange}
                />
              </div>
              <div className="formInput">
                <label>Description:</label>
                <input
                  name="desc"
                  type="text"
                  placeholder="slim fit pant.."
                  onChange={handleChange}
                />
              </div>
              <div className="formInput">
                <label>Price:</label>
                <input
                  name="price"
                  type="number"
                  placeholder="100"
                  onChange={handleChange}
                />
              </div>
              <div className="formInput">
                <label>categories:</label>
                <input
                  type="text"
                  placeholder="jeans, pant, men"
                  onChange={handleCat}
                />
              </div>
              <div className="formInput">
                <label>Stock:</label>
                <select name="inStock" onChange={handleChange}>
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                </select>
              </div>
              <button onClick={handleClick} className="addButton">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProduct;
