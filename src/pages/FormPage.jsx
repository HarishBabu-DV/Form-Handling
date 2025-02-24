import { useState } from "react"
const FormPage = () => {
  const date=new Date()
  const [formData,setFormData]=useState({
    name:"",
    description:"",
    duration:"",
    ratings:"",
    releaseDate:"",
    releaseYear:"",
    uploadedFile:""
  })
  const handleInputChange=(event)=>{
    [event.target.name]=event.target.value;
  }
  const handleFileChange=(event)=>{
    event.target.files && setFormData({
      ...formData,
      uploadedFile:event.target.files[0]
    })
    console.log(formData.uploadedFile);
    
  }
  return (
    <section className="">
        {/* Heading  */}
        <h1 className="text-3xl font-bold text-center ">Create Movies</h1>
        {/* Creating New movies form  */}
        <form action="" className="">  
           
           <div>
              <div>
                <label htmlFor="movie_name">Movie Name</label>
                <input type="text" name="movie_name" id="movie_name" className="border-1" />
              </div>
              <div>
                <label htmlFor="">Description</label>
                <textarea name="movie_description" id="movie_description" cols="30" rows="5" className="border-1"></textarea>
              </div>

              {/* Multi select  */}


              <div>
                <label htmlFor="movie_duration">Duration</label>
                <input type="number" name="movie_duration" id="movie_duration"  className="border-1" min={1} max={500}/>
              </div>
           </div>
        </form>
    </section>
  )
}

export default FormPage