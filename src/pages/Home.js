import React, { Fragment } from "react";

const Home = () => {
  return (
    <Fragment>
      <header>
        <div className="pageContainer">
          <h1 className="title">Brett Cahill</h1>
          <h3 className="underTitle">Junior Web Developer</h3>
          <div className="lang-img">
            <img src="./img/nodejs.png" alt="languages" className="languages" />
            <img src="./img/react.png" alt="languages" className="languages" />
          </div>
        </div>
      </header>
    </Fragment>
  );
};

export default Home;
