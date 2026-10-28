const link = document.querySelector('a');
console.log(link.getAttribute('href'));
link.setAttribute('title', 'Menu Galeri');
console.log(link.getAttribute('title'));
link.removeAttribute('title');

let baru = document.querySelector('header');
let anakBaruDiHeader1 = document.createElement('h2');
anakBaruDiHeader1.innerHTML = 'Aku baru lahir nich h2';
baru.appendChild(anakBaruDiHeader1);

anakBaruDiHeader1.style.backgroundColor = 'black';
anakBaruDiHeader1.style.fontSize = '100px';
anakBaruDiHeader1.style.color = 'white';
