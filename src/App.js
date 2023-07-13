import React, { useState } from "react";
import './hello.css';


const App = () =>{
   const [fullname, setFullName] = useState({
    fname: '',
    lname: '',
    email: '',
    phone: ''
   });
  

   const inputEvent = (event) =>{
    console.log(event.target.value);
    console.log(event.target.name);

    // const value = event.target.value;
    // const name = event.target.name;

    const {value, name} = event.target;

    setFullName((preValue) =>{
      console.log(preValue);
      if(name === "fname"){
       return { fname: value,
        lname: preValue.lname,
        email: preValue.email,
        phone: preValue.phone
       };
      }else if(name === "lname"){
        return { 
         fname: preValue.fname,
         lname: value,
         email: preValue.email,
         phone: preValue.phone
        }
      }else if(name === "email"){
        return { 
         fname: preValue.fname,
         lname: preValue.lname,
         email: value,
         phone: preValue.phone
        }
      }else if(name === "phone"){
        return { 
         fname: preValue.fname,
         lname: preValue.lname,
         email: preValue.email,
         phone: value
        }
      }

    });
   };

   const onSubmit = (event) =>{
       event.preventDefault();
       alert("form submitted");
      }

   

  return(

    <div className="main_dev">
    <form onSubmit={onSubmit}>
     <div>
    <h1>Hello {fullname.fname} {fullname.lname} </h1>
    <p>{fullname.email}</p>

    <p> {fullname.phone}</p>
    <input type="text"
     placeholder="Enter your first name"
     name="fname"
      onChange={inputEvent}
      value={fullname.fname}
     />
<br />
<input type="text"
     placeholder="Enter your last name"
     name="lname"
      onChange={inputEvent}
      value={fullname.lname}
     />

<br/>
<input type="email"
     placeholder="Enter your Email-address"
     name="email"
      onChange={inputEvent}
      value={fullname.email}
     />
    <br />
    <input type="number"
     placeholder="Enter your phone Number"
     name="phone"
      onChange={inputEvent}
      value={fullname.phone}
     />



    <br/>
    <button type="submit" className='btn'>
      Submit Me
    </button>

    </div>
    </form>
    </div>
  )
}

export default App;