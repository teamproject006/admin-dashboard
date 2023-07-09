import axios from 'axios'
import React, { useState } from 'react'

function UpdateService({oneData}) {
  // const [imgFile,setImgFile]=useState("")
  const [logoFile,setLogoFile]=useState('')
  const [logoUrl,setLogoUrl]=useState(oneData[0].logo)
  const [category,setCategory]=useState(oneData[0].category)
  const [companyName,setCompanyName]=useState(oneData[0].companyName)
  const [description,setDescription]=useState(oneData[0].description)
  const [costPerDay,setCostPerDay]=useState(oneData[0].costPerDay)
  const [address,setAddress]=useState(oneData[0].address)
  const [email,setEmail]=useState(oneData[0].email)
console.log("hi",oneData[0].images)
  
  const model={
      category:category,
      companyName:companyName,
      description:description,
      costPerDay:costPerDay,
      logo:logoUrl,

      address:address,
      email:email
  }
   const updateOne= async (id)=>{
      axios.put(`http://localhost:3004/api/services/${id}`,model)
      .then(()=>alert("done"))
      .catch((err)=>console.log("ther is erreur",err))
   }
  // const uploadImage =async () => {
  //   console.log("object")
  //     const form = new FormData();
  //     form.append("file", imgFile);
  //     form.append("upload_preset", "farescloud");
  //     await axios.post("https://api.cloudinary.com/v1_1/dt7t7wjql/upload", form).then((res) => {
  //       setImgUrl(old=>[ ...old,res.data.secure_url])
  //       console.log(imgUrl)
  //     })
  //     .catch((err)=>{console.log(err)})
  //   };

  const uploadLogo =async () => {
      const form = new FormData();
      form.append("file", logoFile);
      form.append("upload_preset", "farescloud");
      await axios.post("https://api.cloudinary.com/v1_1/dt7t7wjql/upload", form).then((res) => {
       setLogoUrl(res.data.secure_url)
       console.log(res.data.secure_url)
      })
      .catch((err)=>{console.log(err)})
    };
return (
  <div>
    <div className="formbold-main-wrapper">
      <div className="formbold-form-wrapper">
        <div>
          <h2 className="formbold-form-title">Update One Service</h2>

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
              <button onClick={()=>uploadLogo()} >Add the logo</button>
            </div>
            <div>
              <label  className="formbold-form-label">
                {" "}
                Image about the service*{" "}
              </label>
              <input
                type="file"
                className="formbold-form-input"
              
              />
              <button onClick={()=>alert(`you can't update the images`)} >Add image</button>
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
                Email*{" "}
              </label>
              <input
                type="email"
                className="formbold-form-input"
                onChange={e=>setEmail(e.target.value)}value={email}
              />
            </div>
          </div>

         

          <p className="formbold-policy">
            By filling out this form and clicking submit, you acknowledge our
          </p>
          <button className="formbold-btn" 
          onClick={()=>updateOne(oneData[0].id)}>Update</button>
        </div>
      </div>
    </div>

  </div>
);
}

export default UpdateService
