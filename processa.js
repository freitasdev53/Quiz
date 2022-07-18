$(function(e){
    $("#questionario").on("submit",function(e){
        e.preventDefault();
        var pontuacao = 0;
        var perguntas = {
            P1: $('input[name="p1"]:checked').val(),
            P2: $('input[name="p2"]:checked').val(),
            P3: $('input[name="p3"]:checked').val(),
            P4: $('input[name="p4"]:checked').val(),
            P5: $('input[name="p5"]:checked').val(),
        }
        //PERGUNTA 1
        if(perguntas.P1 == 1){
            pontuacao = 20;
        }else{
            pontuacao = 0;
        }
        //PERGUNTA 2
        if(perguntas.P2 == 2){
        pontuacao = pontuacao + 20;
        }else{
        pontuacao = pontuacao + 0;
        }
        //PERGUNTA 3
        if(perguntas.P3 == 1){
        pontuacao = pontuacao + 20;;
        }else{
        pontuacao = pontuacao + 0;
        }
        //PERGUNTA 4
        if(perguntas.P4 == 4){
        pontuacao = pontuacao + 20;;
        }else{
        pontuacao = pontuacao + 0;
        }
        //PERGUNTA 5
        if(perguntas.P5 == 2){
        pontuacao = pontuacao + 20;;
        }else{
        pontuacao = pontuacao + 0;
        }
        alert("Sua pontuação foi de: " + pontuacao);
       //

    })
})
