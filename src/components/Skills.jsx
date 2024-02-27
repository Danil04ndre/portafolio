import { useState } from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import react from "../assets/react.png";
import node from "../assets/node.png";
import php from "../assets/php.png";
import mysql from "../assets/mysql.png";
import git from "../assets/git.png";
import Card from "./Card";
import "../css/Skills.css";

const initialSkills = [
  {
    image: html,
    name: "HTML",
    progress: 75,
  },
  {
    image: css,
    name: "CSS",
    progress: 70,
  },
  {
    image: js,
    name: "JavaScript",
    progress: 50,
  },
  {
    image: react,
    name: "React JS",
    progress: 65,
  },
  {
    image: node,
    name: "Node JS",
    progress: 45,
  },
  {
    image: php,
    name: "PHP",
    progress: 40,
  },
  {
    image: mysql,
    name: "MySQL",
    progress: 50,
  },
  {
    image: git,
    name: "Git",
    progress: 40,
  },
  {
    image: "https://logowik.com/content/uploads/images/redux.jpg",
    name: "REDUX (ToolKit)",
    progress: 0,
  },
];

const Skills = () => {
  const [skills] = useState(initialSkills);

  return (
    <>
      <section id="skills">
        <h2>Mis Habilidades</h2>
        <div className="content-skills">
          {skills.map((item, index) => (
            <Card key={index} el={item} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Skills;
