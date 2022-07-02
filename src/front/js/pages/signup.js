import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Signup = () => {
  const {store,actions} = useContext(Context);

  const [username,setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password,setPassword] = useState("")

  const handleSubmit = (e) => {
      e.preventDefault();
       if (username !== "" && email !=="" && password !=="") {
         actions.createUser(username,email,password)
         alert("Your user has been succesfully")
        } else {
          alert("Rellena todos los campos");
      }
    };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="my-3">
          <label htmlFor="sds" className="form-label">
           Enter a username
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputUsernamel1"
            aria-describedby="emailHelp"
            onChange={(e) => setUsername(e.target.value)} //capta el cambio en value
			    	value={username}
          />
          
        </div>
        <div className="mb-3">
          <label htmlFor="sds" className="form-label">
           Enter your email adress
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e) => setEmail(e.target.value)} //capta el cambio en value
			    	value={email}
          />
          
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Enter a password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={(e) => setPassword(e.target.value)} //capta el cambio en value
			    	value={password}
          />
        </div>
    
        <button type="submit" onSubmit = {()=>actions.createUser} className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};
