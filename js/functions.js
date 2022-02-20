
function loadFile(page) {
    document.getElementById("title").innerHTML=page;
    let container1 = '<object type="text/html" class="container" data="';
    let container2 = container1.concat(page,'" ></object>');
    document.getElementById("box").innerHTML=container2;
}

function loaded(){
    loadFile("about.html");
}
