

var myele;
function selectallhtmlelement()
{
    myele = document.querySelectorAll("input,img,hr,h1");
    console.log(myele);
}


selectallhtmlelement();


// myele[0].addEventListener("click",()=>{
//     myele[0].setAttribute("type","button");
//     myele[0].setAttribute("title","username");
//     myele[0].setAttribute("value","submit");
//     msg();
// })

// function msg()
// {
//     var a = prompt("enter color");
//     document.bgColor=a;
// }


myele[0].addEventListener("input",()=>{

    var inputvalue = myele[0].value;
    console.log(inputvalue);
    if(inputvalue=="red")
    {
         myele[0].setAttribute("type","button");
    myele[0].setAttribute("title","username");
    myele[0].setAttribute("value","submit");
    msg();

    }
    

   
})

function msg()
{
    var a = prompt("enter color");
    document.bgColor=a;
}


myele[1].addEventListener("click",()=>{
    myele[1].innerText=" this is <span>my new</span>text <ul> <li>Home</li></ul>";
    // myele[1].innerHTML=" this is <span>my new</span>text <ul> <li>Home</li></ul>";
})



var i=0;

myele[2].setAttribute("src","https://m.media-amazon.com/images/I/81U6-9Mx2bL._AC_UF1000,1000_QL80_.jpg");
myele[2].addEventListener("click",()=>{
myele[2].setAttribute("width","500");
// myele[2].classList.toggle("first");
// myele[0].setAttribute("size","80");
if(i==0)
{
    myele[0].setAttribute("size","80");
    myele[2].classList.add("first");
    i++;
}
else
{
    myele[0].removeAttribute("size");
    myele[2].classList.remove("first");
    i=0;
}

});


myele[3].addEventListener("click",()=>{
    myele[3].remove();
})

