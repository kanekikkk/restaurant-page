export default function pageLoader(loadedPage){

    const menu = document.getElementById('menu');
    const home = document.getElementById('home');
    const About = document.getElementById('about');

    if(loadedPage === 'menu'){

        let menuPageDiv = document.getElementById('menuPageDiv');
        menu.style.outline = 'none';
        menuPageDiv.remove();

    }else if(loadedPage === 'home'){

        let homePageDiv = document.getElementById('homePageDiv');
        home.style.outline = 'none';
        homePageDiv.remove();

    }else{

        let aboutPageDiv = document.getElementById('aboutPageDiv');
        About.style.outline = 'none';
        aboutPageDiv.remove();

    }

}