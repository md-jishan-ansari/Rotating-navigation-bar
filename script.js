document.querySelector("#open").addEventListener
("click",function(){
    document.querySelector(".container").classList.add("show-nav");
    document.querySelector(".circle").classList.add("circle-active");
    
});
document.querySelector("#close").addEventListener
("click",function(){
    document.querySelector(".container").classList.remove("show-nav");
    document.querySelector(".circle").classList.remove("circle-active");
});
