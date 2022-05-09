import './styles.css';
import './createProject';
import './pageActions';
import './task';
import { getProjects } from './loader';
import { test } from './calendarManager';

window.onload = function() {
  getProjects();
  test();
}