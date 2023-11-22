var boton = "";
var texto1 = "";
var textoIngles1 = "";
var tituloBoton = "";
let contador = 0;
var comidaIngles = "";
var comidaEspañol = "";
var descEspañol = "";
var descIngles = "";
var comidaEspañolDescripcion = "";
var comidaInglesDescripcion = "";
var CategoriaMenuEspañol = "";
var CategoriaMenuIngles = "";
var extraEspañol = "";
var extraIngles = "";
var TablaBebidasEspañol = "";
var TablaBebidasIngles = "";

var FuncionalesEspañol = "";
var FuncionalesIngles = "";
var lecheingles = "";
var lecheEspañol = "";
var descBebidasClientesEspañol = "";
var descBebidasClientesIngles = "";
var tablaBebidasCalientesEspañol = "";
var tablaBebidasCalientesIngles = "";
var MenuCommmidaEspañol = "";
var MenuCommmidaIngles = "";
var tituloMenuEsp = "";
var tituloMenuIng = "";
var footerEsp = "";
var footerIng = "";
var gaseosaEspañol = "";
var gaseosaIngles = "";
var horarioEspañol = "";
var horarioIngles = "";
var opcionesEsp = "";
var opcionesIng = "";
var centradoEsp = "";
var centradoIng = "";
var textoDelMenuInicio = "";
var textoDelMenuNosotros = "";
var iconoWaseFooter = "";
var iconoWaseFooterIngles = "";
var direccionFooter = "";
var horafooter = "";
var botonRegresar = "";
var nosotrosEspa = "";
var nosotrosIngles = "";
var tituloNosotros = "";

var agua = "";


let colspan = 0;


document.addEventListener('DOMContentLoaded', function () {
    textoDelMenuInicio = document.getElementById("textoDelMenu");
    textoDelMenuNosotros = document.getElementById("textoDelMenuNosotros");

    boton = document.getElementById("boton-ingles");
    texto1 = document.querySelector(".texto-principal");// es el texto principal del index
    textoIngles1 = document.getElementById("ingles1");// es el texto principal del index pero en ingles

    tituloMenuEsp = document.getElementById("titulo-menu");
    tituloMenuIng = document.getElementById("titulo-menu-ingles");

    tituloNosotros = document.getElementById("tituloNosotros");
    nosotrosEspa = document.getElementById("nosotrosEspa");
    nosotrosIngles = document.getElementById("nosotrosIngles");
    //el menu principal
    MenuCommmidaEspañol = document.querySelectorAll(".MenuCommmidaEspañol");
    MenuCommmidaIngles = document.querySelectorAll(".MenuCommmidaIngles");

    comidaEspañol = document.querySelectorAll(".comidaEspañol");//es toda la comida es español
    comidaIngles = document.querySelectorAll(".comida-ingles");//es toda la comida es ingles

    descEspañol = document.querySelectorAll(".descEspa");//es toda la comida es español
    descIngles = document.querySelectorAll(".descIngles");//es toda la comida es ingles

    //la parte de pollo
    comidaEspañolDescripcion = document.querySelectorAll(".comidaEspañol-descripcion");
    comidaInglesDescripcion = document.querySelectorAll(".comidaIngles-descripcion");

    //la Categoria del menu
    CategoriaMenuEspañol = document.querySelectorAll(".CategoriaMenu-español");
    CategoriaMenuIngles = document.querySelectorAll(".CategoriaMenu-ingles");

    //extras
    extraEspañol = document.querySelectorAll(".extraEspañol");
    extraIngles = document.querySelectorAll(".extraIngles");

    //bebidas
    TablaBebidasEspañol = document.querySelectorAll(".tablaBebidasEspañol");
    TablaBebidasIngles = document.querySelectorAll(".tablaBebidasIngles");

    agua = document.getElementById("agua");

    //tablas de bebidas calientes
    tablaBebidasCalientesEspañol = document.querySelector(".tablaBebidasCalientesEspañol");
    tablaBebidasCalientesIngles = document.querySelector(".tablaBebidasCalientesIngles");

    //funcionalidades
    FuncionalesEspañol = document.querySelectorAll(".FuncionalesEspañol");
    FuncionalesIngles = document.querySelectorAll(".FuncionalesIngles");

    lecheingles = document.querySelector(".lecheIngles");
    lecheEspañol = document.querySelector(".lecheEspañol");

    //horario
    horarioEspañol = document.querySelector(".horarioEspañol");
    horarioIngles = document.querySelector(".horarioIngles");

    //footer
    footerEsp = document.querySelectorAll(".footerEsp");
    footerIng = document.querySelectorAll(".footerIng");

    iconoWaseFooter = document.getElementById("iconoWase");
    iconoWaseFooterIngles = document.getElementById("iconoWaseIngles");

    direccionFooter = document.getElementById("direccionFooter");

    horafooter = document.getElementById("horafooter");
    botonRegresar = document.getElementById("botonRegresar");


    //gaseosas
    gaseosaEspañol = document.querySelector(".gaseosa-español");
    gaseosaIngles = document.querySelector(".gaseosa-Ingles");

    //las opciones de disponibilidad
    opcionesEsp = document.querySelector(".opcionesEspañol");
    opcionesIng = document.querySelector(".opcionesIngles");

    //texto centrado
    centradoEsp = document.querySelector(".centradoEsp");
    centradoIng = document.querySelector(".centradoIng");



    cargarPantalla();
});

function inicio() {
    window.location.href = "index.html"; // Reemplaza "index.html" con la ruta correcta de tu página de inicio
}
//cargar la traducción a hamburguesas




document.addEventListener('DOMContentLoaded', function () {

    boton.addEventListener("click", function () {
        // 0 es que toco el boton y 1 es lo toco pero para cambiar el ingles al español
        if (contador == 0) {
            translate2();
            regMemoriaLocal();
            contador = 1;
        } else {
            traducirEspañol();
            contador = 0;
        }
    });
});



/*function ejecutar() {
    if (boton.checked) {
        translate2();
        regMemoriaLocal();
    } else {
        traducirEspañol();
    }


}*/

function translate2() {
    //texto del menu del bootstrap
    textoDelMenuInicio.innerHTML = "Home ";
    textoDelMenuNosotros.innerHTML = "About us"; //la seccion del menu de Nosotros
    
    if (tituloNosotros) {
        tituloNosotros.innerHTML = "About us";
        nosotrosEspa.style.display = "none";
        nosotrosIngles.style.display = "block";

    }

    //index
    texto1.style.display = "none";
    textoIngles1.style.display = "grid";
    boton.innerHTML = "Español";

    //titulo menu
    if (tituloMenuEsp != null) {
        tituloMenuEsp.style.display = "none";
        tituloMenuIng.style.display = "grid";
    }


    //el menu principal
    MenuCommmidaEspañol.forEach(menuEsp => {
        menuEsp.style.display = "none";
    });

    MenuCommmidaIngles.forEach(menuIng => {
        menuIng.style.display = "flex";
    });


    //toda la comida en ingles
    comidaEspañol.forEach(comida => {
        comida.style.display = "none";
    });

    comidaIngles.forEach(comida => {
        comida.style.display = "flex";
    });

    //toda la descripcion de la comida en ingles y español


    comidaEspañolDescripcion.forEach(descEspañol => {
        descEspañol.style.display = "none";
    });
    comidaInglesDescripcion.forEach(descIngles => {
        descIngles.style.display = "block";
    });

    //categoria del menu
    CategoriaMenuEspañol.forEach(categoriaEsp => {
        categoriaEsp.style.display = "none";
    });
    CategoriaMenuIngles.forEach(categoriaIng => {
        categoriaIng.style.display = "block";
    });


    //extras
    extraEspañol.forEach(extraEspañol => {
        extraEspañol.style.display = "none";
    });

    extraIngles.forEach(extraIngles => {
        extraIngles.style.display = "flex";
    });

    //las opciones de disponibilidad
    if (opcionesEsp != null) {
        opcionesEsp.style.display = "none";
        opcionesIng.style.display = "grid";
    }

    //bebidas
    TablaBebidasEspañol.forEach(bebidaEsp => {
        bebidaEsp.style.display = "none";
    });

    TablaBebidasIngles.forEach(bebidaIng => {
        bebidaIng.style.display = "table";
    });
    if (agua) {
        agua.innerHTML = "Bottled water";

    }

    //Funcionales
    FuncionalesEspañol.forEach(funcEsp => {
        funcEsp.style.display = "none";
    });

    FuncionalesIngles.forEach(funcIng => {
        funcIng.style.display = "flex";
    });

    //obtener el colspan de las bebidas calientes

    if (tablaBebidasCalientesEspañol != null) {
        tablaBebidasCalientesEspañol.style.display = "none";
        tablaBebidasCalientesIngles.style.display = "table";

    }


    if (lecheEspañol != null) {
        lecheEspañol.style.display = "none";
        lecheingles.style.display = "grid";
    }
    //gaseosa
    if (gaseosaEspañol != null) {
        gaseosaEspañol.style.display = "none";
        gaseosaIngles.style.display = "grid";
    }

    //horario
    if (horarioEspañol != null) {
        horarioEspañol.style.display = "none";
        horarioIngles.style.display = "grid";
    }

    //horario
    if (centradoEsp != null) {
        centradoEsp.style.display = "none";
        centradoIng.style.display = "grid";
    }


    //footer
    footerEsp.forEach(footerEsp => {
        footerEsp.style.display = "none";
    });

    footerIng.forEach(footerIng => {
        footerIng.style.display = "grid";
    });

    iconoWaseFooter.style.display = "none";
    iconoWaseFooterIngles.style.display = "flex";
    direccionFooter.innerHTML = "80 meters west of San Rafael Arcangel Parish, Atenas, Costa Rica";
    horafooter.innerHTML = "8:00 - 20:30";
    if (botonRegresar != null) {
        botonRegresar.innerText = "<- Return to homepage";

    }


}


function cargarPantalla() {
    //si existe el localstorage quiere decir que el escogió ingles y que salio de la pagina en formato ingles
    if (typeof (Storage) !== "undefined") {
        var memRegistro = JSON.parse(localStorage.getItem("memRegistro"));

        if (memRegistro != null) {
            //texto del menu del bootstrap
            textoDelMenuInicio.innerHTML = "Home";
            textoDelMenuNosotros.innerHTML = "About us";

            if (tituloNosotros) {
                tituloNosotros.innerHTML = "About us";
                nosotrosEspa.style.display = "none";
                nosotrosIngles.style.display = "block";

            }

            //index
            texto1.style.display = "none";
            textoIngles1.style.display = "grid";
            if (boton) {
                boton.innerHTML = "Español";

            }
            contador = memRegistro[1];



            //titulo menu
            if (tituloMenuEsp != null) {
                tituloMenuEsp.style.display = "none";
                tituloMenuIng.style.display = "grid";
            }



            //el menu principal
            MenuCommmidaEspañol.forEach(menuEsp => {
                menuEsp.style.display = "none";
            });

            MenuCommmidaIngles.forEach(menuIng => {
                menuIng.style.display = "flex";
            });



            //toda la comida en ingles
            comidaEspañol.forEach(comida => {
                comida.style.display = "none";
            });

            comidaIngles.forEach(comida => {
                comida.style.display = "flex";
            });

            //toda la descripcion de la comida en ingles y español


            //nueva descripcion
            comidaEspañolDescripcion.forEach(descEspañol => {
                descEspañol.style.display = "none";
            });
            comidaInglesDescripcion.forEach(descIngles => {
                descIngles.style.display = "block";
            });


            //categoria del menu
            CategoriaMenuEspañol.forEach(categoriaEsp => {
                categoriaEsp.style.display = "none";
            });
            CategoriaMenuIngles.forEach(categoriaIng => {
                categoriaIng.style.display = "block";
            });

            //extras
            extraEspañol.forEach(extraEspañol => {
                extraEspañol.style.display = "none";
            });

            extraIngles.forEach(extraIngles => {
                extraIngles.style.display = "flex";
            });

            //las opciones de disponibilidad
            if (opcionesEsp != null) {
                opcionesEsp.style.display = "none";
                opcionesIng.style.display = "grid";
            }

            //bebidas
            TablaBebidasEspañol.forEach(bebidaEsp => {
                bebidaEsp.style.display = "none";
            });

            TablaBebidasIngles.forEach(bebidaIng => {
                bebidaIng.style.display = "table";
            });


            if (agua) {
                agua.innerHTML = "Bottled water";
            }

            //Funcionales
            FuncionalesEspañol.forEach(funcEsp => {
                funcEsp.style.display = "none";
            });

            FuncionalesIngles.forEach(funcIng => {
                funcIng.style.display = "flex";
            });

            //obtener el colspan de las bebidas calientes

            if (tablaBebidasCalientesEspañol != null) {
                tablaBebidasCalientesEspañol.style.display = "none";
                tablaBebidasCalientesIngles.style.display = "table";
            }




            if (lecheEspañol != null) {
                lecheEspañol.style.display = "none";
                lecheingles.style.display = "grid";
            }

            //gaseosa
            if (gaseosaEspañol != null) {
                gaseosaEspañol.style.display = "none";
                gaseosaIngles.style.display = "grid";
            }

            //horario
            if (horarioEspañol != null) {
                horarioEspañol.style.display = "none";
                horarioIngles.style.display = "grid";
            }

            //horario
            if (centradoEsp != null) {
                centradoEsp.style.display = "none";
                centradoIng.style.display = "grid";
            }

            //footer
            footerEsp.forEach(footerEsp => {
                footerEsp.style.display = "none";
            });

            footerIng.forEach(footerIng => {
                footerIng.style.display = "grid";
            });

            iconoWaseFooter.style.display = "none";
            iconoWaseFooterIngles.style.display = "flex";
            direccionFooter.innerHTML = "80 meters west of San Rafael Arcangel Parish, Atenas, Costa Rica";
            horafooter.innerHTML = "8:00 - 20:30";
            if (botonRegresar != null) {
                botonRegresar.innerText = "<- Return to homepage";

            }


        }
    }
}

function regMemoriaLocal() {
    if (typeof (Storage) !== "undefined") {

        var memRegistro = JSON.parse(localStorage.getItem("memRegistro"));
        var arreglo = new Array();
        if (memRegistro == null) {
            arreglo[0] = textoIngles1.innerHTML;
            arreglo[1] = 1;

        } else {
            arreglo = memRegistro;
            arreglo[0] = textoIngles1.innerHTML;
            arreglo[1] = 1;


        }
        localStorage.setItem("memRegistro", JSON.stringify(arreglo));// el memRegistro es como el id de ese arreglo que se esta guardando

    }



}

function traducirEspañol() {
    //limpia el local
    localStorage.clear();

    //texto del menu del bootstrap
    textoDelMenuInicio.innerHTML = "Inicio";
    textoDelMenuNosotros.innerHTML = "Nosotros";


    if (tituloNosotros) {
        tituloNosotros.innerHTML = "Nosotros";
        nosotrosEspa.style.display = "block";
        nosotrosIngles.style.display = "none";

    }

    //index
    texto1.style.display = "grid";
    textoIngles1.style.display = "none";
    boton.innerHTML = "English";

    //titulo menu
    if (tituloMenuEsp != null) {
        tituloMenuEsp.style.display = "grid";
        tituloMenuIng.style.display = "none";
    }




    //el menu principal
    MenuCommmidaEspañol.forEach(menuEsp => {
        menuEsp.style.display = "flex";
    });

    MenuCommmidaIngles.forEach(menuIng => {
        menuIng.style.display = "none";
    });

    //toda la comida en ingles
    comidaEspañol.forEach(comida => {
        comida.style.display = "flex";
    });

    comidaIngles.forEach(comida => {
        comida.style.display = "none";
    });

    //toda la descripcion de la comida en ingles y español
    //nueva descripcion 
    comidaEspañolDescripcion.forEach(descEspañol => {
        descEspañol.style.display = "block";
    });
    comidaInglesDescripcion.forEach(descIngles => {
        descIngles.style.display = "none";
    });


    //categoria del menu
    CategoriaMenuEspañol.forEach(categoriaEsp => {
        categoriaEsp.style.display = "block";
    });
    CategoriaMenuIngles.forEach(categoriaIng => {
        categoriaIng.style.display = "none";
    });

    //extras
    extraEspañol.forEach(extraEspañol => {
        extraEspañol.style.display = "flex";
    });

    //las opciones de disponibilidad
    if (opcionesEsp != null) {
        opcionesEsp.style.display = "grid";
        opcionesIng.style.display = "none";
    }

    extraIngles.forEach(extraIngles => {
        extraIngles.style.display = "none";
    });

    //bebidas
    TablaBebidasEspañol.forEach(bebidaEsp => {
        bebidaEsp.style.display = "table";
    });

    TablaBebidasIngles.forEach(bebidaIng => {
        bebidaIng.style.display = "none";
    });

    if (agua) {
        agua.innerHTML = "Agua";
    }



    //Funcionales
    FuncionalesEspañol.forEach(funcEsp => {
        funcEsp.style.display = "flex";
    });

    FuncionalesIngles.forEach(funcIng => {
        funcIng.style.display = "none";
    });

    //obtener el colspan de las bebidas calientes

    if (tablaBebidasCalientesEspañol != null) {
        tablaBebidasCalientesEspañol.style.display = "table";
        tablaBebidasCalientesIngles.style.display = "none";
    }



    if (lecheEspañol != null) {
        lecheEspañol.style.display = "grid";
        lecheingles.style.display = "none";
    }

    //gaseosa
    if (gaseosaEspañol != null) {
        gaseosaEspañol.style.display = "grid";
        gaseosaIngles.style.display = "none";
    }

    //horario
    if (horarioEspañol != null) {
        horarioEspañol.style.display = "grid";
        horarioIngles.style.display = "none";
    }

    //horario
    if (centradoEsp != null) {
        centradoEsp.style.display = "grid";
        centradoIng.style.display = "none";
    }

    //footer
    footerEsp.forEach(footerEsp => {
        footerEsp.style.display = "grid";
    });

    footerIng.forEach(footerIng => {
        footerIng.style.display = "none";
    });

    iconoWaseFooter.style.display = "flex";
    iconoWaseFooterIngles.style.display = "none";
    direccionFooter.innerHTML = "80 metros oeste de la Parroquia San Rafael Arcángel, Atenas, Costa Rica";
    horafooter.innerHTML = "8:00 am - 8:30 pm";

    if (botonRegresar != null) {
        botonRegresar.innerText = "<- Regresar al inicio";
    }


}
