
var jsuser,jspass;
var errosmsg;
var jsdiscap;
var jsmycap;
var jsicons;

function objload()
{
    jsuser = document.getElementById("user");
    jspass = document.getElementById("pass");
    errosmsg = document.querySelectorAll(".myform p");
    jsdiscap = document.getElementById("discap");
    jsmycap = document.querySelectorAll("#mycap input");
    jsicons = document.getElementById("icons");
}

objload();

function formvalidation()
{
    if(jsuser.value=="")
    {
        errosmsg[0].style.display="block";
    }
    if(jspass.value=="")
    {
        errosmsg[1].style.display="block";
    }
    if(jsuser.value!="" && jspass.value!="")
    {
        if(jsuser.value=="admin@gmail.com" && jspass.value=="admin")
        {
            alert("welcome");
            setTimeout(() => {
                window.location.href="http://google.com";
            }, 2000);
        }
        else
        {
            alert("email and password don't match");
            resetform();
        }
    }
}


jsuser.addEventListener("input",()=>{
    errosmsg[0].removeAttribute("style");
});

jspass.addEventListener("input",()=>{
    errosmsg[1].removeAttribute("style");
});

function resetform()
{
jsuser.value="";
jspass.value="";
jsuser.focus();

}

var a="";
function generatecap()
{
    a =parseInt((Math.random()+1)*4368);
    console.log(a);
    jsdiscap.innerText=a;
}
generatecap();


var compcap;

    jsmycap[0].addEventListener("input",()=>{
       capvalidation();
        jsmycap[1].focus();
    });

    jsmycap[1].addEventListener("input",()=>{
       capvalidation();
        jsmycap[2].focus();
    });

    jsmycap[2].addEventListener("input",()=>{
        capvalidation();
        jsmycap[3].focus();
    });

    jsmycap[3].addEventListener("input",()=>{
        capvalidation();
    });


    function capvalidation()
    {
         compcap = `${jsmycap[0].value}${jsmycap[1].value}${jsmycap[2].value}${jsmycap[3].value}`
        console.log(compcap);
        if(compcap==a)
        {
            jsicons.innerHTML=`<i class="fa fa-check" aria-hidden="true"></i>`;
            formvalidation();
        }
        else
        {
            jsicons.innerHTML=`<i class="fa fa-times" aria-hidden="true"></i>`;
        }
    }

