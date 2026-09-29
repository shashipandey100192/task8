var store = [10,50,40,5,"kumar",70,2,"rohit"];

var jsdiv;
var jstext;
var jsopt;

function loadobject()
{
   jsdiv = document.querySelectorAll("div");
   jstext = document.getElementById('mytext');
   jsopt = document.querySelector("select");
}
loadobject();

function disinfo()
{
    jsdiv[0].innerHTML=`Total Length: (${store.length}) : ${store}`;
     datamapping();
}

disinfo();

function additem()
{
    if(jstext.value=="" || (jsopt.value!="left" && jsopt.value!="right"))
    {
        alert("fill data");
    }
    else
    {
        if(jsopt.value=="left")
        {
            store.unshift(jstext.value);
        }
        else
        {
            store.push(jstext.value);
        }
    }
    disinfo();
    datamapping();
}


function removeitem()
{
    if((jsopt.value!="left" && jsopt.value!="right"))
    {
        alert("fill data");
    }
    else
    {
        if(jsopt.value=="left")
        {
            store.shift()
        }
        else
        {
            store.pop();
        }
    }
    disinfo();
}


function sortitem()
{
    store.sort();
    disinfo();
}

function reveseitem()
{
    sortitem();
    store.reverse();
    disinfo();
}


function indexpostion()
{
    var a;
    if(jsopt.value=="left")
    {
        a = store.indexOf(jstext.value);
    }
    else if(jsopt.value=="right")
    {
        a = store.lastIndexOf(jstext.value);
    }
    else
    {
        alert("not match");
    }
    jsdiv[1].innerHTML=`Match Postion Index No: ${a}`;
}



function  datafilter()
{
    var filterdata = store.filter((f)=>{
        return f==jstext.value;
    });
    jsdiv[2].innerHTML=`Match Count:(${filterdata.length}): ${filterdata}`;
}

function datamapping()
{
    var mytemplatearea = document.querySelector(".mytemplate");
    var mytemp = store.map((t)=>{
        return `<section>${t}</section>`;
    });

    mytemplatearea.innerHTML = mytemp.join("");
    console.log(mytemp);



}



