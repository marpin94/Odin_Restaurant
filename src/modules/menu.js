function menu () {
   
    const menu = document.createElement('div')
    menu.id = 'menu'
    menu.className = 'pages'

    menuItems.forEach(item => {

        const div = document.createElement('div')
        div.id = 'menuItem'

        const h1 = document.createElement('h1')
        h1.id = 'itemName'
        h1.className = 'menuText'
        h1.textContent = item.Item

        const h2 = document.createElement('h2')
        h2.id = 'itemDesc'
        h2.className = 'menuText'
        h2.textContent = item.Description

        const h3 = document.createElement('h3')
        h3.id = 'itemPrice'
        h3.className = 'menuText'
        h3.textContent = item.Price

        div.appendChild(h1)
        div.appendChild(h2)
        div.appendChild(h3)

        menu.appendChild(div)

    })
  
    return menu
}

function loadMenu () {
    const main = document.getElementById('mainBody')
    main.textContent = ''
    main.appendChild(menu());
}


const menuItems = [
    {
        'Item': 'Canolli',
        'Price': '$3.50',
        'Description': 'Puff pasty shell filled with custard or chocolate'
    },
    {
        'Item': 'Biscotti',
        'Price': '$2.00',
        'Description': 'The perfect pair to our Espresso.'
    },
    {
        'Item': 'Tiramisu',
        'Price': '$8.00',
        'Description': 'Traditional Italian desert, made with ladyfingers soaked in our house espresso'
    },
    {
        'Item': 'Espresso',
        'Price': '$3.00',
        'Description': 'Italian Espresso, served with glass of sparkling water'
    },
    {
        'Item': 'Gelato',
        'Price': '$1.00 per Scoop',
        'Description': 'Chocolate, Vanilla, Strawberry'
    }
    
]


export default loadMenu;
