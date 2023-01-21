export default function menu(){

    const mainDiv = document.querySelector('.container');

    const homePageDiv = document.createElement('div');
    homePageDiv.classList.add('absolute','text-Inside-Image');
    homePageDiv.setAttribute('id','homePageDiv');
    mainDiv.appendChild(homePageDiv);

    const h1 = document.createElement('h1');
    h1.innerHTML = 'THE AVIARY';
    h1.classList.add('resturent-name', 'text-Inside-Image');
    homePageDiv.appendChild(h1);

    const h2 = document.createElement('h2');
    h2.innerHTML = 'Where every flavor tells the story of the food.';
    h2.classList.add('resturent-slogan', 'text-Inside-Image');
    homePageDiv.appendChild(h2);

}

