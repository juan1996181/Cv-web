let pantalla = window.innerWidth;
console.log(pantalla);
var contador = 1;
var menu = document.getElementById("menu");
var nav = document.getElementById("main")
menu.addEventListener('click', function(e){

	console.log("me has presionado")
nav.style.transition ="all ease-in-out .7s";

    if(contador == 1){

        nav.style.left = "0%";
        contador = 0;
    }else{
        nav.style.left = "-100%";
    contador = 1;
    }

});
menu.addEventListener('click',function(){
    menu.classList.toggle('menu-open')
});
function aparece(){
    linea.style.transition ="all ease-in-out .7s";
 
       linea.style.left = "0%";
}
function desaparece(){
    linea.style.left = "-100%";
}
var linea = document.getElementById('linea');
var linea2 = document.getElementById('linea2');
var prueba = document.getElementById('prueba');
var prueba2 = document.getElementById('contacto');
prueba.addEventListener('mouseover',function(){
    aparece();
});
prueba.addEventListener('mouseleave',function(){
    desaparece();
})/**/
prueba2.addEventListener('mouseover',function(){
    linea2.style.transition ="all ease-in-out .7s";
 
    linea2.style.left = "0%";
});
prueba2.addEventListener('mouseleave',function(){
    linea2.style.left = "-100%";
})/**/
/** FORMULARIO */
let contadorxd = 1;
var formulario = document.getElementById('form');
contacto.addEventListener('click', function(e){
    
    e.preventDefault();
	console.log("me has presionado")
formulario.style.transition ="all ease-in-out .7s";
    if(window.innerWidth < 884){
        if(contadorxd == 1){
            //formulario.style.top= "50%";
            formulario.style.position = "fixed";
            formulario.style.left = "5%";
            contadorxd = 0;
        }else{
            formulario.style.left = "-120%";
        contadorxd = 1;
        }
        
    }else{
        if(contadorxd == 1){
            formulario.style.position = "fixed";
            formulario.style.left = "30%";
            //nav.style.left = "-100%";
            contadorxd = 0;
        }else{
            formulario.style.left = "-120%";
        contadorxd = 1;
        }
    }
    

});
var cerrar = document.getElementById('cerrar');
cerrar.addEventListener('click',function(){
        if(contadorxd == 0){
            formulario.style.left = "-120%";
            contadorxd = 1;
        }
        
})
var ruta = null;
var intervalo = null;
var posiscroll = 0;
var destinoScroll = 0;
/** SCROLL*/
const botones = document.querySelectorAll('.menu nav a');

console.log(botones);
for(var i = 0; i < botones.length; i++){
    botones[i].addEventListener('click', desplazamiento);
}
function desplazamiento (ruta){
   

    ruta.preventDefault();
		
		ruta = ruta.target.getAttribute("href");

        destinoScroll = document.querySelector(ruta).offsetTop;
		console.log("destinoScroll", destinoScroll);

		intervalo = setInterval(function(){

			if(posiscroll < destinoScroll){

				posiscroll += 100;

				if(posiscroll >= destinoScroll){

					posiscroll = destinoScroll;

					clearInterval(intervalo)

				}

			}else{

				posiscroll -= 100;

				if(posiscroll <= destinoScroll){

					posiscroll = destinoScroll;

					clearInterval(intervalo)

				}

			}

			window.scrollTo(0, posiscroll);

		},50)

		

	}
