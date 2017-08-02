import _ from 'lodash';
import printMe from './print';
import '../public/asset/css/style.css';
// the Icon is an src
import Icon from '../public/asset/img/icon.jpg'

if (module.hot) {
  module.hot.accept('./print.js', function () {
    console.log('Accepting the updated printMe module!');
    printMe();
  })
}

function component () {
  var element = document.createElement('div');
  var btn = document.createElement('button');

  element.innerHTML = _.join(['Hello', 'Webpack'], '  ');
  
  btn.innerHTML = 'Click me and check the console';
  btn.onclick = printMe;

  element.appendChild(btn);
  element.classList.add('hello');
  
  //add the img to our existing div
  var myIcon = new Image();
  myIcon.src = Icon;
  element.style.height = "200px"
  //element.appendChild(myIcon); // add an <img src = myIcon>
  return element;
}

document.body.appendChild(component());