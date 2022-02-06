import React from "react"
import "./skills.scss"

const Testimonials = () => {
  return (
    <div className="skills" id="skills">
      <div className="container">
        <div className="txt-container">
          <h2>About Me</h2>

          <p>
            I am a 4th year student currently enrolled at iAcademy. I really
            like to code things from scratch, and enjoy bringing ideas to life
            in the browser. Career-wise, I aspire to be a front-end developer.
          </p>
        </div>
        <h2>My Toolbox</h2>

        <section className="skills-grid">
          <div className="card">
            <p>HTML</p>
            <img src="/assets/skills/html.png" alt="" />
          </div>
          <div className="card">
            <p>CSS</p>
            <img src="/assets/skills/css.png" alt="" />
          </div>
          <div className="card">
            <p>Sass</p>
            <img src="/assets/skills/sass.png" alt="" />
          </div>
          <div className="card">
            <p>JavaScript</p>
            <img src="/assets/skills/js.png" alt="" />
          </div>
          <div className="card">
            <p>ReactJS</p>
            <img src="/assets/skills/react.png" alt="" />
          </div>
          <div className="card">
            <p>Github</p>
            <img src="/assets/skills/github.png" alt="" />
          </div>
          <div className="card">
            <p>NPM</p>
            <img src="/assets/skills/npm.png" alt="" />
          </div>
          <div className="card">
            <p>VS Code</p>
            <img src="/assets/skills/vscode.png" alt="" />
          </div>
          <div className="card">
            <p>Vue.js</p>
            <img src="/assets/skills/vue.png" alt="" />
          </div>
        </section>
      </div>
    </div>
  )
}

export default Testimonials
