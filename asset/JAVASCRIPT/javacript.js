// FUNÇÃO MENU MOBILE
window.onload=function(){
    document.querySelector(".fechar").addEventListener("click", function(){
        if(document.querySelector("#Menu ul").style.display == 'flex'){
            document.querySelector("#Menu ul").style.display = 'none';
        }else{
            document.querySelector("#Menu ul").style.display = 'flex';
        }
    });
};




		



