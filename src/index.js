import './styles.css';
import './createProject';
import './pageActions';
import { checkList, currentProjectList } from './createProject';
window.onload = function() {
  checkList();
  console.log(currentProjectList);
}