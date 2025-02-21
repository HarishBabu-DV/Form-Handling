import { useState } from "react"
import inputFields from "../assets/asset"
import Label from "../components/Label"
import InputComponent from "../components/InputComponent"
const FormPage = () => {
  const initialValues=""
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
    <section>
        {/* Heading  */}
        <h1 className="text-3xl font-bold text-center ">Create Movies</h1>
        {/* Creating New movies form  */}
        <form action="" className="flex justify-center">  
          <div className="bg-[#f3f3f3] flex flex-col py-10 gap-y-4 max-w-[600px] w-full rounded-md">
            
            <div className="flex items-center px-4">
              <Label inputName={'name'} labelName={'name'} className={'capitalize'}/>     
              <input type="text" name="name" id="" className="border-1 rounded-sm px-4 py-2 w-[60%]" />
            </div>
            
            <div className="flex items-center px-4">
              <Label inputName={'description'} labelName={'description'} className={'capitalize'}/>    
              <textarea name="description" id="" cols="30" rows="5" className="border-1 w-[60%]"></textarea>
            </div>
           
            <div className="flex items-center px-4">
              <Label inputName={'duration'} labelName={'duration'} className={'capitalize'}/>     
              <input type="number" name="duration" id="" min={1} max={300} placeholder="in minutes" className="border-1 rounded-sm px-4 py-2 w-[60%]" />
            </div>
           
            <div className="flex items-center px-4">
              <Label inputName={'ratings'} labelName={'ratings'} className={'capitalize'}/>     
              <input type="number" name="ratings" id="" min={0.1} max={10.0} className="border-1 rounded-sm px-4 py-2 w-[60%]" placeholder="example: 8.1/10" />
            </div>

             <div className="flex items-center px-4">
                <Label inputName={'releaseDate'} labelName={'release Date'} className={'capitalize'}/>     
                <input type="date" name="releaseDate" id="releaseDate" min={'2025-02-01'} max={date} className="border-1 rounded-sm px-4 py-2 w-[60%]" />
            </div>

            <div className="flex items-center px-4">
                <Label inputName={'releaseyear'} labelName={'release year'} className={'capitalize'}/>     
                <input type="date" name="releasedate" id="" className="border-1 rounded-sm px-4 py-2 w-[60%]" />
            </div>
            <div className="flex items-center px-4">
              <input type="file" className="bg-white" />

            </div>
            <InputComponent className={'bg-black text-white hover:cursor-pointer'} inputType={'submit'} inputName={'submit'}>
            Create
          </InputComponent>
          </div>
          
        </form>
    </section>
  )
}

export default FormPage