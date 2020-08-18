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
                src="./img/languages.png"
                alt="languages"
                className="skills-lang"
              />
              <ul>
                <li>Node JS</li>
                <li>React JS</li>
                <li>Express JS</li>
                <li>MongoDB / Mongoose</li>
                <li>Git Command Line</li>
                <li>Github, AWS Amplify</li>
                <li>Responsive Design</li>
              </ul>
            </div>
            <div className="skillsDiv certificate">
              <img
                src="./img/AngelaYuCert.jpg"
                alt="certificate"
                className="cert"
              />
            </div>
          </div>
        </div>
      </header>
    </Fragment>
  );
};

export default Skills;
