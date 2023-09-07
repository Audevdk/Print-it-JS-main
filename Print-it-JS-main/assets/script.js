const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
// test nombre d'images
console.log(slides.length)

//selectionne la bannière
const banner = document.getElementById("banner")
console.log(banner)

//gestion des flèches
const arrow_left = document.querySelector(".arrow_left");
arrow_left.addEventListener("click", () => {	
	changeSlide(-1)
    console.log(arrow_left)
});

const arrow_right = document.querySelector(".arrow_right");
arrow_right.addEventListener("click", () => { 
	changeSlide(1)
    console.log(arrow_right)
});
//variable numéro slide
let numeroSlide = 0;

changeSlide(numeroSlide);

//mise en place du slide
function changeSlide(direction){
numeroSlide = numeroSlide + direction;
if(numeroSlide > slides.length -1)
   numeroSlide = 0
if(numeroSlide < 0)
	numeroSlide = slides.length -1;
document.querySelector(".banner-img").src = './assets/images/slideshow/' + slides[numeroSlide]['image'];
document.querySelector("#banner p").innerHTML = slides[numeroSlide].tagLine; 

//mise en place des bullets points
const bulletspoint = document.querySelector(".dots");
bulletspoint.innerHTML = "";
for (let i = 0; i < slides.length; i++ ){
	const bullet = document.createElement("p");
	bulletspoint.appendChild(bullet);
	bullet.classList.add("dot");
if (i == numeroSlide){
	bullet.classList.add("dot_selected");
}
}
}



