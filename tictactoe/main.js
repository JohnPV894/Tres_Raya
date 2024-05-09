var movimiento = 1;
var juegoAct = true;
$(document).ready(function () {



    $('.test').on('click', function () {
        $('.barra').hide();
        var recibidoCliente = $('.entrada').val();
        var recibidoCliente2 = $('.entrada2').val();
        if (recibidoCliente != "" && recibidoCliente2 != "") {
            $('.array').prepend('<div id="creacion" class="tareas" >' + recibidoCliente+ "</button> </div>")

            $('.array').prepend('<div id="creacion" class="tareas" >' + recibidoCliente2+ "</div>")

           
        }

    });

    
});      

$('table tr td').click(function(){
    var recibidoCliente = $('.entrada').val();
        var recibidoCliente2 = $('.entrada2').val();
    if( $(this).text()== "" && juegoAct){
        
        if (movimiento%2===1) {//para saber quien gana 
            $(this).append("X");
            $(this).css("color","#61892f");
        } else {
            $(this).append("O");
            $(this).css("color","#e85a4f");
        }
        movimiento++;
        if (casosWin()!= 0 && casosWin()!= "" && casosWin()!= " ") {
            if(casosWin()=="X"){
                $('body').append('<div class="winner"> <span>Winner</span>'+recibidoCliente+'</div>');
                $('body').append('<button onclick="location.reload()">Reiniciar</button>');
                $('.winner').css('background-color','#61892f');
                $('button').css('color','#61892f');
                juegoAct=false;
            }else if(casosWin()=="O"){//if(casosWin()=="O")
                $('body').append('<div class="winner"> <span>Winner</span>'+recibidoCliente2+'</div>');
                $('body').append('<button onclick="location.reload()">Reiniciar</button>');
                $('.winner').css('background-color','#e85a4f');
                $('button').css('color','#e85a4f'); 
                juegoAct=false;
            }
            

        };
    };
}
);

function casosWin() {
    cW1 = $('table tr:nth-child(1) td:nth-child(1)').text();
    cW2 = $('table tr:nth-child(1) td:nth-child(2)').text();
    cW3 = $('table tr:nth-child(1) td:nth-child(3)').text();

    cW4 = $('table tr:nth-child(2) td:nth-child(1)').text();
    cW5 = $('table tr:nth-child(2) td:nth-child(2)').text();
    cW6 = $('table tr:nth-child(2) td:nth-child(3)').text();

    cW7 = $('table tr:nth-child(3) td:nth-child(1)').text();
    cW8 = $('table tr:nth-child(3) td:nth-child(2)').text();
    cW9 = $('table tr:nth-child(3) td:nth-child(3)').text();
    
    //columna
    if ((cW1 == cW4)&&(cW4 == cW7)) {
        return cW4;
    }
     if ((cW2 == cW5)&&(cW5 == cW8)) {
        return cW8;
    }
     if ((cW3 == cW6)&&(cW6 == cW9)) {
        return cW9;
    }
    //filas
    if ((cW1 == cW2)&&(cW2 == cW3) ) {
        return cW3;
    }
    if ((cW4 == cW5)&&cW5 == cW6) {
        return cW6;
    }
     if (cW7 == cW8&&cW8 == cW9) {
        return cW9;
    }
    
    //arfil
     if (cW1 == cW5&&cW5 == cW9) {
        return cW9;
    }
     if (cW3 == cW5&&cW5 == cW7) {
        return cW7;
    }
    
    return-1;
    
};
/* function casosWin() {
    cW1 = $('table tr:nth-child(1) td:nth-child(1)').text();
    cW2 = $('table tr:nth-child(1) td:nth-child(2)').text();
    cW3 = $('table tr:nth-child(1) td:nth-child(3)').text();
    cW4 = $('table tr:nth-child(2) td:nth-child(1)').text();
    cW5 = $('table tr:nth-child(2) td:nth-child(2)').text();
    cW6 = $('table tr:nth-child(2) td:nth-child(3)').text();
    cW7 = $('table tr:nth-child(3) td:nth-child(1)').text();
    cW8 = $('table tr:nth-child(3) td:nth-child(2)').text();
    cW9 = $('table tr:nth-child(3) td:nth-child(3)').text();
    
    //columna
    if (cW1 == cW4&&cW4 == cW7) {
        return cW4;
    }
     if (cW2 == cW5&&cW5 == cW8) {
        return cW5;
    }
     if (cW3 == cW6&&cW6 == cW9) {
        return cW9;
    }
    //filas
    if (cW1 == cW2&&cW2 == cW3 ) {
        return cW3;
    }
    if (cW4 == cW5&&cW5 == cW6) {
        return cW6;
    }
     if (cW7 == cW8&&cW8 == cW9) {
        return cW9;
    }
    
    //arfil
     if (cW1 == cW5&&cW5 == cW9) {
        return cW9;
    }
     if (cW3 == cW5&&cW5 == cW7) {
        return cW7;
    }
    
    return-1;
    
};
    */