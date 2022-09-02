

var text = document.querySelector('#painel h2');

function escrevendo(el){
    var nomearray = el.innerHTML.split('');
    el.innerHTML= '';
    setTimeout(() => {
        
    nomearray.forEach((letra,i) => {
        setTimeout(() => {
            el.innerHTML += letra
        }, 50 * i);
        
    });
    }, 2000);
}


escrevendo(text);