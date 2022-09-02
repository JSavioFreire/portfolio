$(function(){

    var projetos = $('#oqfaco #port .projeto'); //as fotos
    var quantprojetos = projetos.length;        //quantidade de fotos
    var imgatual = 0;
    
    
    console.log(quantprojetos)

    mudafoto(imgatual);

    function mudafoto(el){
            projetos.eq(el).fadeIn(1000);
            el++
            projetos.eq(el).fadeIn(1000);
            el++
            projetos.eq(el).fadeIn(1000);  


    

}
})