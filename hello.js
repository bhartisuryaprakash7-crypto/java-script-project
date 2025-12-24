let form =document.querySelector("#form");
let input =document.querySelectorAll("input");
let body =document.body;

form.addEventListener("submit",function(val){
  val.preventDefault();


  let main =document.createElement("div");
main.classList.add("main");

let card =document.createElement("div");
card.id ="card";

let h4 =document.createElement("h4");
h4.setAttribute("id","h4");
h4.innerHTML="<u><i>Your Profile</i></u>"

let imgdiv =document.createElement("div");
imgdiv.id ="img";

let img =document.createElement("img");
img.setAttribute("src",input[0].value);

let h3 =document.createElement("h3");
h3.setAttribute("id","h3");
h3.textContent="NAME : "+ input[1].value;

 
let prakash =document.createElement("div");
prakash.setAttribute("id","prakash");
 
let p =document.createElement("p");
p.setAttribute("id","p");
p.textContent=input[3].value;

let divh6 =document.createElement("div");
divh6.setAttribute("id","sp");

let h6 =document.createElement("h6");
h6.setAttribute("id","h6");
h6.textContent =input[2].value;

body.appendChild(main);
main.appendChild(card);
card.appendChild(h4);
card.appendChild(imgdiv);
imgdiv.appendChild(img);
card.appendChild(h3);
card.appendChild(prakash);
prakash.appendChild(p);
prakash.appendChild(divh6);
divh6.appendChild(h6);
});




