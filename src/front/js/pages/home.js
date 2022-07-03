import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center mt-5">
     
      <p>
        <img src={rigoImageUrl} />
      </p>

      <h1>Please login or register if you don't have account</h1>
    </div>
  );
};
