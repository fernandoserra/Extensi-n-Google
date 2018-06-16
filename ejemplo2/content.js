console.log("Chrome extension funcionando")

let paragraphs =  document.getElementsByTagName('p')

for (elt of paragraphs){
    elt.style['background-color'] = '#FF00FF';
} 

console.log("informacion del alto del navegador: " + window.innerHeight);