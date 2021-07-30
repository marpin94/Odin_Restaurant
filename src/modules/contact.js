function contact () {
   
    const contact = document.createElement('div')
    contact.id = 'contact'
    contact.className = 'pages'

    const title = document.createElement('h1')
    title.id = title
    title.className = 'contactText'
    title.textContent = 'Contact Us'


    const address = document.createElement('h2')
    address.id = 'address'
    address.className = 'contactText'
    address.textContent = 'Address: 1234 Durango Blvd.'

    const phone = document.createElement('h3')
    phone.id = 'phone'
    phone.className = 'contactText'
    phone.textContent = 'Phone: 555-555-5555'

    contact.appendChild(title)
    contact.appendChild(address)
    contact.appendChild(phone)
    
    return contact
}

function about () {

    const about = document.createElement('div')
    about.id = 'about'
    about.className = 'pages'

    const aboutTitle = document.createElement('h1')
    aboutTitle.id = 'aboutTitle'
    aboutTitle.textContent = 'Our Story'
    aboutTitle.className = 'contactText'

    const aboutText = document.createElement('h3')
    aboutText.id = 'aboutText'
    aboutText.className = 'contactText'
    aboutText.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'

    about.appendChild(aboutTitle)
    about.appendChild(aboutText)

    return about
    
}

function loadContact () {

    const main = document.getElementById('mainBody')
    main.textContent = ''
    main.appendChild(about())
    main.appendChild(contact());
}


export default loadContact;