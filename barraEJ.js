$(document).ready(main);

const botonMenu = getElementById("butonIconoMenu")
const imagenBotonMenu = getElementById("imagenMenuIcono")
var contador = 1;

function main(){
    $(".contenedorBoton").click(function(){
        if(contador == 1){
            $(".contenedorMenu").animate({
                left:"0"
            });
            contador = 0;
        }else{
            contador = 1; 
            $(".contenedorMenu").animate({
                left:"-100%"
            });
        }
    });
};

