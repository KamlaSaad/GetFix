 var close=document.getElementById("close"),
     menu=document.getElementById("menu"),
     menuIcon=document.getElementById("menu-icon")
     ;
menuIcon.onclick=function(){
   var left=menu.style.left;
   console.log("left"+ left);
   if(left=="-220px"){menu.style.left="0";
   }else{menu.style.left="-220px"}
}
close.onclick=function(){
   menu.style.left="-220px";
}