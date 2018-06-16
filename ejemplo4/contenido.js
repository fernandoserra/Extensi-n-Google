console.log("Chrome extension funcionando reemplazando imagenes")


let filenames=[
    "img1.jpg",
    "img2.jpg",
    "img3.jpg",
    "img4.jpg"
];

let imgs =  document.getElementsByTagName('img');




for (imgElt of imgs){
    let r = Math.floor(Math.random()* filenames.length);
    let file = 'imgs/' + filenames[r];
    let url= chrome.extension.getURL(file);
    imgElt.src=url;

   // console.log(imgElt.src)
    console.log(url);
    //elt.style['background-color'] = '#FF00FF';
} 

