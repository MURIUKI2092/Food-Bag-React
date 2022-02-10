import React from "react";

const Buyers = () => {
  return (
    <>
      <div className="buyerDetail">
        <form>
          <label>
            <h3>
              <strong>Where are you?</strong>
            </h3>
          </label>
          <input
            type={"text"}
            placeholder="Enter your delivery address"
          ></input>
        </form>
      </div>
      <h3>
        <strong>Pick on interest</strong>
      </h3>
      <div className="buyerInterest">
        <div className="fastFood">
          <div></div>
          <article>Fast Food</article>
          <p>All sorrows are less with bread</p>
        </div>
        <div className="veggies"></div>
        <div className="Drinks"></div>
        <div className="restaurant"></div>
      </div>
      <div className="serve">
        <h3>
          <strong>How We serve you</strong>
        </h3>

        <div className="serveLocation"></div>
        <div className="yourWant"></div>
        <div className="come"></div>
      </div>
    </>
  );
};


export default Buyers
