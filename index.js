let gd=document.querySelector("#cd>p");
let dte=new Date();
gd.innerText=dte.getDate()+"/"+dte.getMonth()+"/"+dte.getFullYear();
console.log(gd);