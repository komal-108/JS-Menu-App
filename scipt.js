let menus = [
    {
        id : 1,
        title :["Egg Tartine"],
        category:"Breakfast",
        image : "/images/egg-tirtine.webp",
        description :"I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",

    },
    {
        id : 2,
        title :["Special Thali"],
        category:"Lunch",
        image : "/images/thali.jpg",
        description :"I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
    },
    {
        id : 3,
        title :["Manchurian"],
        category:"Breakfast",
        image : "/images/Manchurian.jpg",
        description :"I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
    },
    {
        id : 4,
        title :["Veg Roll"],
        category:"Breakfast",
        image : "/images/veg-roll.jpeg", 
        description :"I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",  
    },
    {
        id : 5,
        title :["Strawery Shake"],
        category:"Breakfast",           
        image : "/images/shakes.jpg",
        description :"I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
    },
    {
        id : 6,
        title:["Idli"],
        category:"Lunch",               
        image : "/images/idli.webp",
        description :"I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
    },
    {
        id : 7,
        title :["Rajma Chawal"],
        category:"Lunch",
       image : "/images/rajma-chawal-1.jpg",
       description :"I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
    },
    {
        id : 8,
        title :["Kadai Paneer"],
        category:"Dinner",
       image : "/images/kadai-paneer.jpg",
       description :"I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
    },
    {
        id : 9,
        title :["Dal Makhani"],
        category:"Dinner",
       image : "/images/Dal-Makhani.avif",
       description :"I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",

    },
    {
        id:10,
        title : ["Chicken Curry"],
        category :"Dinner",
        image :"/images/chicken curry.jpg",
        description : "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed"
    }
];


let menuList = document.getElementById('menu_title');

function displayMenus() {
    menu_title.innerHTML = '';
    
    menus.forEach(function(menu){
    let item = document.createElement('li');

    let image = document.createElement('img')
    image.src = menu.image;

    let head = document.createElement('h4');
    head.innerHTML = menu.title;

    let desc = document.createElement('p');
    desc.innerHTML = menu.description;
    menuList.appendChild(item);
    item.appendChild(image);
    item.appendChild(head);
    item.appendChild(desc);
});
}

let breakfast = document.getElementById('bf');
let lunch = document.getElementById('lunch');
let dinner = document.getElementById('dinner');

breakfast.addEventListener('click',function(){
    menuList.innerHTML = '';
    let breakfastMenu = menus.filter((menu) => menu.category === 'Breakfast');
    breakfastMenu.forEach(function(menu){
        let item= document.createElement('li');
        menuList.appendChild(item);

        let image = document.createElement('img');
        image.src = menu.image;
        item.appendChild(image);

        let head= document.createElement('h4');
        head.innerHTML = menu.title;
        item.appendChild(head);

        let description = document.createElement('p');
        description.innerHTML = menu.description;
        item.appendChild(description);

    });
});

lunch.addEventListener('click',function(){
    menuList.innerHTML = '';
    let lunchMenu = menus.filter((menu) => menu.category === 'Lunch');
    lunchMenu.forEach(function(menu){
        let item= document.createElement('li');
        // item.innerHTML = menu.title;
        menuList.appendChild(item);

        let image = document.createElement('img');
        image.src = menu.image;
        item.appendChild(image);

        let head= document.createElement('h4');
        head.innerHTML = menu.title;
        item.appendChild(head);

        let description = document.createElement('p');
        description.innerHTML = menu.description;
        item.appendChild(description);
        
    });
});
dinner.addEventListener('click',function(){
    menuList.innerHTML = '';

    let dinnerMenu = menus.filter((menu) => menu.category === 'Dinner');
    dinnerMenu.forEach(function(menu){
        let item= document.createElement('li');
        // item.innerHTML = menu.title;
        menuList.appendChild(item);

        let image = document.createElement('img');
        image.src = menu.image;
        item.appendChild(image);

        let head = document.createElement('h4');
        head.innerHTML = menu.title;
        item.appendChild(head);

        let description = document.createElement('p');
        description.innerHTML = menu.description;
        item.appendChild(description);

        
    });
});

displayMenus();