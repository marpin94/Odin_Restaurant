import loadMenu from './menu';
import loadContact from './contact';


function homePage () {

    const home = document.createElement('div')
    home.id = 'home'
 
    // const homeContent = document.createElement('div')
    // homeContent.id = 'homeContent'
    // homeContent.className = 'pages'

    // const welcome = document.createElement('h3')
    // welcome.id = 'welcome'
    // welcome.textContent = `Welcome to Arpane \r\nPlease see our menu page for a selection of specialty cofees and pastries, we hope to see you soon!`
    
    // homeContent.appendChild(welcome)

    
    home.appendChild(createHeader())
    home.appendChild(createMain())

    return home
}

function createHeader () {

    const header = document.createElement('header')
    header.id= 'header'

    const description = document.createElement('h1')
    description.id = 'homeTitle'
    description.textContent = `-Arpane- \r\nA specialty Italian Bakery`
    
    header.appendChild(description)
    header.appendChild(createNav())

    return(header)

}
function createNav () {

    const nav = document.createElement('nav')
    nav.id = 'nav'

    const menuButton = document.createElement('button')
        menuButton.id = 'menuButton'
        menuButton.className = 'button'
        menuButton.textContent = 'MENU'
        menuButton.addEventListener('click', (e) => {
            removeActiveButton();
            menuButton.classList.add('active');
            loadMenu();
            
        });
        nav.appendChild(menuButton)
    


    const contactButton = document.createElement('button')
        contactButton.id = 'contactButton'
        contactButton.className = 'button'
        contactButton.textContent = 'CONTACT'
        contactButton.addEventListener('click', (e) => {
            removeActiveButton();
            contactButton.classList.add('active')
            loadContact();
        });
        nav.appendChild(contactButton)

    const homeButton = document.createElement('button')
        homeButton.id = 'homeButton'
        homeButton.className = 'button'
        homeButton.textContent = 'HOME'
        homeButton.addEventListener('click', (e) => {
                removeActiveButton();
                homeButton.classList.add('active')
                loadHome();
            });
        nav.appendChild(homeButton)

    return nav
};

function createMain () {
    const mainBody = document.createElement('main')
    mainBody.id = 'mainBody'

    const homeContent = document.createElement('div')
    homeContent.id = 'homeContent'
    homeContent.className = 'pages'

    const welcome = document.createElement('h2')
    welcome.id = 'welcome'
    welcome.textContent = `Welcome to Arpane \r\nPlease see our menu page for our selection of specialty cofees and pastries. We hope to see you soon!`
    
    homeContent.appendChild(welcome)

    mainBody.appendChild(homeContent)

    return mainBody
}

function removeActiveButton () {
   const active =  document.getElementsByClassName('active')
    if (active.length > 0 ) {
        active[0].classList.remove('active')
    }  
}


function loadHome () {
    const content = document.getElementById('content')
    content.textContent='';
    content.appendChild(homePage())
  
    
}






export default  homePage;