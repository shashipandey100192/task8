
var myele;
function htmlelements()
{
    // var myele = document.getElementsByTagName("p");
     myele = document.querySelectorAll("p,h1");
    console.log(myele);
}
htmlelements();


function changecontent()
{
myele[0].innerHTML="sdfjhsjfhshf jh sgfjhgs jhfgsfgjhsgjhsgfjhsgfjgsdufj";
}

function msg()
{
    alert("welcome to call function ");
}


myele[1].addEventListener("click",msg);


myele[3].addEventListener("click",function(){
    alert("welcome to ano function");
});


myele[5].addEventListener("click",()=>{
 
    alert("welcome to arrow function");
});


myele[6].addEventListener("click",()=>{
    myele[6].style.color="red";
});


myele[7].addEventListener("click",()=>{
    myele[7].className="first";
});

myele[8].addEventListener("click",()=>{
    myele[8].classList.add("first","second","third","fourth");
});



myele[8].addEventListener("dblclick",()=>{
    myele[8].classList.remove("first","third","fourth");
});













