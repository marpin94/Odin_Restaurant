import homePage from './modules/homePage'
import './style.css'
import Background from './background.jpg'


(function initialLoad () {

    const content = document.getElementById('content')

    content.appendChild(homePage());
})();



