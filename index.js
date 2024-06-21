import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import myImage from "./Eddie.jpeg";

const skills = [
  {
    skill: "JavaScript",
    level: "advanced",
    color: "red",
  },
  {
    skill: "React",
    level: "studying",
    color: "orange",
  },
  { skill: "HTML/CSS", level: "beginner", color: "yellow" },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <div className="flex-container">
      <img src={myImage} alt="Eddie Tosetto" className="centered-image" />
    </div>
  );
}
function Intro() {
  return (
    <div>
      <p>
        Hi, I'm Eddie! Aspiring Web Developer. Currently studying React
        Framework. When I'm not coding I love cooking (and eating), playing
        board games and basketball.{" "}
      </p>
    </div>
  );
}
function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skill={skill.skill} color={skill.color} level={skill.level} />
      ))}
    </div>
  );
}
function Skill({ skill, color, level }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "beginner" && "👶🏻"}
        {level === "studying" && "📚"}
        {level === "advanced" && "💪🏻"}
      </span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
