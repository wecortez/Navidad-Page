// var saludo = document.getElementById('saludo');
// var onsaludo = document.getElementById('onsaludo');

// var consaludo = 0;

// function saludando(){
//     if(consaludo == 0){
//         saludo.style.display = 'none';
//         consaludo =1;
//     }
//     else{
//         saludo.style.display = 'block';
//         consaludo =0;
//     }
// };

// saludando();

// onsaludo.addEventListener('click', saludando);

$(document).ready(function(){
    var saludo = $('#saludo');
    var onsaludo = $('#onsaludo');
    var lista = $('#Lista');
    var onlista = $('#onLista');
    var despedida = $('#Despedida');
    var ondespedida = $('#onDespedida');
    var navidad = $('#navidad')
    saludo.hide();
    lista.hide();
    despedida.hide();

    onsaludo.on('click',function(){
        if(onsaludo.text().substring(0,1) == '+')
        {
            saludo.slideDown(1000);
            onsaludo.text("- Saludo");
        }
        else{
            saludo.slideUp(1000);
            onsaludo.text("+ Saludo");
        }
    });

    onlista.on('click',function(){
        if(onlista.text().substring(0,1) == '+')
        {
            lista.slideDown(1000);
            onlista.text("- Lista");
        }
        else{
            lista.slideUp(1000);
            onlista.text("+ Lista");
        }
    });

    ondespedida.on('click',function(){
        if(ondespedida.text().substring(0,1) == '+')
        {
            despedida.slideDown(1000);
            ondespedida.text("- Despedida");
        }
        else{
            despedida.slideUp(1000);
            ondespedida.text("+ Despedida");
        }
        
    });

    var ocultartitulos = 1;
    
    $('audio').hide();
    navidad.on('click',function(){
        if(ocultartitulos == 1){
            saludo.slideDown(1000);
            lista.slideDown(2000);
            despedida.slideDown(3000);
            ocultartitulos = 0;
            navidad.css("border-bottom","2px solid red");
            $('audio').trigger('play');
            $('audio').prop('volume',0.1);
            onlista.text("- Lista");
            onsaludo.text("- Saludo");
            ondespedida.text("- Despedida");
        }
        else{
            saludo.slideUp(2500);
            lista.slideUp(1500);
            despedida.slideUp(500);
            ocultartitulos = 1;
            navidad.css("border-bottom","none");
            $('audio').trigger('pause');
            onlista.text("+ Lista");
            onsaludo.text("+ Saludo");
            ondespedida.text("+ Despedida");
        }
    });


});

// var audio = document.getElementById('audio');
// var audionavidad = document.getElementById('navidad');
// audionavidad.addEventListener('click',function(){
//     audio.play();
// })
