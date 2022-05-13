import "./styles.css";
import "./createProject";
import "./pageActions";
import "./task";
import { getProjects } from "./loader";

window.onload = function () {
  getProjects();
};
