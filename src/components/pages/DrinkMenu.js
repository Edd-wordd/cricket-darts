import React from "react";
import leftArrow from "../../icons/arrow-thick-left.svg";
import { Link } from "react-router-dom";

export default class DrinkMenu extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         drink: "",
      };
   }
   getLoserDrink() {
      console.log("drink clicked");
      const drinkMenu = [
         "water shot",
         "whiskey shot",
         "vodka shot",
         "jager shot",
         "beer shot",
         "henny shot",
         "malibu shot",
         "loser picks",
         "winner picks",
         "tequilla shot",
         "wine shot",
         "moonshine shot",
         "rum shot",
         "no shot",
         "milk shot",
      ];
      let randomDrink = drinkMenu[Math.floor(Math.random() * drinkMenu.length)];
      console.log(randomDrink);
      let newDrink = this.setState({ drink: randomDrink });
      return newDrink;
   }
   render() {
      return (
         <div className="body">
            <div className="container">
               <div className="row">
                  <div className="col-6 offset-3">
                     <h1 className="text-center loser-page-title ">
                        GOOD LUCK
                     </h1>

                     <button
                        type="button"
                        className="btn btn-danger btn-lg btn-block"
                        onClick={() => {
                           this.getLoserDrink();
                        }}
                     >
                        What are you drinking?!
                     </button>
                  </div>
               </div>
               <div className="row">
                  <div className="col-10 offset-1">
                     <p className="drink-name" id="losers-drink">
                        {this.state.drink}
                     </p>
                  </div>
               </div>
               <Link to="/" className="btn btn-danger">
                  <img src={leftArrow} className=" mr-2" alt="arrow-icon" />
                  Play Again
               </Link>
            </div>
         </div>
      );
   }
}
