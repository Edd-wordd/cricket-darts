import React from "react";
import Dartboard from "../../img/dartboard.png";
import { Link } from "react-router-dom";

export default class Home extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         playerOne: "",
         playerTwo: "",
         playerOneTotal: 301,
         playerTwoTotal: 301,
      };
   }
   // we only need one of these
   //  func(player, state)

   // better handle the zero value on playerPoints
   //       const playerOnePoints = document.getElementById("player-one-dart-input")
   // .value;

   // getPlayerScores(this.state.playerOneTotal, playerOneTotal)
   // getPlayerScores(playerTwoTotal)

   validatePlayerScores(playerState) {
      let parsedPlayerPoints;
      console.log("scores clicked");
      const playerPoints = document.getElementById("player-one-dart-input")
         .value;
      if (
         playerPoints.length < 1 ||
         (parseInt(playerPoints) < 1 && parseInt(playerPoints) < 61)
      ) {
         parsedPlayerPoints = 0;
      } else {
         parsedPlayerPoints = parseInt(playerPoints);
      }

      let newTotal = playerState - parsedPlayerPoints;

      return newTotal;
   }
   // this.updatePlayerOneScore(this.validatePlayerScores(this.state.playerOneTotal))
   updatePlayerOneScore(value) {
      this.setState({
         playerOneTotal: `${value}`,
      });
   }
   updatePlayerTwoScore(value) {
      this.setState({
         playerTwoTotal: `${value}`,
      });
   }
   // getPlayerOneScores() {
   //    let parsedPlayerOnePoints;
   //    console.log("scores clicked");
   //    const playerOnePoints = document.getElementById("player-one-dart-input")
   //       .value;
   //    //  check to see what the input is coming in as
   //    console.log(typeof playerOnePoints);
   //    console.log(`points are: ${playerOnePoints}`);
   //    // convert string into a number
   //    if (playerOnePoints.length > 0) {
   //       parsedPlayerOnePoints = parseInt(playerOnePoints);
   //       // make sure string in converted into a number
   //       console.log(typeof parsedPlayerOnePoints);
   //       let playerOneShots = this.state.playerOneTotal - parsedPlayerOnePoints;
   //       console.log(playerOneShots);
   //       const updatedPlayerOneScore = this.setState({
   //          playerOneTotal: playerOneShots,
   //       });
   //       return updatedPlayerOneScore;
   //    }

   //    return "something";
   // }
   // getPlayerTwoScores() {
   //    console.log("scores clicked");
   //    const playerTwoPoints = document.getElementById("player-two-dart-input")
   //       .value;
   //    //  check to see what the input is coming in as
   //    console.log("playerTwo", typeof playerTwoPoints);
   //    // convert string into a number
   //    const parsedPlayerTwoPoints = parseInt(playerTwoPoints);
   //    // make sure string in converted into a number
   //    console.log(typeof parsedPlayerTwoPoints);
   //    let playerTwoShots = this.state.playerTwoTotal - parsedPlayerTwoPoints;
   //    console.log(playerTwoShots);
   //    const updatedPlayerTwoScore = this.setState({
   //       playerTwoTotal: playerTwoShots,
   //    });
   //    return updatedPlayerTwoScore;
   // }

   getPlayerNames() {
      console.log("name clicked");
      const firstPlayer = document.getElementById("first-player").value;
      console.log(firstPlayer);
      this.setState({ playerOne: firstPlayer });
      const secondPlayer = document.getElementById("second-player").value;
      console.log(secondPlayer);
      this.setState({ playerTwo: secondPlayer });
   }

   render() {
      return (
         <div className="body">
            <div className="container">
               <div className="row ml-5">
                  <div className="col-6b offset-3 home-page-title">
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
                     <button
                        className="btn-danger"
                        id="first-player-name"
                        onClick={() => {
                           this.getPlayerNames();
                        }}
                     >
                        PLAY
                     </button>
                     <div className="landing-text carousel-caption">
                        <h1 className="text-center player-one">
                           {this.state.playerOne}
                        </h1>
                     </div>
                     <img
                        className="dartboard ml-3"
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
                     <button
                        className="btn-danger"
                        onClick={() => {
                           this.getPlayerNames();
                        }}
                     >
                        PLAY
                     </button>
                     <div className="landing-text carousel-caption">
                        <h1 className="text-center player-two">
                           {this.state.playerTwo}
                        </h1>
                     </div>
                     <img
                        className="dartboard ml-3"
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
                        id="player-one-dart-input"
                     ></input>
                     <button
                        className="btn-danger"
                        id="player-one-darts-submit"
                        onClick={() => {
                           this.updatePlayerOneScore(
                              this.validatePlayerScores(
                                 this.state.playerOneTotal
                              )
                           );
                        }}
                     >
                        Submit
                     </button>
                  </div>
                  <div className="col">
                     <input
                        type="text"
                        placeholder="Second Player Darts"
                        className="ml-5"
                        id="player-two-dart-input"
                     ></input>
                     <button
                        className="btn-danger"
                        id="player-two-darts-submit"
                        onClick={() => {
                           this.updatePlayerOneScore(
                              this.validatePlayerScores(
                                 this.state.playerTwoTotal
                              )
                           );
                        }}
                     >
                        Submit
                     </button>
                  </div>
               </div>
               {/* end of dart inputs */}
               {/* start af player totals */}
               <div className="row mb-5">
                  <div className="col">
                     <p id="player-one-total" className="ml-5">
                        {this.state.playerOneTotal}
                     </p>
                  </div>

                  <div className="col">
                     <p id="player-two-total" className="ml-5">
                        {this.state.playerTwoTotal}
                     </p>
                  </div>
               </div>
               {/* end of player totals */}

               <div className="row">
                  <div className="col-6 offset-3">
                     <Link
                        to="/losers-drink"
                        className="btn btn-danger btn-lg "
                     >
                        LETS GET THAT LOSER A DRINK!
                     </Link>
                  </div>
               </div>
            </div>
         </div> // End of Body div
      );
   }
}
