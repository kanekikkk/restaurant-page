import facebook from './images/facebook.svg';
import instagram from './images/instagram.svg';
import twitter from './images/twitter.svg';
import gmail from './images/gmail.svg';

export default function footerHeader(){

    const footer = document.createElement('footer');
    const mainDiv = document.createElement('div');
    const content = document.getElementById('content');

    // header
    mainDiv.classList.add('container');
    content.appendChild(mainDiv);

    const nav = document.createElement('nav');

    const ul = document.createElement('ul');

    const menu = document.createElement('li');
    menu.setAttribute('id','menu');
    menu.innerHTML = 'Menu';

    const home = document.createElement('li');
    home.setAttribute('id','home');
    home.innerHTML = 'Home';

    const About = document.createElement('li');
    About.setAttribute('id','about');
    About.innerHTML = 'About';

    mainDiv.appendChild(nav);

    ul.classList.add('flex');
    ul.appendChild(menu);
    ul.appendChild(home);
    ul.appendChild(About);
    nav.appendChild(ul);

    // footer
    const footerDiv = document.createElement('div');
    footer.appendChild(footerDiv);
    content.appendChild(footer);

    const footerContainer = document.querySelector('footer');

    const logos = document.createElement('ul');
    logos.classList.add('logos');
    footerContainer.appendChild(logos);

    const facebookLi = document.createElement('li');
    facebookLi.classList.add('facebook');
    let img = document.createElement('img');
    img.classList.add('logo');
    img.src = facebook;
    facebookLi.appendChild(img);
    logos.appendChild(facebookLi);

    const twitterLi = document.createElement('li');
    twitterLi.classList.add('twitter');
    img = document.createElement('img');
    img.classList.add('logo');
    img.src = twitter;
    twitterLi.appendChild(img);
    logos.appendChild(twitterLi);

    const gmailLi = document.createElement('li');
    gmailLi.classList.add('gmail');
    img = document.createElement('img');
    img.classList.add('logo');
    img.src = gmail;
    gmailLi.appendChild(img);
    logos.appendChild(gmailLi);

    const instagramLi = document.createElement('li');
    instagramLi.classList.add('instagram');
    img = document.createElement('img');
    img.classList.add('logo');
    img.src = instagram;
    instagramLi.appendChild(img);
    logos.appendChild(instagramLi);
    
}