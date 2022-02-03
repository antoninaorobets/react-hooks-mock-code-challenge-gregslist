import React,{useState} from 'react';

function CreateItem({onSubmit}) {
    const [formData,setFormData]= useState({
        description: "",
        image: "",
        location: "",
    })

    const handleChange =(event)=> {
        setFormData ({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (event)=> {
        event.preventDefault()
        onSubmit(formData)

    }


  return <form onSubmit={handleSubmit}>
       <label> Description: 
      <input type="text" name="description" value={formData.description} onChange={handleChange}></input>
      </label> 
      <label> Image: 
      <input type="text" name="image" value={formData.image} onChange={handleChange}></input>
      </label> 
      <label> Location:
      <input type="text" name="location" value={formData.location} onChange={handleChange}></input>
      </label>
      <input type="submit"></input>
  </form>;
}

export default CreateItem;
