// FUNÇÃO MENU MOBILE
window.onload=function(){
    document.querySelector(".fechar").addEventListener("click", function(){
        if(document.querySelector("#Menu ul").style.display == 'flex'){
            document.querySelector("#Menu ul").style.display = 'none';
        }else{
            document.querySelector("#Menu ul").style.display = 'flex';
            animar_Menu();
            
        }
    });
};


/* ANIAMÇAO SCROLL SUAVEL 
A lógica é simples:

    1 – Identificar o momento em que o usuário clica no link
    2 – Verificar o valor de href do link e encontrar o elemento com este ID na página
    3 – Calcular a distância entre o elemento e o topo da página
    4 – Animar o scroll até o local do elemento.

*/


$('#Menu a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    var id = $(this).attr('href'),
    targetOffset = $(id).offset().top;
    $('html, body').animate({
        scrollTop: targetOffset - 100
    }, 500);

    /* FUNCÇÃO FECHAR MENU AO CLICAR EM UM LINK*/
$('#Menu a[href^="#"]').on('click', function(e){
    e.preventDefault();
    if(document.querySelector("#Menu ul").style.display == 'flex'){
        document.querySelector("#Menu ul").style.display = 'none';
    }
   });

});




/* ANIMAÇÃO DÁ SCROLL*/

















		



