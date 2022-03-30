const h1     = document.querySelector('h1');

h1.innerHTML = 'We also love Javascript'


const p          = document.querySelector('p');

p.textContent    = `I am more than love for all programming languages`;

p.style.fontSize ='23px';


p.setAttribute('style', 'color : red');

// p.classList.add('asig');
// p.classList.remove('asig');



const a = document.getElementsByTagName('a');

a[0].style.color          = '#e9e9e9';
a[0].style.fontSize       = '20px';
a[0].style.textDecoration = 'none';
a[0].style.display        = 'inline-block';
a[0].style.padding        = '10px';
a[0].style.backgroundColor= 'black';
a[0].style.borderRadius   = '10px';
a[0].style.marginTop      = '10px';

console.log(a[0]);



