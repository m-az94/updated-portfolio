//--- MAIN PAGE LOGIC
//---- Introductory Section functions 

function hi(){
    var hi = $("<p>");
    hi.text("Hi, ");
    hi.addClass("myIntro");
    $("#intro").append(hi)
}
function whoAmI(){
    var whoAmI =$("<p>");
    whoAmI.text("my name is Maria ");
    whoAmI.addClass("myIntro")
    $("#intro").append(whoAmI);
}

function whatDoIDo(){
    var whatDoIDo= $("<p>");
    whatDoIDo.text("and I'm a Web Developer. ");
    whatDoIDo.addClass("myIntro");
    $("#intro").append(whatDoIDo);
}
function viewMyWork(){
    var viewMyWork = $("<a>");
    viewMyWork.text("View My Work");
    viewMyWork.addClass("myWork");
    viewMyWork.attr("href", "#portfolio");
    $("#intro").append(viewMyWork);
}

//---- Introductory Div functioning -----
setTimeout(hi, 1000);
setTimeout(whoAmI, 2500);
setTimeout(whatDoIDo, 4000);
setTimeout(viewMyWork,5500);

    
