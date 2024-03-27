import React from "react";
import { Link } from "react-router-dom";

 
const Home = () => {
  return (
    <div className="container welcome_box">
      <div className="row box">
        <p>Welcome to Quizzz</p>
        <Link to="/questions">
          <button className="btn btn-primary btn-block text-center">Start the Quiz</button>
        </Link>
      </div>
    </div>
  ); 
};
 
export default Home;