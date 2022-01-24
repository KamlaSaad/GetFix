 var close=document.getElementById("close"),
     menu=document.getElementById("menu"),
     menuIcon=document.getElementById("menu-icon"),
     meta=document.getElementById("meta");
     
menuIcon.onclick=function(){
   var left=menu.style.left;
   console.log("left"+ left);
   console.log("back "+menu.style.background);
   if(left.trim()=="0"){menu.style.left="-220px";
   }else{menu.style.left="0"}
}
close.onclick=function(){
   menu.style.left="-220px";
}
