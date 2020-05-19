import React, { Fragment } from "react";

const Home = () => {
  return (
    <Fragment>
      <header>
        <div class="pageContainer">
          <h1 class="title">Brett Cahill</h1>
          <h3 class="underTitle">Junior Web Developer</h3>
          <div class="lang-img">
            <img src="./img/nodejs.png" alt="languages" class="languages" />
            <img src="./img/react.png" alt="languages" class="languages" />
          </div>
        </div>
      </header>
    </Fragment>
  );
};

export default Home;
