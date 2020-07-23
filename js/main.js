
function restore(){
        // Muestro las miniaturas por defecto
    document.getElementById('box-white-shoes-2').style.display="none";
    document.getElementById('box-next-shoes-2').style.display="flex";
    document.getElementById('box-white-shoes-3').style.display="none";
    document.getElementById('box-next-shoes-3').style.display="flex";
    document.getElementById('box-white-shoes-4').style.display="none";
    document.getElementById('box-next-shoes-4').style.display="flex";
}

function show1(){
        // Muestro las miniaturas por defecto
    restore();
        // Imagen de zapatilla principal
    document.getElementById('box-shoes').style.display="block";
    document.getElementById('box-shoes-2').style.display="none";
    document.getElementById('box-shoes-3').style.display="none";
    document.getElementById('box-shoes-4').style.display="none";
        // Modelo de zapatilla
    document.getElementById('shoes-model').style.display="block";
    document.getElementById('shoes-model-2').style.display="none";
    document.getElementById('shoes-model-3').style.display="none";
        // Descripción del modelo
    document.getElementById('description-shoes').style.display="block";
    document.getElementById('description-shoes-2').style.display="none";
    document.getElementById('description-shoes-3').style.display="none";
    document.getElementById('description-shoes-4').style.display="none";
        // Precio
    document.getElementById('price').style.display="block";
    document.getElementById('price-2').style.display="none";
    document.getElementById('price-3').style.display="none";
    }

function show2(){
        // Muestro zapatilla blanca como miniatura
    restore();    
    document.getElementById('box-white-shoes-2').style.display="flex";
    document.getElementById('box-next-shoes-2').style.display="none";
        // Imagen de zapatilla principal
    document.getElementById('box-shoes').style.display="none";
    document.getElementById('box-shoes-2').style.display="block";
    document.getElementById('box-shoes-3').style.display="none";
    document.getElementById('box-shoes-4').style.display="none";
        // Modelo de zapatilla
    document.getElementById('shoes-model').style.display="none";
    document.getElementById('shoes-model-2').style.display="block";
    document.getElementById('shoes-model-3').style.display="none";
        // Descripción del modelo
    document.getElementById('description-shoes').style.display="none";
    document.getElementById('description-shoes-2').style.display="block";
    document.getElementById('description-shoes-3').style.display="none";
    document.getElementById('description-shoes-4').style.display="none";
        // Precio
    document.getElementById('price').style.display="none";
    document.getElementById('price-2').style.display="block";
    document.getElementById('price-3').style.display="none";
}

function show3(){
        // Muestro zapatilla blanca como miniatura
    restore();
    document.getElementById('box-white-shoes-3').style.display="flex";
    document.getElementById('box-next-shoes-3').style.display="none";
        // Imagen de zapatilla principal
    document.getElementById('box-shoes').style.display="none";
    document.getElementById('box-shoes-2').style.display="none";
    document.getElementById('box-shoes-3').style.display="block";
    document.getElementById('box-shoes-4').style.display="none";
        // Modelo de zapatilla
    document.getElementById('shoes-model').style.display="none";
    document.getElementById('shoes-model-2').style.display="none";
    document.getElementById('shoes-model-3').style.display="block";
        // Descripción del modelo
    document.getElementById('description-shoes').style.display="none";
    document.getElementById('description-shoes-2').style.display="none";
    document.getElementById('description-shoes-3').style.display="block";
    document.getElementById('description-shoes-4').style.display="none";
        // Precio
    document.getElementById('price').style.display="none";
    document.getElementById('price-2').style.display="none";
    document.getElementById('price-3').style.display="block";
}


function show4(){
        // Muestro zapatilla blanca como miniatura
    restore();
    document.getElementById('box-white-shoes-4').style.display="flex";
    document.getElementById('box-next-shoes-4').style.display="none";
        // Imagen de zapatilla principal
    document.getElementById('box-shoes').style.display="none";
    document.getElementById('box-shoes-2').style.display="none";
    document.getElementById('box-shoes-3').style.display="none";
    document.getElementById('box-shoes-4').style.display="block";
        // Modelo de zapatilla
    document.getElementById('shoes-model').style.display="block";
    document.getElementById('shoes-model-2').style.display="none";
    document.getElementById('shoes-model-3').style.display="none";
        // Descripción del modelo
    document.getElementById('description-shoes').style.display="none";
    document.getElementById('description-shoes-2').style.display="none";
    document.getElementById('description-shoes-3').style.display="none";
    document.getElementById('description-shoes-4').style.display="block";
        // Precio
    document.getElementById('price').style.display="block";
    document.getElementById('price-2').style.display="none";
    document.getElementById('price-3').style.display="none";
}