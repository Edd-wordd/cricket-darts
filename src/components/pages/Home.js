import React from "react";
import Dartboard from "../../img/dartboard.png";
import { Link } from "react-router-dom";

export default function Home(props) {
   return (
      <div className="body">
         <div className="container">
            <div className="row ml-5">
               <div className="col-6b offset-3">
                  <h1 className="">DARTS TOTAL</h1>
                  <h1 className="text-center mb-5">301</h1>
               </div>
            </div>
            {/* dartboard and name inputs start*/}
            <div className="row mb-3">
               <div className="col">
                  <input
                     type="text"
                     id="first-player"
                     placeholder="First Player"
                     className="ml-5"
                  ></input>
                  <button className="btn-danger">PLAY</button>

                  <img
                     className="dartboard mr-5"
                     src={Dartboard}
                     alt="dartboard"
                  ></img>
               </div>
               <div className="col">
                  <input
                     type="text"
                     id="second-player"
                     placeholder="Second Player"
                     className="ml-5"
                  ></input>
                  <button className="btn-danger">PLAY</button>

                  <img
                     className="dartboard"
                     src={Dartboard}
                     alt="dartboard"
                  ></img>
               </div>
            </div>
            {/* dartboard and name inputs end */}
            {/* start of dart inputs */}
            <div className="row mb-3">
               <div className="col">
                  <input
                     type="text"
                     placeholder="First Player Darts"
                     className="ml-5"
                  ></input>
                  <button className="btn-danger">Submit</button>
               </div>
               <div className="col">
                  <input
                     type="text"
                     placeholder="Second Player Darts"
                     className="ml-5"
                  ></input>
                  <button className="btn-danger">Submit</button>
               </div>
            </div>
            {/* end of dart inputs */}
            {/* start af player totals */}
            <div className="row mb-5">
               <div className="col">
                  <p id="player-one-total" className="ml-5">
                     301
                  </p>
               </div>

               <div className="col">
                  <p id="player-two-total" className="ml-5">
                     301
                  </p>
               </div>
            </div>
            {/* end of player totals */}

            <div className="row">
               <div className="col-6 offset-3">
                  <Link to="/losers-drink" className="btn btn-danger btn-lg ">
                     LETS GET THAT LOSER A DRINK!
                  </Link>
               </div>
            </div>
         </div>
      </div> // End of Body div
   );
}
