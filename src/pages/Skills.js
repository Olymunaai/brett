import React, { Fragment } from "react";

const Skills = () => {
  return (
    <Fragment>
      <header>
        <div className="pageContainer ">
          <h1 className="trainingskills">Training & Skills</h1>
          <div className="aboutContainer">
            <div className="skillsDiv">
              <img
                src="./img/AngelaYuCert.jpg"
                alt="certificate"
                className="cert"
              />
              <p className="cert-para">
                In addition to self-teaching and using online tutorials, I have
                completed Angela Yu's complete 2020 Web Development Bootcamp
                course, which covered a range of frontend and backend
                development.
              </p>
            </div>

            <div className="skillsDiv">
              <img
                src="./img/languages.png"
                alt="languages"
                className="skills-lang"
              />
              <ul>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>EJS</li>
                <li>React.js</li>
                <li>MongoDB / Mongoose / Atlas</li>
                <li>DOM Manipulation</li>
                <li>Bash Command Line</li>
                <li>Git</li>
                <li>Reactive Design</li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </Fragment>
  );
};

export default Skills;
