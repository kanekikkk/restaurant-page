import './style.css';
import homePage from './homePage.js';
import menuPage from './menuPage.js';
import footerHeader from './footerHeader.js';
import aboutPage from './about.js';
import pageLoader from './pageLoader.js';

footerHeader();
homePage();
 
const menu = document.getElementById('menu');
const home = document.getElementById('home');
const About = document.getElementById('about');

let loadedPage = 'home';




menu.addEventListener('click', function(){

    pageLoader(loadedPage);
    menuPage();
    menu.style.outline = '2px solid white';
    loadedPage = 'menu';

});

home.addEventListener('click', function(){

    pageLoader(loadedPage);
    homePage();
    home.style.outline = '2px solid white';
    loadedPage = 'home';

});

About.addEventListener('click', function(){

    pageLoader(loadedPage);
    aboutPage();
    About.style.outline = '2px solid white';
    loadedPage = 'about';

});



