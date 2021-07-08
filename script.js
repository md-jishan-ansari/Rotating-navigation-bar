document.querySelector("#open").addEventListener
("click",function(){
    document.querySelector(".container").classList.add("show-nav");

});
document.querySelector("#close").addEventListener
("click",function(){
    document.querySelector(".container").classList.remove("show-nav");

});