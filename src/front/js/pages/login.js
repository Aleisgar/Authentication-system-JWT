import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Login = () => {

  const {store,actions} = useContext(Context);

  const [email, setEmail] = useState("")
  const [password,setPassword] = useState("")

  return (
    <>
      <form>
        <div className="mb-3">
          <label htmlFor="sds" className="form-label">
           Enter your email
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
          <label htmlFor="sds" className="form-label">
           Enter your password
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e) => setPassword(e.target.value)} //capta el cambio en value
			    	value={password}
          />
          
        </div>
    
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};
