export default function menu(){

    const mainDiv = document.querySelector('.container');

    const menuPageDiv = document.createElement('div');
    menuPageDiv.setAttribute('id','menuPageDiv');
    menuPageDiv.classList.add('text-Inside-Image'); 
    
    let div = document.createElement('div');
    div.setAttribute('id','firstCourse');
    div.classList.add('text-Inside-Image');

    let h1 =  document.createElement('h1');
    h1.innerHTML='FIRST COURSE';
    div.appendChild(h1);

    let h4 = document.createElement('h4');
    h4.innerHTML='BENGALI BEET CHOP';
    div.appendChild(h4);
    
    let p = document.createElement('p');
    p.innerHTML='Winter Vegetables, Potatoes, Kasundi Mayo (V)*';
    div.appendChild(p);
    
    h4 = document.createElement('h4');
    h4.innerHTML='SHRIMP KOLIWADA';
    div.appendChild(h4);
    
    p = document.createElement('p');
    p.innerHTML='Popcorn Style Fritters, Pickled Mango Sauce (GF)';
    div.appendChild(p);

    menuPageDiv.appendChild(div);


    div = document.createElement('div');
    div.setAttribute('id','mainCourse');
    div.classList.add('text-Inside-Image');

    h1 =  document.createElement('h1');
    h1.innerHTML='MAIN COURSE';
    div.appendChild(h1);

    h4 = document.createElement('h4');
    h4.innerHTML='ANDHRA VEGETABLE CURRY';
    div.appendChild(h4);
    
    p = document.createElement('p');
    p.innerHTML='Seasonal Vegetables, Gongura Leaves, Coconut (V, GF)';
    div.appendChild(p);
    
    h4 = document.createElement('h4');
    h4.innerHTML='VINDALOO BBQ PORK RIBS';
    div.appendChild(h4);
    
    p = document.createElement('p');
    p.innerHTML='Sticky Chili Glaze, Mango, Pickled Onion (GF)';
    div.appendChild(p);

    menuPageDiv.appendChild(div);

    div = document.createElement('div');
    div.setAttribute('id','dessert');
    div.classList.add('text-Inside-Image');

    h1 =  document.createElement('h1');
    h1.innerHTML='TAKEAWAY DESSERT';
    div.appendChild(h1);

    h4 = document.createElement('h4');
    h4.innerHTML='Cookie';
    div.appendChild(h4);
    
    p = document.createElement('p');
    p.innerHTML='Chocolate Dipped Pistachio Shortbread Cookies';
    div.appendChild(p);
    

    menuPageDiv.appendChild(div);

    mainDiv.appendChild(menuPageDiv);

}