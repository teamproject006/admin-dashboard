import React, { useState } from "react";
import "./AddService.css";
import axios from "axios";
function AddService() {
  const [imgfile, setImgFile] = useState("");
  const [logoFile, setLogoFile] = useState("");
  const [imgUrl, setImgUrl] = useState("https://t4.ftcdn.net/jpg/05/97/47/95/240_F_597479556_7bbQ7t4Z8k3xbAloHFHVdZIizWK1PdOo.jpg");
  const [logoUrl, setLogoUrl] = useState("https://t4.ftcdn.net/jpg/05/97/47/95/240_F_597479556_7bbQ7t4Z8k3xbAloHFHVdZIizWK1PdOo.jpg");
  const [category, setCategory] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [description, setDescription] = useState("");
  const [costPerDay, setCostPerDay] = useState("");
  const [address, setAddress] = useState("");
  const [createdAt, setCreatedAt] = useState("");
  const [updatedAt, setUpdatedAt] = useState("");
  //function to upload the image to cloudinary
  const uploadImage = async () => {
    const form = new FormData();
    form.append("file", imgfile);
    form.append("upload_preset", "farescloud");
    await axios
      .post("https://api.cloudinary.com/v1_1/dt7t7wjql/upload", form)
      .then((res) => {
        setImgUrl(res.data.secure_url);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  //function to uploade the logo to cloudinary
  const uploadLogo = async () => {
    const form = new FormData();
    form.append("file", logoFile);
    form.append("upload_preset", "farescloud");
    await axios
      .post("https://api.cloudinary.com/v1_1/dt7t7wjql/upload", form)
      .then((res) => {
        setLogoUrl(res.data.secure_url);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // function to post the service in the database
  const postService = () => {
    axios
      .post("the API", {
        id: 1,
        category: category,
        companyName: companyName,
        description: description,
        costPerDay: costPerDay,
        logo: logoUrl,
        images: imgUrl,
        address: address,
        createdAt: createdAt,
        updatedAt: updatedAt,
      })
      .then(() => {
        alert("The service was added");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <div className="formbold-main-wrapper">
        <div className="formbold-form-wrapper">
          <h2 className="formbold-form-title">Register new service</h2>

          <div className="formbold-input-flex">
            <div>
              <label className="formbold-form-label">Category</label>
              <input
                type="text"
                className="formbold-form-input"
                onChange={(e) => setCategory(e.target.value)}
                value={category}
              />
            </div>
            <div>
              <label className="formbold-form-label"> CompanyName </label>
              <input
                type="text"
                className="formbold-form-input"
                onChange={(e) => {
                  setCompanyName(e.target.value);
                }}
                value={companyName}
              />
            </div>
          </div>

          <div className="formbold-input-flex">
            <div>
              <label className="formbold-form-label"> Description* </label>
              <input
                type="text"
                className="formbold-form-input"
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
                value={description}
              />
            </div>
            <div>
              <label className="formbold-form-label"> Cost Per Day* </label>
              <input
                type="number"
                className="formbold-form-input"
                onChange={(e) => {
                  setCostPerDay(e.target.value);
                }}
                value={costPerDay}
              />
            </div>
          </div>

          <div className="formbold-input-flex">
            <div>
              <label className="formbold-form-label"> Logo* </label>
              <input
                type="file"
                className="formbold-form-input"
                onChange={(e) => setLogoFile(e.target.files[0])}
                
              />
              <button
                onClick={() => {
                  uploadLogo();
                }}
              >
                uplowd image
              </button>
            </div>
            <div>
              <label className="formbold-form-label">
                {" "}
                Image about the service*{" "}
              </label>
              <input
                type="file"
                className="formbold-form-input"
                onChange={(e) => setImgFile(e.target.files[0])}
             
              />
              <button
                onClick={() => {
                  uploadImage();
                }}
              >
                uplowd image
              </button>
            </div>
          </div>

          <div className="formbold-input-flex">
            <div>
              <label className="formbold-form-label"> Adresse* </label>
              <input
                type="adresse"
                className="formbold-form-input"
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
                value={address}
              />
            </div>
            <div>
              <label className="formbold-form-label"> Country* </label>
              <input
                type="text"
                name="country"
                id="country"
                className="formbold-form-input"
              />
            </div>
          </div>

          <div>
            <label className="formbold-form-label"> Post code* </label>
            <input type="text" className="formbold-form-input" />
          </div>
          <button className="btn">Submit </button>
        </div>
      </div>
      <label>The logo of the company </label>
      <img src={logoUrl} alt="" />
      <label>Image about the service </label>
      <img src={imgUrl} alt="" />
    </div>
  );
}

export default AddService;
