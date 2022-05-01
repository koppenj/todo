import './styles.css';
import './createProject';
import './pageActions';
import { getProjects } from './loader';

window.onload = function() {
  getProjects();
}