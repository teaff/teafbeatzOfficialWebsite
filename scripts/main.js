// PageOffset
var prevScrollpos = window.pageYOffset;
window.onscroll= function(){
    
    var currentScrollpos = window.pageYOffset;
    if(prevScrollpos > currentScrollpos){
        document.getElementById("nav").style.top="0";
    }else{
        document.getElementById("nav").style.top="-100px";
    }
    prevScrollpos = currentScrollpos;
}