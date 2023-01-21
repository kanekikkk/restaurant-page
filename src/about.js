export default function about(){

    const mainDiv = document.querySelector('.container');

    const aboutPageDiv = document.createElement('div');
    aboutPageDiv.setAttribute('id','aboutPageDiv');
    aboutPageDiv.classList.add('absolute','text-Inside-Image');
    const head = document.createElement('h1');
    head.setAttribute('id','menuH1');
    head.innerHTML = 'About';

    const p = document.createElement('p');
    p.setAttribute('id','menuP');
    p.innerHTML = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

    aboutPageDiv.appendChild(head);
    aboutPageDiv.appendChild(p);
    mainDiv.appendChild(aboutPageDiv);

}