import React, { Fragment } from "react";

const Skills = () => {
  return (
    <Fragment>
      <header>
        <div class="pageContainer ">
          <h1 class="trainingskills">Training & Skills</h1>
          <div class="aboutContainer">
            <div class="skillsDiv">
              <img
                src="./img/AngelaYuCert.jpg"
                alt="certificate"
                class="cert"
              />
              <p class="cert-para">
                In addition to self-teaching and using online tutorials, I have
                completed Angela Yu's complete 2020 Web Development Bootcamp
                course, which covered a range of frontend and backend
                development.
              </p>
            </div>

            <div class="skillsDiv">
              <img
                src="./img/languages.png"
                alt="languages"
                class="skills-lang"
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
