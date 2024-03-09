var nav=document.querySelector(".navbar");
var elem=document.querySelectorAll(".el");
// nav.classList.remove("navbar");

window.onscroll=()=>{
    // console.log(e);
    scroll();
        
    }
    function scroll(){
        if(document.body.scrollTop > 50 || 
            document.documentElement.scrollTop > 50){
            nav.style.top="0";
        }
        else{
            nav.style.top="-50px";
        }
    }




