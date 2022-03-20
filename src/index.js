import './styles.css';
console.log('Hello There General Kenobi');
import logo from "./img/logo.png";


const logoPlace = document.getElementById('controlPanel');
const logoImg = new Image();
logoImg.src = logo;
logoImg.alt = 'logo';
logoPlace.appendChild(logoImg);
// At page load, check localstorge for a saved to do list
// Should probably remove save/load from action list and
// turn it into a single button/header nav bar
// Populate saved to do in blue sidebar
// Red box will populate when an action is highlighted?
//Need to build out constructor for actions