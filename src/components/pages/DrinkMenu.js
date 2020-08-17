import React from "react";
import leftArrow from "../../icons/arrow-thick-left.svg";
import { Link } from "react-router-dom";

export default function DrinkMenu(props) {
   return (
      <div className="body">
         <div className="container">
            <div className="row">
               <div className="col-6 offset-3">
                  <h1 className="text-center loser-page-title ">GOOD LUCK</h1>

                  <button type="button" class="btn btn-danger btn-lg btn-block">
                     What are you drinking?!
                  </button>
               </div>
            </div>
            <div className="row">
               <div className="col-10 offset-1">
                  <p className=" drink-name">WHISKEY SHOT!</p>
               </div>
            </div>
            <Link to="/" className="btn btn-danger">
               <img src={leftArrow} className=" mr-2" />
               Play Again
            </Link>
         </div>
      </div>
   );
}
