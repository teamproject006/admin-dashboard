import axios from 'axios'
import React, { useEffect, useState } from 'react'

function UpdateService() {
    const [imgFile,setImgFile]=useState("")
    const [logoFile,setLogoFile]=useState('')
    const [imgUrl,setImgUrl]=useState('https://t4.ftcdn.net/jpg/05/97/47/95/240_F_597479556_7bbQ7t4Z8k3xbAloHFHVdZIizWK1PdOo.jpg')
    const [logoUrl,setLogoUrl]=useState('https://t4.ftcdn.net/jpg/05/97/47/95/240_F_597479556_7bbQ7t4Z8k3xbAloHFHVdZIizWK1PdOo.jpg')
    const [category,setCategory]=useState('')
    const [companyName,setCompanyName]=useState('')
    const [description,setDescription]=useState('')
    const [costPerDay,setCostPerDay]=useState('')
    const [address,setAddress]=useState('')
    const [createdAt,setCreatedAt]=useState('')
    const [updatedAt,setUpdatedAt]=useState('')
    useEffect(()=>{
        uploadImage()
        uploadLogo()
    },[imgFile&& logoFile])
    
    const model={
        category:category,
        companyName:companyName,
        description:description,
        costPerDay:costPerDay,
        logo:logoUrl,
        images:imgUrl,
        address:address,
        createdAt:createdAt,
        updatedAt:updatedAt
    }
     const addService= async ()=>{
        axios.post("the API",model)
        .then((res)=>console.log(res))
        .catch((err)=>console.log(err))
     }
    const uploadImage =async () => {
        const form = new FormData();
        form.append("file", imgFile);
        form.append("upload_preset", "farescloud");
        console.log(form)
        await axios.post("https://api.cloudinary.com/v1_1/dt7t7wjql/upload", form).then((res) => {
          console.log(res.data.secure_url)
         setImgUrl(res.data.secure_url)
         
        })
        .catch((err)=>{console.log(err)})
      };

    const uploadLogo =async () => {
        const form = new FormData();
        form.append("file", logoFile);
        form.append("upload_preset", "farescloud");
        console.log(form)
        await axios.post("https://api.cloudinary.com/v1_1/dt7t7wjql/upload", form).then((res) => {
          console.log(res.data.secure_url)
         setLogoUrl(res.data.secure_url)
         
        })
        .catch((err)=>{console.log(err)})
      };
  return (
    <div>
      <div className="formbold-main-wrapper">
        <div className="formbold-form-wrapper">
          <div>
            <h2 className="formbold-form-title">Update the Service</h2>

            <div className="formbold-input-flex">
              <div>
                <label  className="formbold-form-label">
                Category*
                </label>
                <input
                  type="text"
                  className="formbold-form-input"
                  onChange={e=>setCategory(e.target.value)} value={category}
                />
              </div>
              <div>
                <label  className="formbold-form-label">
                  {" "}
                  Company Name*{" "}
                </label>
                <input
                  type="text"
                  className="formbold-form-input"
                  onChange={e=>setCompanyName(e.target.value)} value={companyName}
                />
              </div>
            </div>

            <div className="formbold-input-flex">
              <div>
                <label  className="formbold-form-label">
                  {" "}
                  Description*{" "}
                </label>
                <input
                  type="text"
                  className="formbold-form-input"
                  onChange={e=>{setDescription(e.target.value)}}value={description}
                />
              </div>
              <div>
                <label  className="formbold-form-label">
                  {" "}
                  Cost per day*{" "}
                </label>
                <input
                  type="number"
                  className="formbold-form-input"
                  onChange={e=>{setCostPerDay(e.target.value)}}value={costPerDay}
                />
              </div>
            </div>

            <div className="formbold-input-flex">
              <div>
                <label  className="formbold-form-label">
                  {" "}
                  Logo of the company*{" "}
                </label>
                <input
                  type="file"
                  className="formbold-form-input"
                  onChange={e=>{setLogoFile(e.target.files[0])}}
                />
              </div>
              <div>
                <label  className="formbold-form-label">
                  {" "}
                  Image about the service*{" "}
                </label>
                <input
                  type="file"
                  className="formbold-form-input"
                  onChange={e=>{setImgFile(e.target.files[0])}}
                />
              </div>
            </div>

            <div className="formbold-input-flex">
              <div>
                <label className="formbold-form-label">
                  {" "}
                  Address*{" "}
                </label>
                <input
                  type="Address"
                  className="formbold-form-input"
                  onChange={e=>{setAddress(e.target.value)}} value={address}
                />
              </div>
              <div>
                <label className="formbold-form-label">
                  {" "}
                  Areated At*{" "}
                </label>
                <input
                  type="text"
                  className="formbold-form-input"
                />
              </div>
            </div>

            <div>
              <label  className="formbold-form-label">
                {" "}
                Updated At*{" "}
              </label>
              <input
                type="text"
                className="formbold-form-input"
              />
            </div>

            <p className="formbold-policy">
              By filling out this form and clicking submit, you acknowledge our
            </p>
            <button className="formbold-btn" 
            onClick={()=>addService()}>Update the service </button>
          </div>
        </div>
      </div>
      <label >The logo of the company</label>
      <img src={logoUrl} alt=""/>
      <label>Image about the service of the company</label>
      <img src={imgUrl} alt=""/>
    </div>
  );
}

export default UpdateService
